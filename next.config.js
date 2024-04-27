module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};
