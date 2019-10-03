<template>
  <div class="index">
    <section class="input-wrappers">
      <search />
      <v-select />
    </section>
    <section class="card-wrappers">
      <card />
      <card />
      <card />
      <card />
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
  }
}
</script>
