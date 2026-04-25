import type { Prisma } from '@beyndesh/database';
export declare function getAllMedias(): Promise<{
    id: string;
    createdAt: Date;
    createdBy: string | null;
    height: number | null;
    width: number | null;
    key: string;
    url: string;
    filename: string;
    mimetype: string;
    sizeBytes: number;
    altText: string | null;
}[]>;
export declare function getMediaById(id: string): Promise<{
    id: string;
    createdAt: Date;
    createdBy: string | null;
    height: number | null;
    width: number | null;
    key: string;
    url: string;
    filename: string;
    mimetype: string;
    sizeBytes: number;
    altText: string | null;
} | null>;
export declare function createMedia(data: Prisma.CmsMediaCreateInput): Promise<{
    id: string;
    createdAt: Date;
    createdBy: string | null;
    height: number | null;
    width: number | null;
    key: string;
    url: string;
    filename: string;
    mimetype: string;
    sizeBytes: number;
    altText: string | null;
}>;
export declare function updateMedia(id: string, data: Prisma.CmsMediaUpdateInput): Promise<{
    id: string;
    createdAt: Date;
    createdBy: string | null;
    height: number | null;
    width: number | null;
    key: string;
    url: string;
    filename: string;
    mimetype: string;
    sizeBytes: number;
    altText: string | null;
}>;
export declare function deleteMedia(id: string): Promise<{
    id: string;
    createdAt: Date;
    createdBy: string | null;
    height: number | null;
    width: number | null;
    key: string;
    url: string;
    filename: string;
    mimetype: string;
    sizeBytes: number;
    altText: string | null;
}>;
//# sourceMappingURL=media.d.ts.map