import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllReviews() {
  return db.review.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getReviewById(id: string) {
  return db.review.findUnique({ where: { id } });
}

export async function createReview(data: Prisma.ReviewCreateInput) {
  return db.review.create({ data });
}

export async function updateReview(id: string, data: Prisma.ReviewUpdateInput) {
  return db.review.update({ where: { id }, data });
}

export async function deleteReview(id: string) {
  return db.review.delete({ where: { id } });
}
