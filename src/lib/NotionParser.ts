import ContentParser from './parsers';
import { BuildingBlock } from './models';
import { textTagNameToNotionTypeMap } from './notionUtils';
import { BlockObjectRequestType } from './type/blockObjectRequests';
import HeadingParser from './parsers/HeadingParser';
import ParagraphParser from './parsers/ParagraphParser';

class NotionParser {
  private buildingBlock: BuildingBlock = {};

  private producedBlocks: BlockObjectRequestType[] = [];

  private currentElementsStack: string[] = [];

  private isWaitingForBodyElement: boolean = false;

  getBlocks = (): BlockObjectRequestType[] => this.producedBlocks;

  onOpenTag = (tagName: string, attributes: { [s: string]: string }): void => {
    this.preCheckHtmlFormat(tagName);
    if (this.isWaitingForBodyElement) return;
    if (this.currentElementsStack.length > 0 && !!this.buildingBlock?.block) {
      if (tagName === 'br') {
        this.producedBlocks.push(this.buildingBlock.block);
        this.flushBuildingBlock();
      }
      this.currentElementsStack.push(tagName);
    } else {
      this.currentElementsStack = [tagName];
    }
    this.setLinkAttributesIfExists(attributes);
  };

  private preCheckHtmlFormat(tagName: string) {
    if (tagName === 'html') {
      this.isWaitingForBodyElement = true;
    }
    if (tagName === 'body') {
      this.isWaitingForBodyElement = false;
    }
  }

  private setLinkAttributesIfExists(attributes: { [s: string]: string }) {
    if (attributes.src) {
      this.buildingBlock.src = attributes.src;
    } else if (attributes.href) {
      this.buildingBlock.src = attributes.href;
    }
  }

  onText = (content: string): void => {
    if (this.isWaitingForBodyElement) return;
    const addSpaceBeforeContent = (val: string) => ` ${val}`;
    const currentBlockHasText =
      this.buildingBlock.block && this.currentElementsStack.length > 0;

    // matches tabs, newlines, more than 2 spaces and
    // unicode zero-width characters (https://stackoverflow.com/a/11305926/5654715)
    let cleanContent = content
      .replace(/[\t\n\r\u200B\u200C\u200D\uFEFF]/gm, '')
      .replace(/\s{2,}/gm, ' ')
      .trim();

    if (cleanContent) {
      if (currentBlockHasText) {
        cleanContent = addSpaceBeforeContent(cleanContent);
      }
      const contentParser = this.initContentParser(cleanContent);
      if (!contentParser) return;
      const buildingBlock = contentParser.parse(this.buildingBlock);
      if (buildingBlock) {
        this.buildingBlock = buildingBlock;
      }
    }
  };

  onCloseTag = (): void => {
    if (this.isWaitingForBodyElement) return;
    if (this.buildingBlock?.block && this.currentElementsStack.length === 1) {
      this.producedBlocks.push(this.buildingBlock.block);
      this.flushBuildingBlock();
    }
    this.currentElementsStack.splice(-1, 1);
  };

  flushBuildingBlock = (): void => {
    this.buildingBlock = {};
  };

  flushElementStack = () => {
    this.currentElementsStack = [];
  };

  initContentParser = (content: string): ContentParser | undefined => {
    const tagName = [...this.currentElementsStack].pop();
    if (!tagName) return;
    const blockType = textTagNameToNotionTypeMap.get(tagName);
    if (!blockType) return;
    switch (blockType) {
      case 'heading_1':
      case 'heading_2':
      case 'heading_3': {
        return new HeadingParser(content, blockType);
      }
      // case 'a': {
      //   return new LinkParser(content);
      // }
      case 'paragraph': {
        return new ParagraphParser(content, 'paragraph');
      }
      default: {
        return undefined;
      }
    }
  };
}

export default NotionParser;
