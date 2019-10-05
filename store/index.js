export const state = () => ({
  countriesList: [],
  selectedCountry: [],
  bordersList: [],
  regionFilter: null,
  countryFilter: '',
  countryIsLoaded: false
})

export const mutations = {
  addList (state, data) {
    state.countriesList = data
  },
  setCountry (state, data) {
    state.selectedCountry = data
  },
  setBorders (state, data) {
    state.bordersList = data
  },
  setRegionFilter (state, data) {
    state.regionFilter = data
  },
  setCountryFilter (state, data) {
    state.countryFilter = data
  },
  setCountryIsLoaded (state, data) {
    state.countryIsLoaded = data
  }
}

export const actions = {
  async fetchList ({ commit }) {
    const data = await this.$axios.$get('/all?fields=name;region;population;capital;flag')
    commit('addList', data)
  },

  async fetchCountry ({ commit, state }, country) {
    if (state.selectedCountry.length > 0) {
      if (state.selectedCountry[0].name !== country) {
        const data = await this.$axios.$get(`/name/${country}`)
        commit('setCountry', data)
        commit('setCountryIsLoaded', true)
      } else {
        commit('setCountryIsLoaded', true)
      }
    } else {
      const data = await this.$axios.$get(`/name/${country}`)
      commit('setCountry', data)
      commit('setCountryIsLoaded', true)
    }
  }
  // async fetchBorders ({ commit }) {
  //   const borderArray = []
  //   countries.forEach((country) => {
  //     const data = await this.$axios.$get(`/name/${this.$route.params.country}`)
  //     borderArray.push()
  //   })
  // }
}
