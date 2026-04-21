import { prisma } from "@beyndesh/database";
/**
 * Records an administrative action for auditing purposes.
 */
export async function createAuditLog(data) {
    return prisma.auditLog.create({
        data: {
            userId: data.userId,
            action: data.action,
            entityType: data.entityType,
            entityId: data.entityId,
            metadata: data.metadata,
            ipAddress: data.ipAddress,
        },
    });
}
/**
 * Retrieves a paginated list of audit logs based on filters.
 */
export async function getAuditLogs(options) {
    const { userId, entityType, entityId, page = 1, pageSize = 50 } = options;
    const skip = (page - 1) * pageSize;
    const where = {};
    if (userId)
        where.userId = userId;
    if (entityType)
        where.entityType = entityType;
    if (entityId)
        where.entityId = entityId;
    const [logs, total] = await Promise.all([
        prisma.auditLog.findMany({
            where,
            skip,
            take: pageSize,
            orderBy: { createdAt: "desc" },
        }),
        prisma.auditLog.count({ where }),
    ]);
    return {
        logs,
        pagination: {
            page,
            pageSize,
            total,
            totalPages: Math.ceil(total / pageSize),
        },
    };
}
