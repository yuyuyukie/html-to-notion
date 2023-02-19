import ContentParser from './parsers';
import { BlockObjectRequestType } from './type/blockObjectRequests';
declare class NotionParser {
    private buildingBlock;
    private producedBlocks;
    private currentElementsStack;
    private isWaitingForBodyElement;
    getBlocks: () => BlockObjectRequestType[];
    onOpenTag: (tagName: string, attributes: {
        [s: string]: string;
    }) => void;
    private preCheckHtmlFormat;
    private setLinkAttributesIfExists;
    onText: (content: string) => void;
    onCloseTag: () => void;
    flushBuildingBlock: () => void;
    flushElementStack: () => void;
    initContentParser: (content: string) => ContentParser | undefined;
}
export default NotionParser;
