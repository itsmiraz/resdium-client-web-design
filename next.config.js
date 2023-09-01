/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
    assetPrefix: '',
  
  images: {
    loader: 'default',
    domains: ["res.cloudinary.com"],
    unoptimized: true
  },

  async headers() {
        return [
          {
            source: '/_next/static/(.*)',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
          {
            source: '/out/(.*)',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
          {
            source: '/fonts/(.*)', // Adjust the source pattern accordingly
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
          {
            source: '/styles/(.*)', // Adjust the source pattern for CSS files
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
            ],
          },
          // Add more rules for other types of assets as needed
        ];
      },
  
}

module.exports = nextConfig



