/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'torchlink.com',
          },
        ],
        destination: 'https://www.torchlink.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
