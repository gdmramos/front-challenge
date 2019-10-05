<template>
  <div class="index">
    <section class="input-wrappers">
      <search />
      <v-select />
    </section>
    <section class="card-wrappers">
      <nuxt-link
        v-for="country in countries"
        :key="country.name"
        :to="`/${country.name}`"
      >
        <card :country="country" />
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import Search from '@/components/Search'
import vSelect from '@/components/Select'
import Card from '@/components/Card'

export default {
  components: {
    Search,
    vSelect,
    Card
  },
  data () {
    return {
      // countries: []
    }
  },
  computed: {
    countries () {
      if (this.$store.state.selectedFilter === null) {
        return this.$store.state.countriesList
      } else {
        return this.$store.state.countriesList.filter(country => country.region === this.$store.state.selectedFilter)
      }
    }
  },
  created () {
    this.fetchCountries()
  },
  methods: {
    fetchCountries () {
      if (this.$store.state.countriesList.length === 0) {
        this.$store.dispatch('fetchList')
      }
    }
    // async getCountries () {
    //   this.countries = await this.$axios.$get('/all?fields=name;region;population;capital;flag')
    // }
  }
}
</script>
