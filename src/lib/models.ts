import {
  BlockObjectRequestType,
  Heading1ObjectRequest,
  Heading2ObjectRequest,
  Heading3ObjectRequest,
} from './type/blockObjectRequests';

export type BuildingBlock<
  T extends BlockObjectRequestType = BlockObjectRequestType
> = {
  block?: Extract<BlockObjectRequestType, T>;
  type?: T['type'];
  src?: string;
};

export const initialHeading1 = (buildingBlock?: BuildingBlock): BuildingBlock<Heading1ObjectRequest> => ({
  ...buildingBlock,
  type: 'heading_1',
  block: {
    type: 'heading_1',
    object: 'block',
    heading_1: {
      rich_text: [],
    },
  },
});
export const initialHeading2 = (buildingBlock?: BuildingBlock): BuildingBlock<Heading2ObjectRequest> => ({
  ...buildingBlock,
  type: 'heading_2',
  block: {
    type: 'heading_2',
    object: 'block',
    heading_2: {
      rich_text: [],
    },
  },
});
export const initialHeading3 = (buildingBlock?: BuildingBlock): BuildingBlock<Heading3ObjectRequest> => ({
  ...buildingBlock,
  type: 'heading_3',
  block: {
    type: 'heading_3',
    object: 'block',
    heading_3: {
      rich_text: [],
    },
  },
});
