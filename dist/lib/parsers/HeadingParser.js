"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const models_1 = require("../models");
class HeadingParser extends _1.default {
    constructor(type) {
        super();
        this.parse = (richText, buildingBlock) => {
            const newBlock = this.makeBuildingBlock(buildingBlock);
            // utilize flows
            // @ts-ignore
            const block = newBlock.block[newBlock.type];
            if (!block) {
                throw new Error(`Unexpected structure of BuildingBlock. buildingBlock.type: ${newBlock.type}`);
            }
            block.rich_text.push({
                type: 'text',
                text: {
                    content: richText.text.content
                }
            });
            console.log({ newBlock });
            return newBlock;
        };
        this.type = type;
    }
    makeBuildingBlock(buildingBlock) {
        if (!buildingBlock.block) {
            switch (this.type) {
                case 'heading_1': {
                    return (0, models_1.initialHeading1)(buildingBlock);
                }
                case 'heading_2': {
                    return (0, models_1.initialHeading2)(buildingBlock);
                }
                case 'heading_3': {
                    return (0, models_1.initialHeading3)(buildingBlock);
                }
                default: {
                    throw new Error(`Unexpected block type appeared. this.type: ${this.type}`);
                }
            }
        }
        return buildingBlock;
    }
}
exports.default = HeadingParser;
