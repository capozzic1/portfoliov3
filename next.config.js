module.exports = {
    images: {
      domains: ['via.placeholder.com'],
    },
      async rewrites() {
    return [{ source: '/api/:path*', destination: 'http://localhost:8080/api/:path*' }]
  }
  }