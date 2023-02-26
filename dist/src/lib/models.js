"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialHeading3 = exports.initialHeading2 = exports.initialHeading1 = void 0;
const initialHeading1 = (buildingBlock) => (Object.assign(Object.assign({}, buildingBlock), { type: 'heading_1', block: {
        type: 'heading_1',
        object: 'block',
        heading_1: {
            rich_text: []
        }
    } }));
exports.initialHeading1 = initialHeading1;
const initialHeading2 = (buildingBlock) => (Object.assign(Object.assign({}, buildingBlock), { type: 'heading_2', block: {
        type: 'heading_2',
        object: 'block',
        heading_2: {
            rich_text: []
        }
    } }));
exports.initialHeading2 = initialHeading2;
const initialHeading3 = (buildingBlock) => (Object.assign(Object.assign({}, buildingBlock), { type: 'heading_3', block: {
        type: 'heading_3',
        object: 'block',
        heading_3: {
            rich_text: []
        }
    } }));
exports.initialHeading3 = initialHeading3;
