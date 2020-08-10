<template lang="pug">
  <div class="wrapper">
    <common-header />
    <nuxt />
    <common-footer />
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '@/components/CommonFooter'

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  flex-grow: 1;
}
</style>
