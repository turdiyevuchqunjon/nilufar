import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dr-xushvakova.uz'
      },
      {
        protocol: 'https',
        hostname: 'www.genspark.ai'
      },
      {
        protocol: 'https',
        hostname: 'genspark.ai'
      }
    ]
  }
};

export default nextConfig;
