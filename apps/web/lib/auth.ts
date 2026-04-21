import NextAuth from "next-auth";
import { authConfig } from "@beyndesh/shared";

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
