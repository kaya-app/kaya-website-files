// saved in WF form, not used in TF
const hiddenInput = document.querySelectorAll('.hidden-current-page')
hiddenInput.forEach(i => {
  i.value = location.href;
})

const historyReplaceTo = '?demo-request-started=true'
const hrefSource = location.href

// for CTAs within WF forms
const TFLaunchersWithinForm = document.querySelectorAll('.tf-form')
TFLaunchersWithinForm.forEach(i => {
  i.addEventListener('submit', function() {
    const _input = i.querySelector('.input-email')
    const _queryString = window.location.search
    const formId = i.getAttribute('tf-form-id')
    window.tf.createPopup(formId, {
      hidden: {
        email: _input.value,
        url_params: _queryString,
        href_source: hrefSource
      }
    }).open()
    window.history.replaceState(null, null, historyReplaceTo)
  })
})

const TFLaunchers = document.querySelectorAll('[data-tf-popup]')
TFLaunchers.forEach(i => {
  i.setAttribute('data-tf-hidden', `source=${hrefSource}`)
  i.addEventListener('click', function() {
    window.history.replaceState(null, null, historyReplaceTo)
  })
})
