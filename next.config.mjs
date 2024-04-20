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
      {
        protocol: 'https',
        hostname: 'www.fatecpg.edu.br',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

export default nextConfig
