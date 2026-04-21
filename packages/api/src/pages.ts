import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllPages() {
  return db.cmsPage.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getPageById(id: string) {
  return db.cmsPage.findUnique({ where: { id } });
}

export async function createPage(data: Prisma.CmsPageCreateInput) {
  return db.cmsPage.create({ data });
}

export async function updatePage(id: string, data: Prisma.CmsPageUpdateInput) {
  return db.cmsPage.update({ where: { id }, data });
}

export async function deletePage(id: string) {
  return db.cmsPage.delete({ where: { id } });
}
