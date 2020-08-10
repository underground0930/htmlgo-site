<template lang="pug">
  h2(class="commonTitle")
    slot
</template>
<script>
export default {
  name: 'CommonTitle',
}
</script>
<style lang="scss" scoped>
$title_bp: 750px;
.commonTitle {
  margin: 0 0 var(--s8);
  line-height: 1.55;
  text-align: center;
  span {
    display: block;
    &:nth-of-type(1) {
      font-weight: bold;
      font-size: 3rem;
    }
    &:nth-of-type(2) {
      font-size: 1.3rem;
    }
  }
  @include max-screen($title_bp) {
    margin: 0 0 var(--s6);
    span {
      &:nth-of-type(1) {
        font-size: 2rem;
      }
      &:nth-of-type(2) {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
