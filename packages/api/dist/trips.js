import { prisma, ContentStatus } from "@beyndesh/database";
// --- Visitor Queries ---
export async function getPublishedTrips(options) {
    const { page = 1, pageSize = 12, category, difficulty, featured } = options;
    const skip = (page - 1) * pageSize;
    const where = {
        status: ContentStatus.PUBLISHED,
    };
    if (category) {
        // Assuming category is part of itinerary or we add a field. 
        // For now, let's assume it might be in a metadata field or we filter by slug prefix if applicable.
        // Given the prompt, I'll stick to provided fields.
    }
    if (difficulty) {
        where.difficulty = difficulty;
    }
    if (featured !== undefined) {
        where.featured = featured;
    }
    const [trips, total] = await Promise.all([
        prisma.cmsTrip.findMany({
            where,
            skip,
            take: pageSize,
            orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
        }),
        prisma.cmsTrip.count({ where }),
    ]);
    return {
        trips,
        pagination: {
            page,
            pageSize,
            total,
            totalPages: Math.ceil(total / pageSize),
        },
    };
}
export async function getTripBySlug(slug) {
    return prisma.cmsTrip.findFirst({
        where: {
            slug,
            status: ContentStatus.PUBLISHED,
        },
    });
}
export async function getAllTripSlugs() {
    const trips = await prisma.cmsTrip.findMany({
        where: { status: ContentStatus.PUBLISHED },
        select: { slug: true },
    });
    return trips.map((t) => t.slug);
}
export async function getFeaturedTrips(limit = 3) {
    return prisma.cmsTrip.findMany({
        where: {
            featured: true,
            status: ContentStatus.PUBLISHED,
        },
        take: limit,
        orderBy: { sortOrder: "asc" },
    });
}
// --- CMS / Admin Operations ---
export async function getAllTrips(options) {
    const { page = 1, pageSize = 20, status, search } = options;
    const skip = (page - 1) * pageSize;
    const where = {};
    if (status)
        where.status = status;
    if (search) {
        where.OR = [
            { title: { contains: search, mode: "insensitive" } },
            { slug: { contains: search, mode: "insensitive" } },
        ];
    }
    const [trips, total] = await Promise.all([
        prisma.cmsTrip.findMany({
            where,
            skip,
            take: pageSize,
            orderBy: { updatedAt: "desc" },
        }),
        prisma.cmsTrip.count({ where }),
    ]);
    return {
        trips,
        pagination: {
            page,
            pageSize,
            total,
            totalPages: Math.ceil(total / pageSize),
        },
    };
}
export async function getTripById(id) {
    return prisma.cmsTrip.findUnique({
        where: { id },
    });
}
export async function createTrip(data) {
    return prisma.cmsTrip.create({
        data: {
            ...data,
            // Handle Decimal conversion if needed, Prisma usually handles numbers for Decimal
            priceBDT: data.priceBDT,
            priceUSD: data.priceUSD,
            priceEUR: data.priceEUR,
        },
    });
}
export async function updateTrip(id, data) {
    return prisma.cmsTrip.update({
        where: { id },
        data: data,
    });
}
export async function publishTrip(id) {
    return prisma.cmsTrip.update({
        where: { id },
        data: {
            status: ContentStatus.PUBLISHED,
            publishedAt: new Date(),
        },
    });
}
export async function archiveTrip(id) {
    return prisma.cmsTrip.update({
        where: { id },
        data: {
            status: ContentStatus.ARCHIVED,
        },
    });
}
export async function deleteTripPermanently(id) {
    return prisma.cmsTrip.delete({
        where: { id },
    });
}
