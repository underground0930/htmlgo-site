<template lang="pug">
  a(v-if="blank" class="CommonTextBtn" :href="link") {{title}}
  nuxt-link(v-else class="CommonTextBtn" :to="link") {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
}
</script>

<style lang="scss">
.CommonTextBtn {
  display: inline-block;
  background: var(--btnColor);
  color: var(--btnIconColor);
  padding: 15px 10px;
  min-width: 120px;
  font-size: 1.4rem;
  text-decoration: none;
  &:visited {
    color: var(--btnIconColor);
  }
}
</style>
