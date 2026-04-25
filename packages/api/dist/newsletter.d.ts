import type { Prisma } from '@beyndesh/database';
export declare function getAllSubscribers(): Promise<{
    id: string;
    createdAt: Date;
    status: string;
    updatedAt: Date;
    email: string;
    tripSlug: string | null;
}[]>;
export declare function getSubscriberById(id: string): Promise<{
    id: string;
    createdAt: Date;
    status: string;
    updatedAt: Date;
    email: string;
    tripSlug: string | null;
} | null>;
export declare function createSubscriber(data: Prisma.NewsletterSubscriberCreateInput): Promise<{
    id: string;
    createdAt: Date;
    status: string;
    updatedAt: Date;
    email: string;
    tripSlug: string | null;
}>;
export declare function updateSubscriber(id: string, data: Prisma.NewsletterSubscriberUpdateInput): Promise<{
    id: string;
    createdAt: Date;
    status: string;
    updatedAt: Date;
    email: string;
    tripSlug: string | null;
}>;
export declare function deleteSubscriber(id: string): Promise<{
    id: string;
    createdAt: Date;
    status: string;
    updatedAt: Date;
    email: string;
    tripSlug: string | null;
}>;
//# sourceMappingURL=newsletter.d.ts.map