import ContentParser from './index';
import { BuildingBlock } from '../models';
import { ParagraphObjectRequest } from '../type/blockObjectRequests';
export type Type = NonNullable<BuildingBlock<ParagraphObjectRequest>['type']>;
type ParagraphBuildingBlock = BuildingBlock<ParagraphObjectRequest>;
declare class ParagraphParser extends ContentParser {
    private readonly type;
    constructor(content: string, type: Type);
    parse: (buildingBlock: ParagraphBuildingBlock) => ParagraphBuildingBlock;
}
export default ParagraphParser;
