import { NotionBlockType } from './notionUtils';
import { BlockObjectRequestType } from './type/blockObjectRequests';

export type BuildingBlock<T = BlockObjectRequestType> = {
  block?: Extract<BlockObjectRequestType, T>;
  type?: NotionBlockType;
  src?: string;
};
