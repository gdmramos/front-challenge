<template>
  <div class="card">
    <div class="card-flag">
      <img src="@/static/germany.png" alt="">
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
  data () {
    return {
      country: {
        name: 'Germany',
        population: '81.770.900',
        region: 'Europe',
        capital: 'Berlin'
      }
    }
  }
}
</script>
