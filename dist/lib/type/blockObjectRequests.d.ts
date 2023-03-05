import { ApiColor, EmojiRequest, EmptyObject, IdRequest, LanguageRequest, RichTextItemRequest, TextRequest } from './redefinitions';
import { BlockObjectRequestWithoutChildren } from '@notionhq/client/build/src/api-endpoints';
export type Attributes = {
    [p: string]: string | undefined;
};
export type BaseBlockObject<T> = {
    type?: T;
    object?: 'block';
};
export type EmbedObjectRequest<T extends 'embed' = 'embed'> = {
    [key in T]: {
        url: string;
        caption?: Array<RichTextItemRequest>;
    };
} & BaseBlockObject<T>;
export type BookmarkObjectRequest = {
    bookmark: {
        url: string;
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'bookmark';
    object?: 'block';
};
export type ImageObjectRequest = {
    image: {
        external: {
            url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'image';
    object?: 'block';
};
export type VideoObjectRequest = {
    video: {
        external: {
            url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'video';
    object?: 'block';
};
export type PdfObjectRequest = {
    pdf: {
        external: {
            url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'pdf';
    object?: 'block';
};
export type FileObjectRequest = {
    file: {
        external: {
            url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'file';
    object?: 'block';
};
export type AudioObjectRequest = {
    audio: {
        external: {
            url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'audio';
    object?: 'block';
};
export type CodeObjectRequest = {
    code: {
        rich_text: Array<RichTextItemRequest>;
        language: LanguageRequest;
        caption?: Array<RichTextItemRequest>;
    };
    type?: 'code';
    object?: 'block';
};
export type EquationObjectRequest = {
    equation: {
        expression: string;
    };
    type?: 'equation';
    object?: 'block';
};
export type DividerObjectRequest = {
    divider: EmptyObject;
    type?: 'divider';
    object?: 'block';
};
export type BreadcrumbObjectRequest = {
    breadcrumb: EmptyObject;
    type?: 'breadcrumb';
    object?: 'block';
};
export type TocObjectRequest = {
    table_of_contents: {
        color?: ApiColor;
    };
    type?: 'table_of_contents';
    object?: 'block';
};
export type LinkToPageObjectRequest = {
    link_to_page: {
        page_id: IdRequest;
        type?: 'page_id';
    } | {
        database_id: IdRequest;
        type?: 'database_id';
    } | {
        comment_id: IdRequest;
        type?: 'comment_id';
    };
    type?: 'link_to_page';
    object?: 'block';
};
export type TableRowObjectRequest = {
    table_row: {
        cells: Array<Array<RichTextItemRequest>>;
    };
    type?: 'table_row';
    object?: 'block';
};
export type ColumnListObjectRequest = {
    column_list: {
        children: Array<{
            column: {
                children: Array<BlockObjectRequestType>;
            };
            type?: 'column';
            object?: 'block';
        }>;
    };
    type?: 'column_list';
    object?: 'block';
};
export type ColumnObjectRequest = {
    column: {
        children: Array<{
            embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'embed';
            object?: 'block';
        } | {
            bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'bookmark';
            object?: 'block';
        } | {
            image: {
                external: {
                    url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'image';
            object?: 'block';
        } | {
            video: {
                external: {
                    url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'video';
            object?: 'block';
        } | {
            pdf: {
                external: {
                    url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'pdf';
            object?: 'block';
        } | {
            file: {
                external: {
                    url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'file';
            object?: 'block';
        } | {
            audio: {
                external: {
                    url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'audio';
            object?: 'block';
        } | {
            code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
            };
            type?: 'code';
            object?: 'block';
        } | {
            equation: {
                expression: string;
            };
            type?: 'equation';
            object?: 'block';
        } | {
            divider: EmptyObject;
            type?: 'divider';
            object?: 'block';
        } | {
            breadcrumb: EmptyObject;
            type?: 'breadcrumb';
            object?: 'block';
        } | {
            table_of_contents: {
                color?: ApiColor;
            };
            type?: 'table_of_contents';
            object?: 'block';
        } | {
            link_to_page: {
                page_id: IdRequest;
                type?: 'page_id';
            } | {
                database_id: IdRequest;
                type?: 'database_id';
            } | {
                comment_id: IdRequest;
                type?: 'comment_id';
            };
            type?: 'link_to_page';
            object?: 'block';
        } | {
            table_row: {
                cells: Array<Array<RichTextItemRequest>>;
            };
            type?: 'table_row';
            object?: 'block';
        } | {
            heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'heading_1';
            object?: 'block';
        } | {
            heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'heading_2';
            object?: 'block';
        } | {
            heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'heading_3';
            object?: 'block';
        } | {
            paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'paragraph';
            object?: 'block';
        } | {
            bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'bulleted_list_item';
            object?: 'block';
        } | {
            numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'numbered_list_item';
            object?: 'block';
        } | {
            quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'quote';
            object?: 'block';
        } | {
            to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
            };
            type?: 'to_do';
            object?: 'block';
        } | {
            toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'toggle';
            object?: 'block';
        } | {
            template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'template';
            object?: 'block';
        } | {
            callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                icon?: {
                    emoji: EmojiRequest;
                    type?: 'emoji';
                } | {
                    external: {
                        url: TextRequest;
                    };
                    type?: 'external';
                };
            };
            type?: 'callout';
            object?: 'block';
        } | {
            synced_block: {
                synced_from: {
                    block_id: IdRequest;
                    type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
            };
            type?: 'synced_block';
            object?: 'block';
        }>;
    };
    type?: 'column';
    object?: 'block';
};
export type TableObjectRequest = {
    table: {
        table_width: number;
        children: Array<BlockObjectRequestWithoutChildren>;
        has_column_header?: boolean;
        has_row_header?: boolean;
    };
    type?: 'table';
    object?: 'block';
};
export type Heading1ObjectRequest = {
    heading_1: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        is_toggleable?: boolean;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'heading_1';
    object?: 'block';
};
export type Heading2ObjectRequest = {
    heading_2: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        is_toggleable?: boolean;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'heading_2';
    object?: 'block';
};
export type Heading3ObjectRequest = {
    heading_3: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        is_toggleable?: boolean;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'heading_3';
    object?: 'block';
};
export type ParagraphObjectRequest = {
    paragraph: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'paragraph';
    object?: 'block';
};
export type BulletedListItemObjectRequest = {
    bulleted_list_item: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'bulleted_list_item';
    object?: 'block';
};
export type NumberedListItemObjectRequest = {
    numbered_list_item: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'numbered_list_item';
    object?: 'block';
};
export type QuoteObjectRequest = {
    quote: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'quote';
    object?: 'block';
};
export type ToDoObjectRequest = {
    to_do: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
        checked?: boolean;
    };
    type?: 'to_do';
    object?: 'block';
};
export type ToggleObjectRequest = {
    toggle: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'toggle';
    object?: 'block';
};
export type TemplateObjectRequest = {
    template: {
        rich_text: Array<RichTextItemRequest>;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'template';
    object?: 'block';
};
export type CalloutObjectRequest = {
    callout: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<BlockObjectRequestType>;
        icon?: {
            emoji: EmojiRequest;
            type?: 'emoji';
        } | {
            external: {
                url: TextRequest;
            };
            type?: 'external';
        };
    };
    type?: 'callout';
    object?: 'block';
};
export type SyncedBlockObjectRequest = {
    synced_block: {
        synced_from: {
            block_id: IdRequest;
            type?: 'block_id';
        } | null;
        children?: Array<BlockObjectRequestType>;
    };
    type?: 'synced_block';
    object?: 'block';
};
export type BlockObjectRequestType = SyncedBlockObjectRequest | CalloutObjectRequest | TemplateObjectRequest | ToggleObjectRequest | ToDoObjectRequest | BulletedListItemObjectRequest | NumberedListItemObjectRequest | QuoteObjectRequest | ParagraphObjectRequest | Heading3ObjectRequest | Heading2ObjectRequest | Heading1ObjectRequest | TableObjectRequest | ColumnObjectRequest | ColumnListObjectRequest | TableRowObjectRequest | LinkToPageObjectRequest | TocObjectRequest | BreadcrumbObjectRequest | DividerObjectRequest | EquationObjectRequest | EmbedObjectRequest | BookmarkObjectRequest | ImageObjectRequest | VideoObjectRequest | PdfObjectRequest | FileObjectRequest | AudioObjectRequest | CodeObjectRequest;
