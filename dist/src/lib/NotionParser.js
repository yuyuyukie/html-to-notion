"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notionUtils_1 = require("./notionUtils");
const HeadingParser_1 = require("./parsers/HeadingParser");
const ParagraphParser_1 = require("./parsers/ParagraphParser");
class NotionParser {
    constructor() {
        this.buildingBlock = {};
        this.producedBlocks = [];
        this.currentElementsStack = [];
        this.isWaitingForBodyElement = false;
        this.getBlocks = () => this.producedBlocks;
        this.onOpenTag = (tagName, attributes) => {
            var _a;
            this.preCheckHtmlFormat(tagName);
            if (this.isWaitingForBodyElement)
                return;
            if (this.currentElementsStack.length > 0 && !!((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block)) {
                if (tagName === 'br') {
                    this.producedBlocks.push(this.buildingBlock.block);
                    this.flushBuildingBlock();
                }
                this.currentElementsStack.push(tagName);
            }
            else {
                this.currentElementsStack = [tagName];
            }
            this.setLinkAttributesIfExists(attributes);
        };
        this.onText = (content) => {
            if (this.isWaitingForBodyElement)
                return;
            const addSpaceBeforeContent = (val) => ` ${val}`;
            const currentBlockHasText = this.buildingBlock.block && this.currentElementsStack.length > 0;
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
                if (!contentParser)
                    return;
                const buildingBlock = contentParser.parse(this.buildingBlock);
                if (buildingBlock) {
                    this.buildingBlock = buildingBlock;
                }
            }
        };
        this.onCloseTag = () => {
            var _a;
            if (this.isWaitingForBodyElement)
                return;
            if (((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block) && this.currentElementsStack.length === 1) {
                this.producedBlocks.push(this.buildingBlock.block);
                this.flushBuildingBlock();
            }
            this.currentElementsStack.splice(-1, 1);
        };
        this.flushBuildingBlock = () => {
            this.buildingBlock = {};
        };
        this.flushElementStack = () => {
            this.currentElementsStack = [];
        };
        this.initContentParser = (content) => {
            const tagName = [...this.currentElementsStack].pop();
            if (!tagName)
                return;
            const blockType = notionUtils_1.textTagNameToNotionTypeMap.get(tagName);
            if (!blockType)
                return;
            switch (blockType) {
                case 'heading_1':
                case 'heading_2':
                case 'heading_3': {
                    return new HeadingParser_1.default(content, blockType);
                }
                // case 'a': {
                //   return new LinkParser(content);
                // }
                case 'paragraph': {
                    return new ParagraphParser_1.default(content, 'paragraph');
                }
                default: {
                    return undefined;
                }
            }
        };
    }
    preCheckHtmlFormat(tagName) {
        if (tagName === 'html') {
            this.isWaitingForBodyElement = true;
        }
        if (tagName === 'body') {
            this.isWaitingForBodyElement = false;
        }
    }
    setLinkAttributesIfExists(attributes) {
        if (attributes.src) {
            this.buildingBlock.src = attributes.src;
        }
        else if (attributes.href) {
            this.buildingBlock.src = attributes.href;
        }
    }
}
exports.default = NotionParser;
