import NextAuth from "next-auth";
import { authConfig } from "@beyndesh/shared";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role as string | undefined;
  
  const isAuthRoute = req.nextUrl.pathname.startsWith("/api/auth");
  const isLoginRoute = req.nextUrl.pathname === "/login";

  if (isAuthRoute) {
    return NextResponse.next();
  }

  if (isLoginRoute) {
    if (isLoggedIn && (role === "ADMIN" || role === "SUPER_ADMIN")) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
    return NextResponse.next(); // Let them see login page
  }

  // Not logged in or don't have adequate rights -> boot to login
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login?error=unauthorized", req.nextUrl));
  }

  if (role !== "ADMIN" && role !== "SUPER_ADMIN") {
    return NextResponse.redirect(new URL("/login?error=access_denied", req.nextUrl));
  }

  // Define and attach security headers (and noindex for CMS)
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
});

// Protect all paths
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
