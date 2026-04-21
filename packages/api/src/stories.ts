import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllStorys() {
  return db.story.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getStoryById(id: string) {
  return db.story.findUnique({ where: { id } });
}

export async function createStory(data: Prisma.CmsStoryCreateInput) {
  return db.story.create({ data });
}

export async function updateStory(id: string, data: Prisma.CmsStoryUpdateInput) {
  return db.story.update({ where: { id }, data });
}

export async function deleteStory(id: string) {
  return db.story.delete({ where: { id } });
}
