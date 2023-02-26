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
        this.lastElement = undefined;
        this.isWaitingForBodyElement = false;
        this.pushToProducedBlocks = () => {
            this.producedBlocks.push(this.buildingBlock);
            this.flushBuildingBlock();
        };
        this.getBlocks = () => this.producedBlocks.map(value => value.block).filter((value) => !!value);
        this.onOpenTag = (tagName) => {
            var _a, _b;
            this.preCheckHtmlFormat(tagName);
            if (this.isWaitingForBodyElement)
                return;
            if (this.currentElementsStack.length > 0 && !!((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block)) {
                const isBlock = !!config_1.tagNameToNotionBlockType[tagName];
                // if block were nested, flush buildingBlock to flat blocks
                if (isBlock) {
                    this.pushToProducedBlocks();
                }
                // if a br tag appears, add line break to current rich_text
                if (tagName === 'br' && this.buildingBlock.type && this.lastElement !== 'br') {
                    // @ts-ignore
                    const richText = (_b = this.buildingBlock.block[this.buildingBlock.type]) === null || _b === void 0 ? void 0 : _b.rich_text;
                    if (richText === null || richText === void 0 ? void 0 : richText.length) {
                        richText.push({
                            type: 'text',
                            text: {
                                content: '\n'
                            }
                        });
                    }
                }
            }
            this.currentElementsStack.push(tagName);
            this.lastElement = tagName;
        };
        this.onText = (content) => {
            if (this.isWaitingForBodyElement)
                return;
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
                if (!contentParser)
                    return;
                const buildingBlock = contentParser.parse(this.buildingBlock);
                if (buildingBlock) {
                    this.buildingBlock = buildingBlock;
                }
            }
        };
        this.onCloseTag = (tagName) => {
            var _a;
            if (this.isWaitingForBodyElement)
                return;
            if (((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block) && config_1.tagNameToNotionBlockType[tagName] === this.buildingBlock.type) {
                this.pushToProducedBlocks();
            }
            this.currentElementsStack.pop();
        };
        this.flushBuildingBlock = () => {
            this.buildingBlock = {};
        };
        this.initContentParser = (content) => {
            const tagName = [...this.currentElementsStack].pop();
            if (!tagName)
                return;
            const blockType = config_1.tagNameToNotionBlockType[tagName];
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
