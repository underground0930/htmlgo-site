/**
 * jsファイルのロードとコールバックを設定
 * @param {string} src - jsのファイルパス
 * @param {function} callback - loadが完了した後に呼ぶ処理
 * @return {void}
 */

export const loadScript = (src: string, callback: () => void): void => {
  const head = document.head
  const script = document.createElement('script')
  script.src = src
  script.async = true
  script.defer = true
  script.addEventListener('load', callback)
  head.appendChild(script)
}
