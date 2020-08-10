<template lang="pug">
  div(class="viewSwitch")
    button(class="viewSwitch__btn" :class="{'is-current': viewType === 'tile'}" @click="setViewType('tile')")
      font-awesome-icon(:icon="['fas', 'th']" title="タイル" )
    button(class="viewSwitch__btn" :class="{'is-current': viewType === 'list'}" @click="setViewType('list')")
      font-awesome-icon(:icon="['fas', 'list']"  title="リスト" )
    button(class="viewSwitch__btn" :class="{'is-current': viewType === 'text'}" @click="setViewType('text')")
      font-awesome-icon(:icon="['fas', 'bars']"  title="テキスト" )

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['viewType']),
  },
  methods: {
    ...mapMutations(['setViewType']),
  },
}
</script>

<style lang="scss" scoped>
.viewSwitch {
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid var(--borderColor);
  margin: 0 0 20px;
  padding: 0 0 20px;
}
.viewSwitch__btn {
  opacity: 0.5;
  background: none;
  padding: none;
  border: none;
  outline: none;
  margin-left: 5px;
  &.is-current {
    opacity: 1;
  }
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    color: var(--color1);
  }
}
</style>
