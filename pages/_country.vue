<template>
  <div class="country">
    <div class="country-button">
      <v-button path="/" class="back-button">
        <ion-icon name="arrow-back" />
        <span>Back</span>
      </v-button>
    </div>
    <img v-if="isLoaded" :src="countryComputed.flag" :alt="`${countryComputed.name} flag`">
    <section v-if="isLoaded" class="country-content">
      <h2>{{ countryComputed.name }}</h2>

      <div class="country-content-wrapper">
        <div class="country-content-text">
          <p><span>Native Name: </span>{{ countryComputed.nativeName }}</p>
          <p><span>Population: </span>{{ countryComputed.population }}</p>
          <p><span>Region: </span>{{ countryComputed.region }}</p>
          <p><span>Sub Region: </span>{{ countryComputed.subregion }}</p>
          <p><span>Capital: </span>{{ countryComputed.capital }}</p>
        </div>
        <div class="country-content-text">
          <p><span>Top Level Domain: </span>{{ countryComputed.topLevelDomain[0] }}</p>
          <p><span>Currencies: </span>{{ currenciesComputed }}</p>
          <p><span>Languages: </span>{{ languagesComputed }}</p>
        </div>
      </div>

      <div class="country-borders-wrapper">
        <h3>Border Countries:</h3>
        <div class="country-content-borders">
          <div>
            <v-button>
              <span>France</span>
            </v-button>
          </div>
          <v-button>
            <span>Germany</span>
          </v-button>
          <v-button>
            <span>Netherlands</span>
          </v-button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import vButton from '@/components/Button'

export default {
  components: {
    vButton
  },
  data () {
    return {
      isLoaded: false,
      country: []
    }
  },
  computed: {
    countryComputed () {
      return this.country[0]
    },
    languagesComputed () {
      let langString = ''
      this.countryComputed.languages.forEach((lang) => {
        langString.length > 0 ? langString = `${langString}, ${lang.name}` : langString = lang.name
      })
      return langString
    },
    currenciesComputed () {
      let currencyString = ''
      this.countryComputed.currencies.forEach((currency) => {
        currencyString.length > 0 ? currencyString = `${currencyString}, ${currency.name}` : currencyString = currency.name
      })
      return currencyString
    },
    computedPopulation () {
      let populationString = ''
      populationString = this.countryComputed.population.toString()
      return populationString
    }
  },
  created () {
    this.getCountry()
  },
  methods: {
    async getCountry () {
      this.country = await this.$axios.$get(`/name/${this.$route.params.country}`)
      this.isLoaded = true
    }
  }
}
</script>
