module.exports = {
  exportPathMap: async function () {
    return {
      '/login': { page: '/login', query: { withHeader: false, withFooter: false } },
      '/admin': { page: '/admin', query: { withHeader: false, withFooter: false } },
    }
  },
}
