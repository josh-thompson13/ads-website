import type { NextConfig } from "next";
// Gracefully handle missing next-contentlayer in some environments
let withContentlayer: (config: NextConfig) => NextConfig = (c) => c;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  withContentlayer = require("next-contentlayer").withContentlayer;
} catch {}

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      // keep imports minimal; shadcn/ui components would go here if used as a package
    ],
  },
};

export default withContentlayer(nextConfig);
