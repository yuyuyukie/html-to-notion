import ContentParser from './ContentParser';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
declare class NotionParser {
    private buildingBlock;
    private producedBlocks;
    private currentElementsStack;
    private isWaitingForBodyElement;
    getBlocks: () => BlockObjectResponse[];
    onOpenTag: (tagName: string, attributes: {
        [s: string]: string;
    }) => void;
    private preCheckHtmlFormat;
    private setLinkAttributesIfExists;
    onText: (content: string) => void;
    onCloseTag: () => void;
    flushBuildingBlock: () => void;
    flushElementStack: () => void;
    initContentParser: (content: string) => ContentParser;
}
export default NotionParser;
