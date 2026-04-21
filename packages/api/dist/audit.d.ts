export interface CreateAuditLogData {
    userId?: string;
    action: string;
    entityType?: string;
    entityId?: string;
    metadata?: any;
    ipAddress?: string;
}
/**
 * Records an administrative action for auditing purposes.
 */
export declare function createAuditLog(data: CreateAuditLogData): Promise<{
    id: string;
    userId: string | null;
    action: string;
    entityType: string | null;
    entityId: string | null;
    metadata: import("@prisma/client/runtime/library").JsonValue | null;
    ipAddress: string | null;
    createdAt: Date;
}>;
/**
 * Retrieves a paginated list of audit logs based on filters.
 */
export declare function getAuditLogs(options: {
    userId?: string;
    entityType?: string;
    entityId?: string;
    page?: number;
    pageSize?: number;
}): Promise<{
    logs: {
        id: string;
        userId: string | null;
        action: string;
        entityType: string | null;
        entityId: string | null;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        ipAddress: string | null;
        createdAt: Date;
    }[];
    pagination: {
        page: number;
        pageSize: number;
        total: number;
        totalPages: number;
    };
}>;
//# sourceMappingURL=audit.d.ts.map