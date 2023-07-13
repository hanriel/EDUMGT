/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
        source: '/',
        destination: '/dash',
        permanent: true,
        }]
    },
    output: 'standalone',
}

module.exports = nextConfig
