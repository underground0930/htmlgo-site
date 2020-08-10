<template lang="pug">
  footer(class="footer")
    dl(class="footer__powerd")
      dt(class="footer__powerdDt") This website powered by
      dd(class="footer__powerdDd")
        ul(class="footer__poweredList")
          li(class="footer__poweredChild")
            a(href="https://ja.nuxtjs.org/" target="_blank")
              icon-nuxtjs
          li(class="footer__poweredChild")
            a(href="https://github.com/" target="_blank")
              icon-github
          li(class="footer__poweredChild")
            a(href="https://microcms.io/" target="_blank")
              icon-microcms
          li(class="footer__poweredChild")
            a(href="https://form.run/ja" target="_blank")
              icon-formrun
    small(class="footer__copyright")
      | Copyright © 2016 htmlgo.site All rights reserved.
</template>
<script>
import IconNuxtjs from '@/components/icons/IconNuxtjs'
import IconMicrocms from '@/components/icons/IconMicrocms'
import IconGithub from '@/components/icons/IconGithub'
import IconFormrun from '@/components/icons/IconFormrun'
export default {
  name: 'CommonFooter',
  components: {
    IconMicrocms,
    IconGithub,
    IconNuxtjs,
    IconFormrun,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: var(--mainColor);
  padding: 20px 20px;
  color: var(--footerTextColor);
}
.footer__powerd {
  text-align: center;
  font-size: 1.4rem;
  margin: 0 0 20px;
}
.footer__powerdDt {
  margin: 0 0 15px;
}
.footer__poweredList {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer__poweredChild {
  margin: 0 10px;
}
.footer__copyright {
  display: block;
  font-size: 1rem;
  text-align: center;
}
</style>
