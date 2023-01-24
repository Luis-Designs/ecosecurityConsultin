/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS;
const isProduction = process.env.ENVIROMENT_SLUG === 'production';
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = isProduction
    ? ''
    : process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = isProduction ? '/' : `/${repo}`;
}

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath: basePath,
  trailingSlash: true,
};

module.exports = nextConfig;
