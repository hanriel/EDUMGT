/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.yandex.net',
        port: '',
        pathname: '/get-yapic/**',
      },
    ]
  },
  output: 'standalone',
}


module.exports = nextConfig
