"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const models_1 = require("../models");
class HeadingParser extends _1.default {
    constructor(content, type) {
        super(content);
        this.parse = (buildingBlock) => {
            if (buildingBlock.type === undefined || this.type !== buildingBlock.type) {
                return undefined;
            }
            if (!buildingBlock.block) {
                switch (this.type) {
                    case 'heading_1': {
                        return models_1.initialHeading1;
                    }
                    case 'heading_2': {
                        return models_1.initialHeading2;
                    }
                    case 'heading_3': {
                        return models_1.initialHeading3;
                    }
                    default: {
                        throw new Error(`Unexpected block type appeared. this.type: ${this.type}`);
                    }
                }
            }
            // utilize flows
            // @ts-ignore
            const block = buildingBlock.block[buildingBlock.type];
            if (!block) {
                throw new Error(`Unexpected structure of BuildingBlock. buildingBlock.type: ${buildingBlock.type}`);
            }
            block.rich_text.push({
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
exports.default = HeadingParser;
