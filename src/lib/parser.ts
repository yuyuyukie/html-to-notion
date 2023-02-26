import { Parser } from 'htmlparser2';
import NotionParser from './NotionParser';
import { BlockObjectRequestType } from './type/blockObjectRequests';

const initParser = (notionParser: NotionParser) =>
  new Parser({
    onopentag(tagName, attributes) {
      notionParser.onOpenTag(tagName, attributes);
    },
    ontext(content) {
      notionParser.onText(content);
    },
    onclosetag(tagName) {
      notionParser.onCloseTag(tagName);
    },
  });

const parseHtmlToNotionBlocks = (html: string): BlockObjectRequestType[] => {
  const notionParser = new NotionParser();
  const parser = initParser(notionParser);
  parser.write(html);
  parser.end();
  return notionParser.getBlocks();
};

export default parseHtmlToNotionBlocks;
