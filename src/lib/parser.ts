import { Parser } from 'htmlparser2';
import NotionParser from './NotionParser';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const initParser = (notionParser: NotionParser) =>
  new Parser({
    onopentag(tagName, attributes) {
      notionParser.onOpenTag(tagName, attributes);
    },
    ontext(content) {
      notionParser.onText(content);
    },
    onclosetag() {
      notionParser.onCloseTag();
    },
  });

const parseHtmlToNotionBlocks = (html: string): BlockObjectResponse[] => {
  const notionParser = new NotionParser();
  const parser = initParser(notionParser);
  parser.write(html);
  parser.end();
  return notionParser.getBlocks();
};

export default parseHtmlToNotionBlocks;
