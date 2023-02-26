import { BlockObjectRequestType, Heading1ObjectRequest, Heading2ObjectRequest, Heading3ObjectRequest } from './type/blockObjectRequests';
export type BuildingBlock<T extends BlockObjectRequestType = BlockObjectRequestType> = {
    block?: Extract<BlockObjectRequestType, T>;
    type?: T['type'];
};
export declare const initialHeading1: (buildingBlock?: BuildingBlock) => BuildingBlock<Heading1ObjectRequest>;
export declare const initialHeading2: (buildingBlock?: BuildingBlock) => BuildingBlock<Heading2ObjectRequest>;
export declare const initialHeading3: (buildingBlock?: BuildingBlock) => BuildingBlock<Heading3ObjectRequest>;
