<template lang="pug">
  div(class="panels" :class="`panels--${viewType}`")
    article(class="panel" v-for="item in items" :item="item" :key="item.title")
      a(class="panel__link" :href="item.link" target="_blank" rel="noopener noreferrer")
        dl(class="panel__dl")
          dt(class="panel__dt" v-if="viewType === 'text'")
            time(class="panel__time") {{item.published}}
          dt(class="panel__dt" v-else :style="setStyle(item)" :class="setClass(item)")
          dd(class="panel__dd")
            time(class="panel__time") {{item.published}}
            h3(class="panel__title") {{item.title}}
            p(class="panel__category")
              span(v-if="item.category") {{item.category}}
              span(v-for="tag in item.tags") {{tag}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FeedPanelTexts',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(['viewType']),
    setClass() {
      return (item) => {
        if (item.category === 'hatena') {
          return 'panel__dt--hatena'
        }
        return 'panel__dt--qiita'
      }
    },
    showTagsText() {
      return (tags) => {
        return tags.join(', ')
      }
    },
    setStyle() {
      return (item) => {
        if (item.img) {
          return { backgroundImage: 'url(' + item.img + ')' }
        }
        return {}
      }
    },
  },
}
</script>

<style lang="scss" scoped>
////////////////////////////
// タイル
////////////////////////////
.panels--tile {
  $panel_panel_bp: 720px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  &:after {
    content: '';
    display: block;
    width: 23.5%;
    height: 0;
  }
  &:before {
    content: '';
    display: block;
    width: 23.5%;
    height: 0;
    order: 1;
  }
  @include max-screen(920px) {
    &:before,
    &:after {
      width: 31%;
    }
  }
  @include max-screen(720px) {
    &:before,
    &:after {
      width: 48%;
    }
  }
  @include max-screen(450px) {
    &:before,
    &:after {
      display: none;
    }
  }
  .panel {
    width: 23.5%;
    box-shadow: 0px 0px 7px 0px #a3a3a3;
    margin: 0 0 var(--s10);
    @include max-screen(920px) {
      width: 31%;
    }
    @include max-screen(720px) {
      width: 48%;
    }
    @include max-screen(450px) {
      width: 100%;
      margin: 0 0 var(--s5);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .panel__link {
    color: #000;
    text-decoration: none;
  }
  .panel__dl {
    background: #fff;
  }
  .panel__dt {
    height: 140px;
    background-color: var(--color1);
    background-position: center;
    background-size: cover;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 140px;
      border: 2px solid #222;
      transition: border-width 0.1s;
      left: 0;
      top: 0;
      box-sizing: border-box;
    }
    &--hatena {
      background-image: url('/img/hatena.png');
    }
    &--qiita {
      background-image: url('/img/qiita.png');
    }
  }
  .panel__dd {
    padding: var(--s3);
  }
  .panel__title {
    font-size: 1.3rem;
    font-weight: bold;
    background: #fff;
    line-height: 1.7;
    position: relative;
    letter-spacing: 0.2em;
    word-break: break-all;
    margin-bottom: var(--s1);
    &:after {
      content: '';
      position: relative;
      right: -1em;
      float: right;
      width: 1em;
      height: 100%;
      background-color: inherit;
      margin-left: -1em;
    }
  }
  .panel__category {
    font-size: 1rem;
    display: block;
    &:empty {
      display: none;
    }
    span {
      display: inline-block;
      padding: var(--s1) var(--s2);
      background: #222;
      border-radius: 3px;
      color: var(--iconTextColor);
      margin-top: var(--s1);
      &:not(:last-of-type) {
        margin-right: var(--s1);
      }
    }
  }
  .panel__time {
    font-size: 1.2rem;
    margin-bottom: var(--s1);
    display: block;
  }
  .panel__listChild {
    display: inline-block;
    margin: 0 var(--s2) 0 0;
  }
}

////////////////////////////
// リスト
////////////////////////////

.panels--list {
  $panel_list_bp: 750px;
  max-width: 750px;
  margin: -10px auto 0;
  .panel {
    border-bottom: 1px solid var(--borderColor);
    padding: var(--s2) 0;
  }
  .panel__link {
    color: var(--linkColor);
    text-decoration: none;
  }
  .panel__nophoto {
    display: block;
    text-align: center;
    font-size: 1.4rem;
    color: #fff;
    font-weight: bold;
    line-height: 0;
    padding: var(--s18) 0 0 0;
  }
  .panel__time {
    font-size: 1.4rem;
    margin: 0 0 4px 0;
    display: block;
  }
  .panel__dl {
    background: var(--baseColor);
    display: flex;
    align-items: center;
  }
  .panel__dt {
    width: 100px;
    height: 100px;
    background-color: var(--color1);
    background-position: center;
    background-size: cover;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100px;
      border: 2px solid #222;
      transition: border-width 0.1s;
      left: 0;
      top: 0;
      box-sizing: border-box;
    }

    &--hatena {
      background-image: url('/img/hatena.png');
    }
    &--qiita {
      background-image: url('/img/qiita.png');
    }
    @include max-screen(600px) {
      width: 70px;
      height: 70px;
      &:after {
        height: 70px;
      }
    }
  }

  .panel__dd {
    padding: 0 0 0 var(--s6);
    flex: 1;
  }

  .panel__title {
    font-size: 1.5rem;
    font-weight: bold;
    background: var(--baseColor);
    line-height: 1.7;
    position: relative;
    letter-spacing: 0.2em;
    word-break: break-all;
    margin-bottom: var(--s1);
    &:after {
      content: '';
      position: relative;
      right: -1em;
      float: right;
      width: 1em;
      height: 100%;
      background-color: inherit;
      margin-left: -1em;
    }
  }

  .panel__category {
    font-size: 1rem;
    display: block;
    &:empty {
      display: none;
    }
    span {
      display: inline-block;
      padding: var(--s1) var(--s2);
      background: #222;
      border-radius: 3px;
      color: var(--iconTextColor);
      margin-top: var(--s1);
      &:not(:last-of-type) {
        margin-right: var(--s1);
      }
    }
  }

  .panel__listChild {
    display: inline-block;
    margin: 0 var(--s2) 0 0;
  }
}

////////////////////////////
// テキスト
////////////////////////////

.panels--text {
  max-width: 750px;
  margin: -10px auto 0;
  .panel {
    border-bottom: 1px solid var(--borderColor);
    padding: var(--s3) 0;
  }

  .panel__link {
    color: var(--linkColor);
    text-decoration: none;
  }

  .panel__nophoto {
    display: block;
    text-align: center;
    font-size: 1.4rem;
    color: var(--fontColor);
    font-weight: bold;
    line-height: 0;
    padding: var(--s18) 0 0 0;
  }

  .panel__time {
    font-size: 1.4rem;
    display: block;
  }

  .panel__dl {
    background: var(--baseColor);
    display: flex;
    align-items: center;
  }

  .panel__dt {
    width: 100px;
  }

  .panel__dd {
    padding: 0 var(--s4) 0 0;
    flex: 1;
  }

  .panel__title {
    font-size: 1.5rem;
    font-weight: bold;
    background: var(--baseColor);
    line-height: 1.7;
    position: relative;
    letter-spacing: 0.2em;
    word-break: break-all;
    margin-bottom: var(--s2);
    &:after {
      content: '';
      position: relative;
      right: -1em;
      float: right;
      width: 1em;
      height: 100%;
      background-color: inherit;
      margin-left: -1em;
    }
  }

  .panel__category {
    font-size: 1rem;
    display: block;
    &:empty {
      display: none;
    }
    span {
      display: inline-block;
      padding: var(--s1) var(--s2);
      background: #222;
      border-radius: 3px;
      color: var(--iconTextColor);
      margin-top: var(--s1);
      &:not(:last-of-type) {
        margin-right: var(--s1);
      }
    }
  }

  .panel__listChild {
    display: inline-block;
    margin: 0 var(--s2) 0 0;
  }
}
</style>
