/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@beyndesh/database", "@beyndesh/shared", "@beyndesh/api"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {},
};

export default nextConfig;
