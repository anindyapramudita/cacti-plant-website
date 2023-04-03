/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['images.unsplash.com']
  },
  domains: ['localhost:3000']
}

module.exports = nextConfig
