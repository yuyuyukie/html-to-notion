"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagNameToNotionBlockType = void 0;
const notionBlockTypes = [
    'paragraph',
    'heading_1',
    'heading_2',
    'heading_3'
];
exports.tagNameToNotionBlockType = {
    h1: 'heading_1',
    h2: 'heading_2',
    h3: 'heading_3',
    h4: 'heading_3',
    h5: 'heading_3',
    h6: 'heading_3',
    p: 'paragraph',
    a: 'paragraph'
};