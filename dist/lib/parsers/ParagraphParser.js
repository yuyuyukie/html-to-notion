"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class ParagraphParser extends index_1.default {
    constructor(type) {
        super();
        this.parse = (richText, buildingBlock) => {
            var _a;
            if (!buildingBlock.block) {
                buildingBlock = Object.assign(Object.assign({}, buildingBlock), { type: 'paragraph', block: {
                        paragraph: { rich_text: [] },
                        type: 'paragraph',
                        object: 'block'
                    } });
            }
            if (buildingBlock.block) {
                buildingBlock.block.paragraph.rich_text = this.addRichText((_a = buildingBlock.block.paragraph.rich_text) !== null && _a !== void 0 ? _a : [], richText);
            }
            return buildingBlock;
        };
        this.type = type;
    }
}
exports.default = ParagraphParser;
