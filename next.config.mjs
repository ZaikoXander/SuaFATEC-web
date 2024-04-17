/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bkpsitecpsnew.blob.core.windows.net',
        port: '',
        pathname: '/uploadsitecps/**',
      },
    ],
  },
}

export default nextConfig
