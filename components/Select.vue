<template>
  <v-select :value="$store.state.selectedFilter" :options="options" placeholder="Filter by Region" @input="setFilter" />
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
    setFilter (value) {
      this.$store.commit('setFilter', value)
    }
  }
}
</script>
