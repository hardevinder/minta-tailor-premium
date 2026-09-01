import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    const legacyHosts = ["mintatailor.com", "www.mintatailor.com", "www.mintatailor.in"];
    return legacyHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://mintatailor.in/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
