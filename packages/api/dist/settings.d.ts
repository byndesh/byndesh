export declare function getSetting(key: string): Promise<string | number | true | import("@prisma/client/runtime/library").JsonObject | import("@prisma/client/runtime/library").JsonArray | null>;
export declare function setSetting(key: string, value: any, group?: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: import("@prisma/client/runtime/library").JsonValue;
    key: string;
    group: string;
}>;
export declare function getSettingsByGroup(group: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    value: import("@prisma/client/runtime/library").JsonValue;
    key: string;
    group: string;
}[]>;
//# sourceMappingURL=settings.d.ts.map