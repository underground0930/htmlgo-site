<template lang="pug">
  ul(class="snsBox")
    li(class="snsBox__link")
      a(href="https://github.com/underground0930" target="_blank")
        font-awesome-icon(:icon="['fab', 'github-square']" :style="{ color: '#24292e' }" title="github")
    li(class="snsBox__link")
      a(href="https://twitter.com/resistance_gowy" target="_blank")
        font-awesome-icon(:icon="['fab', 'twitter-square']" :style="{ color: '#1DA1F2' }" title="twitter")
    li(class="snsBox__link")
      a(href="https://www.facebook.com/go.nishiduka" target="_blank")
        font-awesome-icon(:icon="['fab', 'facebook-square']" :style="{ color: '#4267B2' }"  title="facebook")
    li(class="snsBox__link")
      a(href="https://www.instagram.com/resistancegowy/" target="_blank")
        font-awesome-icon(:icon="['fab', 'instagram-square']" :style="{ color: '#000000' }"  title="instagram")
    li(class="snsBox__link")
      a(href="https://scrapbox.io/resistancegowy-pages/" target="_blank")
        icon-scrapbox(:className="'iconScrapbox'")
    li(class="snsBox__link")
      a(href="http://qiita.com/resistance_gowy" target="_blank")
        icon-qiita(:className="'iconQiita'" :style="{ color: '#4097DB' }")
    li(class="snsBox__link")
      a(href="https://note.com/resistance_gowy" target="_blank")
        icon-note(:className="'iconNote'")
    li(class="snsBox__link")
      a(href="http://resistance-underground.hateblo.jp/" target="_blank")
        icon-hatena(:className="'iconHatena'")
</template>

<script>
import IconQiita from '@/components/icons/IconQiita'
import IconHatena from '@/components/icons/IconHatena'
import IconNote from '@/components/icons/IconNote'
import IconScrapbox from '@/components/icons/IconScrapbox'

export default {
  components: {
    IconQiita,
    IconHatena,
    IconNote,
    IconScrapbox,
  },
}
</script>

<style lang="scss" scoped>
$snsBox_bp: 800px;
.snsBox {
  max-width: 270px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @include max-screen($snsBox_bp) {
    max-width: 240px;
  }
}
.snsBox__link {
  margin: 0 0 var(--s2);
  width: 25%;
  text-align: center;
  &:last-of-type {
    margin-right: 0;
  }
  svg {
    width: 50px;
    height: 50px;
  }
  .iconNote {
    border-radius: 4px;
    width: 44px;
    height: 44px;
  }
  @include max-screen($snsBox_bp) {
    svg {
      width: 40px;
      height: 40px;
    }
    .iconNote {
      border-radius: 4px;
      width: 36px;
      height: 36px;
    }
  }
}
</style>
