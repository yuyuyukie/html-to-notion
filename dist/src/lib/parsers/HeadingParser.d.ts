import ContentParser from '.';
import { BuildingBlock } from '../models';
import { Heading1ObjectRequest, Heading2ObjectRequest, Heading3ObjectRequest } from '../type/blockObjectRequests';
type HeadingBuildingBlock = BuildingBlock<Heading1ObjectRequest | Heading2ObjectRequest | Heading3ObjectRequest>;
type Type = NonNullable<HeadingBuildingBlock['type']>;
declare class HeadingParser extends ContentParser {
    private readonly type;
    constructor(content: string, type: Type);
    parse: (buildingBlock: HeadingBuildingBlock) => undefined | HeadingBuildingBlock;
}
export default HeadingParser;
