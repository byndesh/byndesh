import type { Prisma } from '@beyndesh/database';
export declare function getAllTaxonomys(): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    nameBn: string | null;
    slug: string;
    description: string | null;
    type: string;
}[]>;
export declare function getTaxonomyById(id: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    nameBn: string | null;
    slug: string;
    description: string | null;
    type: string;
} | null>;
export declare function createTaxonomy(data: Prisma.CmsTaxonomyCreateInput): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    nameBn: string | null;
    slug: string;
    description: string | null;
    type: string;
}>;
export declare function updateTaxonomy(id: string, data: Prisma.CmsTaxonomyUpdateInput): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    nameBn: string | null;
    slug: string;
    description: string | null;
    type: string;
}>;
export declare function deleteTaxonomy(id: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    nameBn: string | null;
    slug: string;
    description: string | null;
    type: string;
}>;
//# sourceMappingURL=taxonomy.d.ts.map