<template>
  <div class="index main">
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
      if (this.$store.state.regionFilter === null && this.$store.state.countryFilter === '') {
        return this.$store.state.countriesList
      } else if (this.$store.state.countryFilter) {
        return this.$store.state.countriesList.filter(country => country.name.toLowerCase().includes(this.$store.state.countryFilter.toLowerCase()))
      } else {
        return this.$store.state.countriesList.filter(country => country.region === this.$store.state.regionFilter)
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
  }
}
</script>
