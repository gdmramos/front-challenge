<template>
  <div class="container">
    <search />
    <v-select />
  </div>
</template>

<script>
import Search from '@/components/Search'
import vSelect from '@/components/Select'

export default {
  components: {
    Search,
    vSelect
  }
}
</script>
