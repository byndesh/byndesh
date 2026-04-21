import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllSubscribers() {
  return db.newsletterSubscriber.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getSubscriberById(id: string) {
  return db.newsletterSubscriber.findUnique({ where: { id } });
}

export async function createSubscriber(data: Prisma.NewsletterSubscriberCreateInput) {
  return db.newsletterSubscriber.create({ data });
}

export async function updateSubscriber(id: string, data: Prisma.NewsletterSubscriberUpdateInput) {
  return db.newsletterSubscriber.update({ where: { id }, data });
}

export async function deleteSubscriber(id: string) {
  return db.newsletterSubscriber.delete({ where: { id } });
}
