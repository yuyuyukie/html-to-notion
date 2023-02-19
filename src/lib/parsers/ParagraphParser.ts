import ContentParser from './index';
import { BuildingBlock } from '../models';
import {
  ParagraphObjectRequest
} from '../type/blockObjectRequests';

export type Type = NonNullable<BuildingBlock<ParagraphObjectRequest>['type']>

type HeadingBuildingBlock = BuildingBlock<ParagraphObjectRequest>

class ParagraphParser extends ContentParser {
  private readonly type: Type;

  constructor(content: string, type: Type) {
    super(content);
    this.type = type;
  }

  parse = (buildingBlock: HeadingBuildingBlock): undefined | HeadingBuildingBlock => {
    if (buildingBlock.type === undefined) {
      return undefined;
    }
    if (!buildingBlock.block) {
      return {
        type: 'paragraph',
        block: {
          paragraph: { rich_text: [] },
          type: 'paragraph'
        }
      };
    }
    buildingBlock.block.paragraph.rich_text.push({
      type: 'text',
      text: {
        content: this.content
      }
    });
    return buildingBlock;
  };
}

export default ParagraphParser;
