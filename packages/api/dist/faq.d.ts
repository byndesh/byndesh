import type { Prisma } from '@beyndesh/database';
export declare function getAllFaqs(): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    sortOrder: number;
    question: string;
    questionBn: string | null;
    answer: string;
    answerBn: string | null;
    category: string | null;
}[]>;
export declare function getFaqById(id: string): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    sortOrder: number;
    question: string;
    questionBn: string | null;
    answer: string;
    answerBn: string | null;
    category: string | null;
} | null>;
export declare function createFaq(data: Prisma.CmsFaqCreateInput): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    sortOrder: number;
    question: string;
    questionBn: string | null;
    answer: string;
    answerBn: string | null;
    category: string | null;
}>;
export declare function updateFaq(id: string, data: Prisma.CmsFaqUpdateInput): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    sortOrder: number;
    question: string;
    questionBn: string | null;
    answer: string;
    answerBn: string | null;
    category: string | null;
}>;
export declare function deleteFaq(id: string): Promise<{
    id: string;
    createdAt: Date;
    status: import("@prisma/client").$Enums.ContentStatus;
    updatedAt: Date;
    sortOrder: number;
    question: string;
    questionBn: string | null;
    answer: string;
    answerBn: string | null;
    category: string | null;
}>;
//# sourceMappingURL=faq.d.ts.map