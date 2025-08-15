const isProd = process.env.NODE_ENV === 'production';
const repo = 'peerception'; // <- replace if repo name changes

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true }, // required for export when using next/image
  // Optional but often helpful for GH Pages:
  // trailingSlash: true,
};

module.exports = nextConfig;
