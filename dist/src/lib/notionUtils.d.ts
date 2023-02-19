declare const notionBlockTypes: ("heading_1" | "heading_2" | "heading_3" | "paragraph")[];
export type NotionBlockType = (typeof notionBlockTypes)[number];
export declare const textTagNameToNotionTypeMap: Map<string, "heading_1" | "heading_2" | "heading_3" | "paragraph">;
export {};
