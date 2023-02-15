import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type BuildingBlock = {
  block?: BlockObjectResponse;
  type?: string;
  src?: string;
};
