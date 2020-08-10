<template>
  <!-- eslint-disable -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80.48 80.48"
    :class="className"
    width="26"
    height="26"
  >
    <path
      class="cls-1"
      d="M70.48,0a10,10,0,0,1,10,10V70a10,10,0,0,1-10,10C-15.07,78.56,1.94,95.47.48,10h0c0-5,5-10,10-10ZM65.23,36.46a5,5,0,0,0-7.07,0h0L39.07,55.56l-2.83-2.83-5.66,5.65c2.9,2.8,7.69,9.45,12,4.95h0L61.69,44.24l2.83,2.83,5.66-5.66ZM53.91,25.15a5,5,0,0,0-7.07,0h0L22.09,49.9l5.66,5.66L50.38,32.93l2.83,2.83,5.65-5.66ZM42.6,13.84a5,5,0,0,0-7.07,0h0L14.32,35.05a5,5,0,0,0,0,7.07h0l4.95,5,5.65-5.66-2.83-2.82,17-17,2.82,2.82,5.66-5.65Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.cls-1 {
  fill: #ffffff;
  fill-rule: evenodd;
}
</style>
