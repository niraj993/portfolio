import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sense.nosky.ai',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // output: 'export', // This is the new way to specify static export
  // basePath: '/portfolio',  // Replace with your repository name
  // assetPrefix: '/portfolio',  // Replace with your repository name
};

export default nextConfig;
