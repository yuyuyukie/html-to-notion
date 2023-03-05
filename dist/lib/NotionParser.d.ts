import ContentParser from './parsers';
import { Attributes, BlockObjectRequestType } from './type/blockObjectRequests';
declare class NotionParser {
    private buildingBlock;
    private producedBlocks;
    private currentElementsStack;
    private lastElement;
    private isWaitingForBodyElement;
    private get currentElement();
    private get isInBlock();
    private pushToProducedBlocks;
    getBlocks: () => BlockObjectRequestType[];
    onOpenTag: (tagName: string, attrs: Attributes) => void;
    private preCheckHtmlFormat;
    onText: (content: string) => void;
    onCloseTag: (tagName: string) => void;
    flushBuildingBlock: () => void;
    initContentParser: () => ContentParser | undefined;
}
export default NotionParser;
