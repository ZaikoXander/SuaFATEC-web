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
        hostname: 'fatecrl.edu.br',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
}

export default nextConfig
