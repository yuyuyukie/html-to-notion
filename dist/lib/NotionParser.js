"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HeadingParser_1 = require("./parsers/HeadingParser");
const ParagraphParser_1 = require("./parsers/ParagraphParser");
const config_1 = require("./config");
const lodash_1 = require("lodash");
class NotionParser {
    constructor() {
        this.buildingBlock = {};
        this.producedBlocks = [];
        this.currentElementsStack = [];
        this.lastElement = undefined;
        this.isWaitingForBodyElement = false;
        this.pushToProducedBlocks = () => {
            if (!this.buildingBlock.block)
                return;
            this.producedBlocks.push((0, lodash_1.cloneDeep)(this.buildingBlock.block));
            this.flushBuildingBlock();
        };
        this.getBlocks = () => this.producedBlocks;
        this.onOpenTag = (tagName, attrs) => {
            var _a, _b, _c;
            this.preCheckHtmlFormat(tagName);
            if (this.isWaitingForBodyElement)
                return;
            /**
             * - if tagName-notionBlock mapping was specified
             * - if tag was 1st depth nested and
             */
            const isBlock = !!config_1.tagNameToNotionBlockType[tagName] || (!this.buildingBlock.block && !this.isInBlock);
            if (this.currentElementsStack.length > 0 && !!((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block)) {
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
            const richText = {
                type: 'text',
                text: {
                    content: ""
                },
            };
            if (tagName === "a") {
                richText.text.link = {
                    url: (_c = attrs.href) !== null && _c !== void 0 ? _c : ""
                };
            }
            this.currentElementsStack.push({
                tagName,
                isBlock,
                richText
            });
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
                if (!this.buildingBlock.parser) {
                    this.buildingBlock.parser = this.initContentParser();
                }
                if (!this.buildingBlock.parser)
                    return;
                const addingRichText = this.currentElementsStack.map(value => value.richText).reduce((result, richText) => (Object.assign(Object.assign({}, result), richText)));
                addingRichText.text.content = cleanContent;
                const buildingBlock = this.buildingBlock.parser.parse(addingRichText, this.buildingBlock);
                if (buildingBlock) {
                    this.buildingBlock = buildingBlock;
                }
            }
        };
        this.onCloseTag = (tagName) => {
            var _a, _b;
            if (this.isWaitingForBodyElement)
                return;
            console.log(tagName);
            if (((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block) && ((_b = this.currentElement) === null || _b === void 0 ? void 0 : _b.isBlock)) {
                this.pushToProducedBlocks();
            }
            this.currentElementsStack.pop();
        };
        this.flushBuildingBlock = () => {
            this.buildingBlock = {};
        };
        this.initContentParser = () => {
            const elementInfo = [...this.currentElementsStack].pop();
            if (!elementInfo)
                return;
            const blockType = config_1.tagNameToNotionBlockType[elementInfo.tagName];
            switch (blockType) {
                case 'heading_1':
                case 'heading_2':
                case 'heading_3': {
                    return new HeadingParser_1.default(blockType);
                }
                case 'paragraph': {
                    return new ParagraphParser_1.default('paragraph');
                }
                default: {
                    return new ParagraphParser_1.default('paragraph');
                }
            }
        };
    }
    get currentElement() {
        return this.currentElementsStack[this.currentElementsStack.length - 1];
    }
    get isInBlock() {
        return this.currentElementsStack.some(value => value.isBlock);
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
