"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2_1 = require("htmlparser2");
const NotionParser_1 = require("./NotionParser");
const initParser = (notionParser) => new htmlparser2_1.Parser({
    onopentag(tagName) {
        notionParser.onOpenTag(tagName);
    },
    ontext(content) {
        notionParser.onText(content);
    },
    onclosetag(tagName) {
        notionParser.onCloseTag(tagName);
    },
});
const parseHtmlToNotionBlocks = (html) => {
    const notionParser = new NotionParser_1.default();
    const parser = initParser(notionParser);
    parser.write(html);
    parser.end();
    return notionParser.getBlocks();
};
exports.default = parseHtmlToNotionBlocks;
