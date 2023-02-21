import { BuildingBlock } from '../models';

abstract class ContentParser {
  constructor(protected content: string) {}

  public abstract parse(
    buildingBlock?: BuildingBlock
  ): BuildingBlock | undefined;
}

export default ContentParser;
