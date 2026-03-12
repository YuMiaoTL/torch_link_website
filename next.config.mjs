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
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'torchlink.com:443',
          },
        ],
        destination: 'https://www.torchlink.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'torchlink.com:80',
          },
        ],
        destination: 'https://www.torchlink.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
