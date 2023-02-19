import { BlockObjectRequestType, Heading1ObjectRequest, Heading2ObjectRequest, Heading3ObjectRequest } from './type/blockObjectRequests';
export type BuildingBlock<T extends BlockObjectRequestType = BlockObjectRequestType> = {
    block?: Extract<BlockObjectRequestType, T>;
    type?: T['type'];
    src?: string;
};
export declare const initialHeading1: BuildingBlock<Heading1ObjectRequest>;
export declare const initialHeading2: BuildingBlock<Heading2ObjectRequest>;
export declare const initialHeading3: BuildingBlock<Heading3ObjectRequest>;
