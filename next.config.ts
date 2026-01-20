/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dmmfmlu2mykln.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
