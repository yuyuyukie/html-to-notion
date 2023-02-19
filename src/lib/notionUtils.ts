import { BlockObjectRequestType } from './type/blockObjectRequests';

const notionBlockTypes = ["paragraph", 'heading_1', 'heading_2','heading_3'] satisfies NonNullable<BlockObjectRequestType['type']>[]
export type NotionBlockType = typeof notionBlockTypes[number]

export const textTagNameToNotionTypeMap = new Map<
  string,
  NotionBlockType
>([
  ['h1', 'heading_1'],
  ['h2', 'heading_2'],
  ['h3', 'heading_3'],
  ['h4', 'heading_3'],
  ['h5', 'heading_3'],
  ['h6', 'heading_3'],
  ['p', 'paragraph']
]);
