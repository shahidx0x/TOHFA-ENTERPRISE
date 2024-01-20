/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "jsx", "js", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
