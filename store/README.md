# STORE

Example of how a store can be used to import .json data

export const state = () => ({
  introItems: [],
  serviceItems: [],
  contactItems: []
})

export const mutations = {
  setIntroItems (state, payload) {
    state.introItems = payload
  },

  setServiceItems (state, payload) {
    state.serviceItems = payload
  },

  setContactItems (state, payload) {
    state.contactItems = payload
  }
}

export const actions = {
  async loadIntro ({ commit }) {
    const content = await import('~/content/intro.json')
    commit('setIntroItems', content)
  },

  async loadServices ({ commit }) {
    const content = await import('~/content/services.json')
    commit('setServiceItems', content)
  },

  async loadContact ({ commit }) {
    const content = await import('~/content/contact.json')
    commit('setContactItems', content)
  }
}

