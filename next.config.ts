import type { NextConfig } from "next";
// Gracefully handle missing next-contentlayer in some environments
let withContentlayer: (config: NextConfig) => NextConfig = (c) => c;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  withContentlayer = require("next-contentlayer").withContentlayer;
} catch {}

// GitHub Pages configuration
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "ads-website";

const nextConfig: NextConfig = {
  // For GitHub Pages static hosting, ensure assets resolve under the repo path
  ...(isGitHubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        trailingSlash: true,
      }
    : {}),
  images: {
    // Disable the image optimizer when exporting for static hosting
    unoptimized: isGitHubPages,
  },
  experimental: {
    optimizePackageImports: [
      // keep imports minimal; shadcn/ui components would go here if used as a package
    ],
  },
};

export default withContentlayer(nextConfig);
