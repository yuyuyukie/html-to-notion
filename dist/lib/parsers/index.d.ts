import { BuildingBlock } from '../models';
import { RichText, RichTextItemRequest } from '../type/redefinitions';
declare abstract class ContentParser {
    protected addRichText(rich_text: RichTextItemRequest[], addingRichText: RichText): RichTextItemRequest[];
    abstract parse(richText: RichText, buildingBlock?: BuildingBlock): BuildingBlock | undefined;
}
export default ContentParser;
