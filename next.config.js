/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbotrace: false
  }
}

module.exports = nextConfig