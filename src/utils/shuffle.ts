/**
 * 配列をシャッフルする
 * @param array シャッフルしたい配列
 * @returns シャッフルした配列
 */

export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // 配列にまだ未処理の要素がある間、処理を続ける
  while (0 !== currentIndex) {
    // 未処理の要素からランダムに1つ選ぶ
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // 現在の要素と選んだ要素を交換する
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
