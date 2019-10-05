<template>
  <nuxt-link :to="path" class="button">
    <slot />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>
