module.exports = {
    images: {
      domains: ['via.placeholder.com'],
    },
      async rewrites() {
    return [{ source: '/api/:path*', destination: 'https://sb-blg-production.up.railway.app/api/:path*' }]
  }
  }