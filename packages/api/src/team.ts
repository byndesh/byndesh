import { db } from '@beyndesh/database';
import type { Prisma } from '@prisma/client';

export async function getAllTeamMembers() {
  return db.cmsTeamMember.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getTeamMemberById(id: string) {
  return db.cmsTeamMember.findUnique({ where: { id } });
}

export async function createTeamMember(data: Prisma.CmsTeamMemberCreateInput) {
  return db.cmsTeamMember.create({ data });
}

export async function updateTeamMember(id: string, data: Prisma.CmsTeamMemberUpdateInput) {
  return db.cmsTeamMember.update({ where: { id }, data });
}

export async function deleteTeamMember(id: string) {
  return db.cmsTeamMember.delete({ where: { id } });
}
