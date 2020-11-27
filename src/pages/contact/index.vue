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
            <li class="contact__listChild">
              <label>スパム対策 [必須]</label>
              <select class="contact__inputSelect" name="スパム対策" v-model="selected" data-formrun-required>
                <option value="">令和2年11月現在の総理大臣をえらんでください</option>
                <option value="">小泉進次郎</option>
                <option value="">小池百合子</option>
                <option value="">安倍晋三</option>
                <option value="">小泉純一郎</option>
                <option value="true">菅義偉</option>
                <option value="">安倍昭恵</option>
                <option value="">森田健作</option>
                <option value="">麻生太郎</option>
              </select>
              <div data-formrun-show-if-error="スパム対策">総理大臣ではありません</div>
            </li>
          </ul>
          <div class="contact__bot" v-if="token === '' ">ボットの可能性が検出されたため送信を中止します。</div>
          <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
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
      token: null,
    }
  },
  async mounted() {
    if (process.client) {
      this.loadFormrunScript()
    }
    // try {
    //   const init = await this.$recaptcha.init()
    // } catch (e) {
    //   console.log(e)
    // }
  },
  methods: {
    // async onSubmit(e) {
    //   try {
    //     const token = await this.$recaptcha.execute('login')
    //     this.token = token
    //     console.log(window.Formrun)
    //   } catch (error) {
    //     this.token = ''
    //     console.log('Login error:', error)
    //   }
    // },
    initFormrun() {
      window.Formrun._reset()
      window.Formrun.init('.formrun')
    },
    loadFormrunScript() {
      if (window.Formrun) {
        console.log('repeat init')
        this.initFormrun()
        return
      }
      new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.addEventListener('load', resolve)
        script.addEventListener('error', reject)
        script.src = 'https://sdk.form.run/js/v2/formrun.js'
        document.head.appendChild(script)
      })
        .then(() => {
          console.log('init')
          this.initFormrun()
        })
        .catch(() => {
          console.log('err')
        })
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
}

.contact__back {
  text-align: center;
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
