import ContentParser from './index';
import { BuildingBlock } from '../models';
import { ParagraphObjectRequest } from '../type/blockObjectRequests';
import { RichText } from '../type/redefinitions';
export type Type = NonNullable<BuildingBlock<ParagraphObjectRequest>['type']>;
type ParagraphBuildingBlock = BuildingBlock<ParagraphObjectRequest>;
declare class ParagraphParser extends ContentParser {
    private readonly type;
    constructor(type: Type);
    parse: (richText: RichText, buildingBlock: ParagraphBuildingBlock) => ParagraphBuildingBlock;
}
export default ParagraphParser;
