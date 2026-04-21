import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllBookings() {
  return db.booking.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getBookingById(id: string) {
  return db.booking.findUnique({ where: { id } });
}

export async function createBooking(data: Prisma.BookingCreateInput) {
  return db.booking.create({ data });
}

export async function updateBooking(id: string, data: Prisma.BookingUpdateInput) {
  return db.booking.update({ where: { id }, data });
}

export async function deleteBooking(id: string) {
  return db.booking.delete({ where: { id } });
}
