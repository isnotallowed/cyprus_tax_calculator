const withNextIntl = require("next-intl/plugin")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // assetPrefix: "./",
};

module.exports = withNextIntl(nextConfig);
