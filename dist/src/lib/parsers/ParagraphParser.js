"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class ParagraphParser extends index_1.default {
    constructor(content, type) {
        super(content);
        this.parse = (buildingBlock) => {
            if (buildingBlock.type === undefined) {
                return undefined;
            }
            if (!buildingBlock.block) {
                return {
                    type: 'paragraph',
                    block: {
                        paragraph: { rich_text: [] },
                        type: 'paragraph',
                    },
                };
            }
            buildingBlock.block.paragraph.rich_text.push({
                type: 'text',
                text: {
                    content: this.content,
                },
            });
            return buildingBlock;
        };
        this.type = type;
    }
}
exports.default = ParagraphParser;
