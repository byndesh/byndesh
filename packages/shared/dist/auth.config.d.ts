/**
 * @file packages/shared/src/auth.config.ts
 *
 * IMPORTANT ARCHITECTURE NOTE:
 * This file is split into two layers:
 *
 * 1. `edgeAuthConfig` — Edge-safe config (NO Prisma, NO bcrypt, NO Node.js APIs).
 *    Used in middleware.ts of both apps. Can run on Vercel Edge Runtime.
 *
 * 2. `authConfig` — Full config with Prisma adapter + credentials authorize.
 *    Used ONLY in lib/auth.ts (Node.js runtime). Never import in middleware.
 *
 * This pattern is the official NextAuth.js v5 recommendation for monorepos
 * that need middleware + full auth in the same codebase.
 */
import type { NextAuthConfig } from "next-auth";
export declare const ROLES: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ADMIN: "ADMIN";
    readonly EDITOR: "EDITOR";
    readonly USER: "USER";
};
export type UserRole = (typeof ROLES)[keyof typeof ROLES];
/** Roles that are permitted to access the CMS admin panel */
export declare const CMS_ALLOWED_ROLES: UserRole[];
/** Roles with full write access in the CMS (excludes EDITOR draft-only) */
export declare const CMS_WRITE_ROLES: UserRole[];
export declare const edgeAuthConfig: NextAuthConfig;
export declare function buildFullAuthConfig(): Promise<NextAuthConfig>;
//# sourceMappingURL=auth.config.d.ts.map