<template lang="pug">
  a(v-if="blank" class="CommonIconBtn" :href="link")
    font-awesome-icon(class="icon" :icon="icon" :style="{ color }" :title="title")
  nuxt-link(v-else class="CommonIconBtn" :to="link")
    font-awesome-icon(class="icon" :icon="icon" :style="{ color }" :title="title")
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
    icon: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.CommonIconBtn {
  display: inline-block;
  background: var(--btnColor);
  color: var(--btnIconColor);
  padding: 15px 10px;
  min-width: 120px;
  font-size: 1.4rem;
  text-decoration: none;
  font-size: 0;
  &:visited {
    color: var(--btnIconColor);
  }
}
.icon {
  width: 20px !important;
  height: 20px !important;
}
</style>
