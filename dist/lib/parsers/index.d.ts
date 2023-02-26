import { BuildingBlock } from '../models';
import { RichText, RichTextItemRequest } from '../type/redefinitions';
declare abstract class ContentParser {
    protected content: string;
    constructor(content: string);
    protected addRichText(rich_text: RichTextItemRequest[], addingRichText: RichText): RichTextItemRequest[];
    abstract parse(buildingBlock?: BuildingBlock): BuildingBlock | undefined;
}
export default ContentParser;
