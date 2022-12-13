// saved in WF form, not used in TF
const hiddenInput = document.querySelectorAll('.hidden-current-page')
hiddenInput.forEach(i => {
  i.value = location.href;
})

const historyReplaceTo = '?demo-request-started=true'
const hrefSource = location.href
const queryString = window.location.search

// for CTAs within WF forms
const TFLaunchersWithinForm = document.querySelectorAll('.tf-form')
TFLaunchersWithinForm.forEach(i => {
  i.addEventListener('submit', function() {
    const _input = i.querySelector('.input-email')
    const _formId = i.getAttribute('tf-form-id')
    window.tf.createPopup(_formId, {
      hidden: {
        email: _input.value,
        url_params: queryString,
        href_source: hrefSource
      }
    }).open()
    window.history.replaceState(null, null, historyReplaceTo)
  })
})

const TFLaunchers = document.querySelectorAll('[data-tf-popup]')
TFLaunchers.forEach(i => {
  const _CTAName = i.textContent
  i.setAttribute('data-tf-hidden', `href_source=${hrefSource}, url_params=${queryString}, cta_name=${_CTAName}`)
  i.addEventListener('click', function() {
    window.history.replaceState(null, null, historyReplaceTo)
  })
})
