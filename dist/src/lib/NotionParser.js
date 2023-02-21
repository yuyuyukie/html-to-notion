"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HeadingParser_1 = require("./parsers/HeadingParser");
const ParagraphParser_1 = require("./parsers/ParagraphParser");
const config_1 = require("./config");
class NotionParser {
    constructor() {
        this.buildingBlock = {};
        this.producedBlocks = [];
        this.currentElementsStack = [];
        this.isWaitingForBodyElement = false;
        this.getBlocks = () => this.producedBlocks;
        this.onOpenTag = (tagName, attributes) => {
            var _a, _b;
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
            const src = (_b = attributes.src) !== null && _b !== void 0 ? _b : attributes.href;
            if (src) {
                this.buildingBlock.src = src;
            }
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
                console.log("parse", this.buildingBlock);
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
            console.log({ tagName });
            if (!tagName)
                return;
            const blockType = config_1.tagNameToNotionBlockType[tagName];
            console.log({ blockType });
            switch (blockType) {
                case 'heading_1':
                case 'heading_2':
                case 'heading_3': {
                    return new HeadingParser_1.default(content, blockType);
                }
                default: {
                    return new ParagraphParser_1.default(content, 'paragraph');
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
}
exports.default = NotionParser;
