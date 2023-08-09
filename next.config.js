/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;
