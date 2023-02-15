import { Heading1BlockObjectResponse, Heading2BlockObjectResponse, ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
declare const expectedBlocks: (ParagraphBlockObjectResponse | Heading1BlockObjectResponse | Heading2BlockObjectResponse | {
    object: string;
    paragraph: {
        text: {
            text: {
                content: string;
            };
            type: string;
        }[];
        rich_text?: undefined;
    };
    type: string;
} | {
    object: string;
    paragraph: {
        rich_text: ({
            text: {
                content: string;
                link?: undefined;
            };
            type: string;
        } | {
            text: {
                content: string;
                link: {
                    url: string;
                };
            };
            type: string;
        })[];
        text?: undefined;
    };
    type: string;
})[];
export default expectedBlocks;
