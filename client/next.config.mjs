/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/', // works for S3 root hosting
  images: {
    unoptimized: true, // ✅ disable server-side optimization for static hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inventory-mng-img.s3.ap-south-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
