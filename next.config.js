const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const repo = 'peerception'; // <- replace if repo name changes

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true }, // required for export when using next/image
  webpack: (config) => {
    config.resolve.alias['react-tinder-card'] = path.resolve(
      __dirname,
      'src/external/react-tinder-card.tsx'
    );
    return config;
  },
  // Optional but often helpful for GH Pages:
  // trailingSlash: true,
};

module.exports = nextConfig;
