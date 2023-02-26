import ContentParser from './parsers';
import { BlockObjectRequestType } from './type/blockObjectRequests';
declare class NotionParser {
    private buildingBlock;
    private producedBlocks;
    private currentElementsStack;
    private isWaitingForBodyElement;
    private pushToProducedBlocks;
    getBlocks: () => BlockObjectRequestType[];
    onOpenTag: (tagName: string, attributes: {
        [s: string]: string;
    }) => void;
    private preCheckHtmlFormat;
    onText: (content: string) => void;
    onCloseTag: () => void;
    flushBuildingBlock: () => void;
    initContentParser: (content: string) => ContentParser | undefined;
}
export default NotionParser;
