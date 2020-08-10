<template lang="pug">
  div(class="loader")
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loader,
.loader:before,
.loader:after {
  background: var(--loaderColor);
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: var(--loaderColor);
  text-indent: -9999em;
  margin: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
