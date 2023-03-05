import ContentParser from './parsers';
import { BuildingBlock } from './models';
import { Attributes, BlockObjectRequestType } from './type/blockObjectRequests';
import HeadingParser from './parsers/HeadingParser';
import ParagraphParser from './parsers/ParagraphParser';
import { tagNameToNotionBlockType } from './config';
import { RichText, RichTextItemRequest } from './type/redefinitions';
import { cloneDeep } from 'lodash';

type ElementInfo = {
  tagName: string
  isBlock: boolean
  richText: RichText
}

class NotionParser {
  private buildingBlock: BuildingBlock = {};

  private producedBlocks: BlockObjectRequestType[] = [];

  private currentElementsStack: ElementInfo[] = [];

  private lastElement: string | undefined = undefined;

  private isWaitingForBodyElement: boolean = false;

  private get currentElement(): ElementInfo | undefined {
    return this.currentElementsStack[this.currentElementsStack.length - 1];
  }

  private get isInBlock():boolean {
    return this.currentElementsStack.some(value => value.isBlock)
  }

  private pushToProducedBlocks = (): void => {
    if(!this.buildingBlock.block) return;
    this.producedBlocks.push(cloneDeep(this.buildingBlock.block));
    this.flushBuildingBlock();
  };

  getBlocks = (): BlockObjectRequestType[] => this.producedBlocks;

  onOpenTag = (tagName: string, attrs: Attributes): void => {
    this.preCheckHtmlFormat(tagName);
    if (this.isWaitingForBodyElement) return;
    /**
     * - if tagName-notionBlock mapping was specified
     * - if tag was 1st depth nested and
     */
    const isBlock = !!tagNameToNotionBlockType[tagName] || (!this.buildingBlock.block && !this.isInBlock);
    if (this.currentElementsStack.length > 0 && !!this.buildingBlock?.block) {
      // if block were nested, flush buildingBlock to flat blocks
      if (isBlock) {
        this.pushToProducedBlocks();
      }
      // if a br tag appears, add line break to current rich_text
      if (tagName === 'br' && this.buildingBlock.type && this.lastElement !== 'br') {
        // @ts-ignore
        const richText = this.buildingBlock.block[this.buildingBlock.type]?.rich_text as RichTextItemRequest[] | undefined;
        if (richText?.length) {
          richText.push({
            type: 'text',
            text: {
              content: '\n'
            }
          } satisfies RichTextItemRequest);
        }
      }
    }
    const richText:RichText = {
      type:'text',
      text: {
        content: ""
      },
    }
    if(tagName === "a"){
      richText.text.link = {
        url: attrs.href ?? ""
      }
    }
    this.currentElementsStack.push({
      tagName,
      isBlock,
      richText
    });
    this.lastElement = tagName;
  };

  private preCheckHtmlFormat(tagName: string) {
    if (tagName === 'html') {
      this.isWaitingForBodyElement = true;
    }
    if (tagName === 'body') {
      this.isWaitingForBodyElement = false;
    }
  }

  onText = (content: string): void => {
    if (this.isWaitingForBodyElement) return;
    // for annotation
    // const currentBlockHasText =
    //   this.buildingBlock.block && this.currentElementsStack.length > 0;

    // matches tabs, newlines, more than 2 spaces and
    // unicode zero-width characters (https://stackoverflow.com/a/11305926/5654715)
    let cleanContent = content
      .replace(/[\t\n\r\u200B\u200C\u200D\uFEFF]/gm, '')
      .replace(/\s{2,}/gm, ' ')
      .trim();

    if (cleanContent) {
      if (!this.buildingBlock.parser) {
        this.buildingBlock.parser = this.initContentParser();
      }
      if (!this.buildingBlock.parser) return;
        const addingRichText:RichText = this.currentElementsStack.map<RichText>(value => value.richText).reduce((result, richText) => ({
          ...result,
          ...richText
        }))
      addingRichText.text.content = cleanContent
      const buildingBlock = this.buildingBlock.parser.parse(addingRichText, this.buildingBlock);
      if (buildingBlock) {
        this.buildingBlock = buildingBlock;
      }
    }
  };

  onCloseTag = (tagName: string): void => {
    if (this.isWaitingForBodyElement) return;
    console.log(tagName);
    if (this.buildingBlock?.block && this.currentElement?.isBlock) {
      this.pushToProducedBlocks();
    }
    this.currentElementsStack.pop();
  };

  flushBuildingBlock = (): void => {
    this.buildingBlock = {};
  };

  initContentParser = (): ContentParser | undefined => {
    const elementInfo = [...this.currentElementsStack].pop();
    if (!elementInfo) return;
    const blockType = tagNameToNotionBlockType[elementInfo.tagName];
    switch (blockType) {
      case 'heading_1':
      case 'heading_2':
      case 'heading_3': {
        return new HeadingParser(blockType);
      }
      case 'paragraph': {
        return new ParagraphParser('paragraph');
      }
      default: {
        return new ParagraphParser('paragraph');
      }
    }
  };
}

export default NotionParser;
