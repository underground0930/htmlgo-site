<template lang="pug">
  div(class="container")
    main(class="main")
      common-title
        span CONTACT
        span お仕事のお問い合わせはこちらからどうぞ
      div(class="contact__body").
        <!-- class, action, methodを変更しないでください -->
        <form class="formrun" action="https://form.run/api/v1/r/slpviahq150x5q8lxsyw5x8z" method="post">
          <!-- ↓自由に要素を追加・編集することができます -->
          <ul class="contact__list">
            <li class="contact__listChild">
              <label>お名前 [必須]</label>
              <input class="contact__inputText" name="お名前" type="text" data-formrun-required>
              <div data-formrun-show-if-error="お名前">お名前を入力してください</div>
            </li>
            <li class="contact__listChild">
              <label>メールアドレス [必須]</label>
              <input class="contact__inputText" name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required>
              <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
            </li>
            <li class="contact__listChild">
              <label>お問い合わせ [必須]</label>
              <textarea class="contact__textarea" name="お問い合わせ" data-formrun-required rows="14"></textarea>
              <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
            </li>
          </ul>
          <div class="contact__recaptcha">
            <div id="recaptchaMain" class="g-recaptcha" :data-sitekey="sitekey" data-callback="successCallback" data-expired-callback="expiredCallback"></div>
          </div>
          <button id="contact__submit" disabled type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
        </form>
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
  data() {
    return {
      selected: '',
      sitekey: '6Ldu_1UbAAAAABKzqC0VRtFsRoCmdI1ruAB_Pkb4',
    }
  },
  mounted() {
    if (process.client) {
      this.loadRecapchaScript()
      this.loadFormrunScript()
    }
  },
  methods: {
    ok() {
      alert('ok')
    },
    initFormrun() {
      console.log('init formrun')
      window.Formrun._reset()
      window.Formrun.init('.formrun')
    },
    resetRecapcha() {
      console.log('init Recapcha')
      console.log(window.grecaptcha.render('recaptchaMain'))
    },
    loadScript(src, callback, errCallback) {
      const script = document.createElement('script')
      script.addEventListener('load', () => {
        if (typeof callback === 'function') {
          callback()
        }
      })
      script.addEventListener('error', () => {
        if (typeof errCallback === 'function') {
          errCallback()
        }
      })
      script.src = src
      document.head.appendChild(script)
    },
    loadRecapchaScript() {
      if (window.grecaptcha) {
        console.log('repeat reset')
        this.resetRecapcha()
        return
      }
      this.loadScript('https://www.google.com/recaptcha/api.js')
    },
    loadFormrunScript() {
      if (window.Formrun) {
        console.log('repeat init')
        this.initFormrun()
        return
      }
      this.loadScript(
        'https://sdk.form.run/js/v2/formrun.js',
        this.initFormrun.bind(this)
      )
    },
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

._formrun_gotcha {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

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

.contact__list {
  margin-bottom: var(--s10);
}

.contact__listChild {
  margin-bottom: var(--s7);
  label {
    font-weight: bold;
    font-size: 1.6rem;
    display: block;
    border-left: 5px solid #000;
    padding-left: var(--s2);
    margin: 0 0 var(--s2);
  }
  .contact__inputText {
    width: 100%;
    padding: var(--s2) var(--s1);
    display: block;
    font-size: 1.6rem;
    appearance: none;
    border-radius: 0;
    border: 1px solid #aaa;
  }
  .contact__textarea {
    width: 100%;
    padding: var(--s1);
    display: block;
    font-size: 1.6rem;
    appearance: none;
    border-radius: 0;
    border: 1px solid #aaa;
    resize: none;
  }
  .contact__inputSelect {
    width: 100%;
    padding: var(--s2) var(--s1);
    display: block;
    font-size: 1.6rem;
    border-radius: 0;
    border: 1px solid #aaa;
  }

  [data-formrun-show-if-error] {
    display: none;
  }
  .formrun-system-show {
    display: block;
    padding-top: var(--s1);
    color: #f00;
    font-size: 1.4rem;
    font-weight: bold;
  }
}
button[type='submit'] {
  display: block;
  background: #000;
  color: #fff;
  width: 200px;
  padding: var(--s3) 0;
  margin: 0 auto 0;
  border: none;
  border-radius: 0;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
}

.contact__back {
  text-align: center;
}

.contact__recaptcha {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 var(--s10);
}

.contact__bot {
  text-align: center;
  padding-bottom: var(--s5);
  color: #f00;
  font-size: 1.4rem;
  font-weight: bold;
  @include max-screen($about_bp) {
    text-align: left;
  }
}
</style>
