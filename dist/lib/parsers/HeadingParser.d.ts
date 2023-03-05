import ContentParser from '.';
import { BuildingBlock } from '../models';
import { Heading1ObjectRequest, Heading2ObjectRequest, Heading3ObjectRequest } from '../type/blockObjectRequests';
import { RichText } from '../type/redefinitions';
type HeadingBuildingBlock = BuildingBlock<Heading1ObjectRequest | Heading2ObjectRequest | Heading3ObjectRequest>;
type Type = NonNullable<HeadingBuildingBlock['type']>;
declare class HeadingParser extends ContentParser {
    private readonly type;
    constructor(type: Type);
    private makeBuildingBlock;
    parse: (richText: RichText, buildingBlock: HeadingBuildingBlock) => undefined | HeadingBuildingBlock;
}
export default HeadingParser;
