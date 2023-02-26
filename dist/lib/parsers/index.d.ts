import { BuildingBlock } from '../models';
declare abstract class ContentParser {
    protected content: string;
    constructor(content: string);
    abstract parse(buildingBlock?: BuildingBlock): BuildingBlock | undefined;
}
export default ContentParser;
