// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },       // don't fail the build on ESLint
  typescript: { ignoreBuildErrors: true },     // don't fail the build on TS errors
};
module.exports = nextConfig;
