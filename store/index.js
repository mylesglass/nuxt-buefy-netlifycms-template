export const state = () => ({
  blogPosts: [],
  home: []
})

export const mutations = {
  setBlogPosts (state, list) {
    state.blogPosts = list
  },

  setHome (state, payload) {
    state.home = payload
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const blogContent = await require.context('~/assets/content/blog/', false, /\.json$/)
    const blogPosts = blogContent.keys().map((key) => {
      const res = blogContent(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)

    const homeContent = await import('~/assets/content/homepage.json')
    commit('setHome', homeContent)
  }
}
