<template>
  <div class="search">
    <ion-icon class="search-icon" name="search" />
    <input v-model="value" class="search-input" type="text" placeholder="Search for a country..." @input="setCountryFilter">
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    setCountryFilter () {
      this.$store.commit('setCountryFilter', this.value)
    }
  }
}
</script>
