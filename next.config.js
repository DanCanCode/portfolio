/** @type {import('next').NextConfig} */
require("dotenv").config();
const webpack = require("webpack");
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.DefinePlugin(process.env));
    return config;
  },
};
