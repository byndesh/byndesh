import { prisma as db } from '@beyndesh/database';
export async function getAllStorys() {
    return db.cmsStory.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getStoryById(id) {
    return db.cmsStory.findUnique({ where: { id } });
}
export async function createStory(data) {
    return db.cmsStory.create({ data });
}
export async function updateStory(id, data) {
    return db.cmsStory.update({ where: { id }, data });
}
export async function deleteStory(id) {
    return db.cmsStory.delete({ where: { id } });
}
