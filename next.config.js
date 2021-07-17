const nextTranslate = require("next-translate");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: isProd ? ["res.cloudinary.com"] : [`${process.env.IMAGES_DOMAIN}`],
    path: isProd ? "" : "/_next/image",
    loader: isProd ? "cloudinary" : "default",
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  ...nextTranslate(),
};
