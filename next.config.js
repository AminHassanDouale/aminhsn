/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aminhsn.pro',
      },
    ],
  },
}

module.exports = nextConfig;