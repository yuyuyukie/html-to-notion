import ContentParser from '.';
import {
  BuildingBlock,
  initialHeading1,
  initialHeading2,
  initialHeading3
} from '../models';
import {
  Heading1ObjectRequest,
  Heading2ObjectRequest,
  Heading3ObjectRequest
} from '../type/blockObjectRequests';
import { RichText } from '../type/redefinitions';

type HeadingBuildingBlock = BuildingBlock<
  Heading1ObjectRequest | Heading2ObjectRequest | Heading3ObjectRequest
>;
type Type = NonNullable<HeadingBuildingBlock['type']>;

class HeadingParser extends ContentParser {
  private readonly type: Type;

  constructor(type: Type) {
    super();
    this.type = type;
  }

  private makeBuildingBlock(buildingBlock: HeadingBuildingBlock): HeadingBuildingBlock {
    if (!buildingBlock.block) {
      switch (this.type) {
        case 'heading_1': {
          return initialHeading1(buildingBlock);
        }
        case 'heading_2': {
          return initialHeading2(buildingBlock);
        }
        case 'heading_3': {
          return initialHeading3(buildingBlock);
        }
        default: {
          throw new Error(
            `Unexpected block type appeared. this.type: ${this.type}`
          );
        }
      }
    }
    return buildingBlock;
  }

  parse = (
    richText: RichText,
    buildingBlock: HeadingBuildingBlock
  ): undefined | HeadingBuildingBlock => {
    const newBlock = this.makeBuildingBlock(buildingBlock);
    // utilize flows
    // @ts-ignore
    const block = newBlock.block[newBlock.type] as
      | Heading1ObjectRequest['heading_1']
      | undefined;
    if (!block) {
      throw new Error(
        `Unexpected structure of BuildingBlock. buildingBlock.type: ${newBlock.type}`
      );
    }

    block.rich_text.push({
      type: 'text',
      text: {
        content: richText.text.content
      }
    });
    console.log({ newBlock });
    return newBlock;
  };
}

export default HeadingParser;
