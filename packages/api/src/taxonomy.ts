import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllTaxonomys() {
  return db.cmsTaxonomy.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getTaxonomyById(id: string) {
  return db.cmsTaxonomy.findUnique({ where: { id } });
}

export async function createTaxonomy(data: Prisma.CmsTaxonomyCreateInput) {
  return db.cmsTaxonomy.create({ data });
}

export async function updateTaxonomy(id: string, data: Prisma.CmsTaxonomyUpdateInput) {
  return db.cmsTaxonomy.update({ where: { id }, data });
}

export async function deleteTaxonomy(id: string) {
  return db.cmsTaxonomy.delete({ where: { id } });
}
