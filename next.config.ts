import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  // Only apply basePath and assetPrefix when building in GitHub Actions
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'AnubisConsulting';
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Base path configuration
  basePath: basePath,
  assetPrefix: assetPrefix,
  
  // Expose basePath to runtime
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Add trailing slash for compatibility
  trailingSlash: true,
};

export default nextConfig;
