"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class ContentParser {
    addRichText(rich_text, addingRichText) {
        const lastElement = rich_text[rich_text.length - 1];
        const r = (0, lodash_1.cloneDeep)(rich_text);
        const a = (0, lodash_1.cloneDeep)(addingRichText);
        if (lastElement && lastElement.type === "text" && lastElement.text.content === "\n") {
            a.text.content = `\n${a.text.content}`;
            r.pop();
        }
        r.push(a);
        return r;
    }
}
exports.default = ContentParser;
