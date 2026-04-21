import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllMedias() {
  return db.cmsMedia.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getMediaById(id: string) {
  return db.cmsMedia.findUnique({ where: { id } });
}

export async function createMedia(data: Prisma.CmsMediaCreateInput) {
  return db.cmsMedia.create({ data });
}

export async function updateMedia(id: string, data: Prisma.CmsMediaUpdateInput) {
  return db.cmsMedia.update({ where: { id }, data });
}

export async function deleteMedia(id: string) {
  return db.cmsMedia.delete({ where: { id } });
}
