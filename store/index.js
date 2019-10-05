export const state = () => ({
  countriesList: [],
  selectedCountry: [],
  bordersList: [],
  regionFilter: null,
  countryFilter: '',
  countryIsLoaded: false,
  darkMode: false
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
  },
  setBorderSelectedCountry (state, index) {
    state.selectedCountry = state.bordersList[index]
  },
  toggleDarkMode (state, index) {
    state.darkMode = !state.darkMode
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
  },

  async fetchBorders ({ commit }, borders) {
    let bordersString = ''
    borders.forEach((border) => {
      bordersString.length > 0 ? bordersString = `${bordersString};${border}` : bordersString = border
    })
    const data = await this.$axios.$get(`/alpha?codes=${bordersString}`)
    commit('setBorders', data)
  }
}
