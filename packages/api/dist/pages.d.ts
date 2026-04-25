import type { Prisma } from '@beyndesh/database';
export declare function getAllPages(): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    slug: string;
    title: string;
    titleBn: string | null;
    metaTitle: string | null;
    body: string;
    bodyBn: string | null;
    metaDesc: string | null;
}[]>;
export declare function getPageById(id: string): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    slug: string;
    title: string;
    titleBn: string | null;
    metaTitle: string | null;
    body: string;
    bodyBn: string | null;
    metaDesc: string | null;
} | null>;
export declare function createPage(data: Prisma.CmsPageCreateInput): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    slug: string;
    title: string;
    titleBn: string | null;
    metaTitle: string | null;
    body: string;
    bodyBn: string | null;
    metaDesc: string | null;
}>;
export declare function updatePage(id: string, data: Prisma.CmsPageUpdateInput): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    slug: string;
    title: string;
    titleBn: string | null;
    metaTitle: string | null;
    body: string;
    bodyBn: string | null;
    metaDesc: string | null;
}>;
export declare function deletePage(id: string): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    slug: string;
    title: string;
    titleBn: string | null;
    metaTitle: string | null;
    body: string;
    bodyBn: string | null;
    metaDesc: string | null;
}>;
//# sourceMappingURL=pages.d.ts.map