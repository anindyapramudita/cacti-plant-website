/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
