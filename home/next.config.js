const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/mobipos",
        destination: `${BLOG_URL}/mobipos`,
      },
    ];
  },
};

module.exports = nextConfig;
