<template>
  <v-select :value="$store.state.regionFilter" :options="options" placeholder="Filter by Region" @input="setRegionFilter" />
</template>
<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },
  data () {
    return {
      options: [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
      ],
      selected: ''
    }
  },
  methods: {
    setRegionFilter (value) {
      this.$store.commit('setRegionFilter', value)
    }
  }
}
</script>
