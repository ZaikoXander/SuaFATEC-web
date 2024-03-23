/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fatecpg.edu.br',
        port: '',
        pathname: '/img/**'
      }
    ]
  }
};

export default nextConfig;
