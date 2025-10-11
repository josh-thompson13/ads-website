import type { NextConfig } from "next";
// Gracefully handle missing next-contentlayer in some environments
let withContentlayer: (config: NextConfig) => NextConfig = (c) => c;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  withContentlayer = require("next-contentlayer").withContentlayer;
} catch {}

// GitHub Pages configuration
const isStaticExport = process.env.GITHUB_PAGES === "true" || process.env.STATIC_EXPORT === "true";
const repoName = "ads-website";

const nextConfig: NextConfig = {
  // For static hosting targets (GitHub Pages, S3, etc.) emit an exported bundle
  ...(isStaticExport
    ? {
        trailingSlash: true,
        output: "export",
      }
    : {}),
  // Allow overriding the base path / asset prefix via env so custom domains work
  ...(() => {
    const configuredBasePath = process.env.NEXT_BASE_PATH;
    const basePath = configuredBasePath ?? (isStaticExport ? `/${repoName}` : "");
    const useBasePath = Boolean(basePath);
    if (!useBasePath) {
      return {
        env: {
          NEXT_PUBLIC_BASE_PATH: "",
        },
      };
    }
    const assetPrefix = process.env.NEXT_ASSET_PREFIX ?? `${basePath}/`;
    return {
      basePath,
      assetPrefix,
      env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
      },
    };
  })(),
  images: {
    // Disable the image optimizer when exporting for static hosting
    unoptimized: isStaticExport,
  },
  eslint: {
    // Do not fail the build on ESLint errors (only on Pages export)
    ignoreDuringBuilds: isStaticExport,
  },
  typescript: {
    // Keep type errors from blocking static export on Pages
    ignoreBuildErrors: isStaticExport,
  },
  experimental: {
    optimizePackageImports: [
      // keep imports minimal; shadcn/ui components would go here if used as a package
    ],
  },
};

export default withContentlayer(nextConfig);
