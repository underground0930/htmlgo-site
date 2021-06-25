window.successCallback = () => {
  document.getElementById('contact__submit').removeAttribute('disabled')
}

window.expiredCallback = () => {
  document.getElementById('contact__submit').setAttribute('disabled', true)
}
