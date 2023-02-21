"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class ParagraphParser extends index_1.default {
    constructor(content, type) {
        super(content);
        this.parse = (buildingBlock) => {
            var _a;
            if (!buildingBlock.block) {
                buildingBlock = Object.assign(Object.assign({}, buildingBlock), { type: 'paragraph', block: {
                        paragraph: { rich_text: [] },
                        type: 'paragraph',
                        object: 'block'
                    } });
            }
            (_a = buildingBlock.block) === null || _a === void 0 ? void 0 : _a.paragraph.rich_text.push({
                type: 'text',
                text: {
                    content: this.content,
                    link: buildingBlock.src ? {
                        url: buildingBlock.src
                    } : null
                }
            });
            return buildingBlock;
        };
        this.type = type;
    }
}
exports.default = ParagraphParser;
