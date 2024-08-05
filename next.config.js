module.exports = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/data/:path*',
          destination: '/public/data/:path*',
        },
      ];
    },
  };
  