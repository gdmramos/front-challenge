<template>
  <div class="card">
    <div class="card-flag">
      <img :src="country.flag" alt="country flag">
    </div>
    <div class="card-content">
      <h2>{{ country.name }}</h2>
      <p><span>Population: </span>{{ country.population }}</p>
      <p><span>Region: </span>{{ country.region }}</p>
      <p><span>Capital: </span>{{ country.capital }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    country: {
      type: Object,
      default () {
        return {
          name: 'Germany',
          population: '81.770.900',
          region: 'Europe',
          capital: 'Berlin',
          flag: 'https://restcountries.eu/data/afg.svg'
        }
      }
    }
  },
  data () {
    return {
      data: {
        name: 'Germany',
        population: '81.770.900',
        region: 'Europe',
        capital: 'Berlin',
        flag: 'https://restcountries.eu/data/afg.svg'
      }
    }
  }
}
</script>
