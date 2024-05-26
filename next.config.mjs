/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media.wired.com/photos/',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.it',
        port: '',
      },
    ],
  },
};

export default nextConfig;
