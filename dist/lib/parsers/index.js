"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContentParser {
    constructor(content) {
        this.content = content;
    }
    addRichText(rich_text, addingRichText) {
        console.log({ rich_text });
        const lastElement = rich_text[rich_text.length - 1];
        const r = [...rich_text];
        const a = Object.assign({}, addingRichText);
        if (lastElement && lastElement.type === "text" && lastElement.text.content === "\n") {
            a.text.content = `\n${a.text.content}`;
            r.pop();
        }
        r.push(a);
        return r;
    }
}
exports.default = ContentParser;
