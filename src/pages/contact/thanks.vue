<template lang="pug">
  div(class="container")
    main(class="main")
      common-title
        | CONTACT
      div(class="contact__body")
        div(class="contact__thanks")
          | お問い合わせありがとうございました。<br>内容を確認後、折り返しご連絡いたしますので、<br>今しばらくおまちください。

      div(class="contact__back")
        common-icon-btn(:title="'BACK TO TOP'" link="/" :blank="false" :icon="['fas', 'home']" color="'#4267B2'")
</template>

<script>
import CommonTitle from '@/components/CommonTitle'
import CommonIconBtn from '@/components/CommonIconBtn'
import SnsBox from '@/components/SnsBox'

export default {
  components: {
    CommonTitle,
    CommonIconBtn,
    SnsBox,
  },
  head() {
    const meta = this.$setMeta({
      title: 'CONTACT | HTMLGO',
      description: 'お問い合わせ',
      url: 'https://htmlgo.site/contact/',
    })
    return {
      ...meta,
    }
  },
}
</script>

<style lang="scss" scoped>
$about_bp: 800px;

.main {
  width: 720px;
  margin: 0 auto var(--s20);

  @include max-screen($about_bp) {
    width: auto;
    margin: 0 var(--s5) var(--s10);
  }
}

.contact__body {
  max-width: 600px;
  padding: 0 var(--s5) var(--s10);
  border-bottom: 1px solid var(--borderColor);
  margin: 0 auto var(--s10);
}

.contact__thanks {
  font-size: 2rem;
  text-align: center;
  line-height: 1.6;
}

.contact__back {
  text-align: center;
}
</style>
