import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllFaqs() {
  return db.cmsFaq.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getFaqById(id: string) {
  return db.cmsFaq.findUnique({ where: { id } });
}

export async function createFaq(data: Prisma.CmsFaqCreateInput) {
  return db.cmsFaq.create({ data });
}

export async function updateFaq(id: string, data: Prisma.CmsFaqUpdateInput) {
  return db.cmsFaq.update({ where: { id }, data });
}

export async function deleteFaq(id: string) {
  return db.cmsFaq.delete({ where: { id } });
}
