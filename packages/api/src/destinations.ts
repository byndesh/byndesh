import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllDestinations() {
  return db.cmsDestination.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getDestinationById(id: string) {
  return db.cmsDestination.findUnique({ where: { id } });
}

export async function createDestination(data: Prisma.CmsDestinationCreateInput) {
  return db.cmsDestination.create({ data });
}

export async function updateDestination(id: string, data: Prisma.CmsDestinationUpdateInput) {
  return db.cmsDestination.update({ where: { id }, data });
}

export async function deleteDestination(id: string) {
  return db.cmsDestination.delete({ where: { id } });
}
