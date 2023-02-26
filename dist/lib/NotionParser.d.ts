import ContentParser from './parsers';
import { BlockObjectRequestType } from './type/blockObjectRequests';
declare class NotionParser {
    private buildingBlock;
    private producedBlocks;
    private currentElementsStack;
    private lastElement;
    private isWaitingForBodyElement;
    private pushToProducedBlocks;
    getBlocks: () => BlockObjectRequestType[];
    onOpenTag: (tagName: string) => void;
    private preCheckHtmlFormat;
    onText: (content: string) => void;
    onCloseTag: (tagName: string) => void;
    flushBuildingBlock: () => void;
    initContentParser: (content: string) => ContentParser | undefined;
}
export default NotionParser;
