import ContentParser from './index';
import { BuildingBlock } from '../models';
import { ParagraphObjectRequest } from '../type/blockObjectRequests';

export type Type = NonNullable<BuildingBlock<ParagraphObjectRequest>['type']>;

type ParagraphBuildingBlock = BuildingBlock<ParagraphObjectRequest>;

class ParagraphParser extends ContentParser {
  private readonly type: Type;

  constructor(type: Type) {
    super();
    this.type = type;
  }

  parse = (
    content: string,
    buildingBlock: ParagraphBuildingBlock
  ): ParagraphBuildingBlock => {
    if (!buildingBlock.block) {
      buildingBlock = {
        ...buildingBlock,
        type: 'paragraph',
        block: {
          paragraph: { rich_text: [] },
          type: 'paragraph',
          object: 'block'
        }
      };
    }

    if(buildingBlock.block) {
      buildingBlock.block.paragraph.rich_text = this.addRichText(buildingBlock.block.paragraph.rich_text ?? [], {
        type: 'text',
        text: {
          content
        }
      });
    }
    return buildingBlock;
  };
}

export default ParagraphParser;
