/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "http", hostname: "49.0.2.250" }],
  },
};

module.exports = nextConfig;
