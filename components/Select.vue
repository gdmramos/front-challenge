<template>
  <v-select :options="options" placeholder="Filter by Region" />
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
        'America',
        'Asia',
        'Europe',
        'Oceania'
      ]
    }
  }
}
</script>
