module.exports = {
  webpack: (config) =>
    Object.assign(config, {
      target: "electron-renderer",
    }),
  images: {
    domains: ["storage.googleapis.com"],
  },
};
