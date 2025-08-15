// This file is evaluated at build time and the values are embedded in the build
const isProduction = process.env.NODE_ENV === 'production';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let basePath = '';

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'AnubisConsulting';
//   basePath = `/${repo}`;
// }

export const config = {
  basePath: basePath,
} as const;