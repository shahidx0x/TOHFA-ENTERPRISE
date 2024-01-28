/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  pageExtensions: ["tsx", "jsx", "js", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
