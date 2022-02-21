module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accueil',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,

  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "www.worldometers.info"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
