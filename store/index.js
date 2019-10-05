export const state = () => ({
  countriesList: [],
  selectedFilter: null
})

export const mutations = {
  addList (state, data) {
    state.countriesList = data
  },
  setFilter (state, data) {
    state.selectedFilter = data
  }
}

export const actions = {
  async fetchList ({ commit }) {
    const data = await this.$axios.$get('/all?fields=name;region;population;capital;flag')
    commit('addList', data)
  }
}
