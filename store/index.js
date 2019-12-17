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
    const files = await require.context('~/assets/content/blog/', false, /\.json$/)
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  },

  async loadHome ({ commit }) {
    const content = await import('~/assets/content/homepage.json')
    commit('setHome', content)
  }
}
