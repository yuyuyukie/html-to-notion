import ContentParser from './parsers';
import { BuildingBlock } from './models';
import { BlockObjectRequestType } from './type/blockObjectRequests';
import HeadingParser from './parsers/HeadingParser';
import ParagraphParser from './parsers/ParagraphParser';
import { tagNameToNotionBlockType } from './config';
import { RichTextItemRequest } from './type/redefinitions';

class NotionParser {
  private buildingBlock: BuildingBlock = {};

  private producedBlocks: BuildingBlock[] = [];

  private currentElementsStack: string[] = [];

  private lastElement: string | undefined = undefined;

  private isWaitingForBodyElement: boolean = false;

  private pushToProducedBlocks = (): void => {
    this.producedBlocks.push(this.buildingBlock);
    this.flushBuildingBlock();
  };

  getBlocks = (): BlockObjectRequestType[] => this.producedBlocks.map(value => value.block).filter<BlockObjectRequestType>((value): value is BlockObjectRequestType => !!value);

  onOpenTag = (tagName: string, attributes: { [s: string]: string }): void => {
    console.log(attributes);
    this.preCheckHtmlFormat(tagName);
    if (this.isWaitingForBodyElement) return;
    if (this.currentElementsStack.length > 0 && !!this.buildingBlock?.block) {
      const isBlock = !!tagNameToNotionBlockType[tagName];
      // if block were nested, flush buildingBlock to flat blocks
      if (isBlock) {
        this.pushToProducedBlocks();
      }
      // if a br tag appears, add line break to current rich_text
      if (tagName === 'br' && this.buildingBlock.type && this.lastElement !== 'br') {
        // @ts-ignore
        this.buildingBlock.block[this.buildingBlock.type]?.rich_text.push({
          type: 'text',
          text: {
            content: '\n'
          }
        } satisfies RichTextItemRequest);
      }
      this.currentElementsStack.push(tagName);
    } else {
      this.currentElementsStack = [tagName];
    }
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
      const contentParser = this.initContentParser(cleanContent);
      if (!contentParser) return;
      const buildingBlock = contentParser.parse(this.buildingBlock);
      if (buildingBlock) {
        this.buildingBlock = buildingBlock;
      }
    }
  };

  onCloseTag = (tagName: string): void => {
    if (this.isWaitingForBodyElement) return;
    if (this.buildingBlock?.block && tagNameToNotionBlockType[tagName] === this.buildingBlock.type) {
      this.pushToProducedBlocks();
    }
    this.currentElementsStack.pop();
  };

  flushBuildingBlock = (): void => {
    this.buildingBlock = {};
  };

  initContentParser = (content: string): ContentParser | undefined => {
    const tagName = [...this.currentElementsStack].pop();
    if (!tagName) return;
    const blockType = tagNameToNotionBlockType[tagName];
    switch (blockType) {
      case 'heading_1':
      case 'heading_2':
      case 'heading_3': {
        return new HeadingParser(content, blockType);
      }
      default: {
        return new ParagraphParser(content, 'paragraph');
      }
    }
  };
}

export default NotionParser;
