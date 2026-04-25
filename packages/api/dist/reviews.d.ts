import type { Prisma } from '@beyndesh/database';
export declare function getAllReviews(): Promise<{
    id: string;
    userId: string | null;
    createdAt: Date;
    tripId: string;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    title: string;
    rating: number;
    body: string;
    photoUrl: string | null;
}[]>;
export declare function getReviewById(id: string): Promise<{
    id: string;
    userId: string | null;
    createdAt: Date;
    tripId: string;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    title: string;
    rating: number;
    body: string;
    photoUrl: string | null;
} | null>;
export declare function createReview(data: Prisma.ReviewCreateInput): Promise<{
    id: string;
    userId: string | null;
    createdAt: Date;
    tripId: string;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    title: string;
    rating: number;
    body: string;
    photoUrl: string | null;
}>;
export declare function updateReview(id: string, data: Prisma.ReviewUpdateInput): Promise<{
    id: string;
    userId: string | null;
    createdAt: Date;
    tripId: string;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    title: string;
    rating: number;
    body: string;
    photoUrl: string | null;
}>;
export declare function deleteReview(id: string): Promise<{
    id: string;
    userId: string | null;
    createdAt: Date;
    tripId: string;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    title: string;
    rating: number;
    body: string;
    photoUrl: string | null;
}>;
//# sourceMappingURL=reviews.d.ts.map