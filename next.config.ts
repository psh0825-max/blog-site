import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/blog-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
