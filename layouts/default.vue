<template>
  <div :class="{dark: darkMode}">
    <new-header />
    <nuxt />
  </div>
</template>

<script>
import newHeader from '@/components/Header'

export default {
  components: {
    newHeader
  },
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style>
html {
  font-family: 'Nunito Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
}
</style>
