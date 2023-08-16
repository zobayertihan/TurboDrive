/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  // output: "export",
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
