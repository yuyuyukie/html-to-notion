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

export const initialHeading1: BuildingBlock<Heading1ObjectRequest> = {
  type: 'heading_1',
  block: {
    type: 'heading_1',
    heading_1: {
      rich_text: [],
    },
  },
};
export const initialHeading2: BuildingBlock<Heading2ObjectRequest> = {
  type: 'heading_2',
  block: {
    type: 'heading_2',
    heading_2: {
      rich_text: [],
    },
  },
};
export const initialHeading3: BuildingBlock<Heading3ObjectRequest> = {
  type: 'heading_3',
  block: {
    type: 'heading_3',
    heading_3: {
      rich_text: [],
    },
  },
};
