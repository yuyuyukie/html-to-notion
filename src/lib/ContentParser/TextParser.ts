import ContentParser from '.';
import { BuildingBlock } from '../models';
import {
  NotionBlockType
} from '../notionUtils';
import { Heading1ObjectRequest, Heading2ObjectRequest, Heading3ObjectRequest } from '../type/blockObjectRequests';

type HeadingBuildingBlock = BuildingBlock<Heading1ObjectRequest | Heading2ObjectRequest | Heading3ObjectRequest>

class TextParser extends ContentParser {
  private readonly type: Extract<NotionBlockType, 'heading_1' | 'heading_2' | 'heading_3'> | undefined;

  constructor(content: string, type: Extract<NotionBlockType, 'heading_1' | 'heading_2' | 'heading_3'>) {
    super(content);
    this.type = type;
  }

  parse = (buildingBlock: HeadingBuildingBlock): undefined | HeadingBuildingBlock => {
    if (buildingBlock.type === undefined || this.type === undefined) {
      return undefined;
    }
    if (!buildingBlock.block) {
      return {
        ...buildingBlock,
        block: {
          // TODO this.typeをユニオンにするととれなくなる
          object: 'block',
          type: this.type,
          [this.type]: {
            rich_text: []
          }
        },
        type: this.type
      };
    }
    if (buildingBlock.type) {
      // Tricky dynamic type part. Disabling...
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buildingBlock.block[buildingBlock.type].text.push({
        type: 'text',
        text: {
          content: this.content
        }
      });
    }
    return buildingBlock;
  };
}

export default TextParser;
