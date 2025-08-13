/** @type {import('next').NextConfig} */
const isProjectPage = process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH !== '/';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // If deploying to a project page like username.github.io/repo, set NEXT_PUBLIC_BASE_PATH="/repo"
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
module.exports = nextConfig;
