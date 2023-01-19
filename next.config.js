/** @type {import('next').NextConfig} */
require("dotenv").config();
const webpack = require("webpack");
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
