import { prisma } from "@beyndesh/database";
export async function getSetting(key) {
    const setting = await prisma.cmsSetting.findUnique({
        where: { key },
    });
    return setting?.value || null;
}
export async function setSetting(key, value, group = "general") {
    return prisma.cmsSetting.upsert({
        where: { key },
        update: { value, group },
        create: { key, value, group },
    });
}
export async function getSettingsByGroup(group) {
    return prisma.cmsSetting.findMany({
        where: { group },
    });
}
