import ContentParser from '.';
import { BuildingBlock, initialHeading1, initialHeading2, initialHeading3 } from '../models';
import { Heading1ObjectRequest, Heading2ObjectRequest, Heading3ObjectRequest } from '../type/blockObjectRequests';

type HeadingBuildingBlock = BuildingBlock<Heading1ObjectRequest | Heading2ObjectRequest | Heading3ObjectRequest>
type Type = NonNullable<HeadingBuildingBlock['type']>

class HeadingParser extends ContentParser {
  private readonly type: Type;

  constructor(content: string, type: Type) {
    super(content);
    this.type = type;
  }

  parse = (buildingBlock: HeadingBuildingBlock): undefined | HeadingBuildingBlock => {
    if (buildingBlock.type === undefined || this.type !== buildingBlock.type) {
      return undefined;
    }
    if (!buildingBlock.block) {
      switch (this.type) {
        case 'heading_1': {
          return initialHeading1;
        }
        case 'heading_2': {
          return initialHeading2;
        }
        case 'heading_3': {
          return initialHeading3;
        }
        default: {
          throw new Error(`Unexpected block type appeared. this.type: ${this.type}`);
        }
      }
    }
    // utilize flows
    // @ts-ignore
    const block = (buildingBlock.block[buildingBlock.type] as (Heading1ObjectRequest['heading_1'] | undefined));
    if (!block) {
      throw new Error(`Unexpected structure of BuildingBlock. buildingBlock.type: ${buildingBlock.type}`);
    }
    block.rich_text.push({
      type: 'text',
      text: {
        content: this.content
      }
    });
    return buildingBlock;
  };
}

export default HeadingParser;
