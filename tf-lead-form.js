$('.hidden-current-page').val(location.href);
const TFLaunchers = document.querySelectorAll('.tf-form')
TFLaunchers.forEach(i => {
  i.addEventListener('submit', function() {
    const _input = i.querySelector('.input-email')
    // const _input = i.previousElementSibling
    const _queryString = window.location.search
    const formId = i.getAttribute('tf-form-id')
    const historyReplaceTo = i.getAttribute('tf-history-replace')
    window.tf.createPopup(formId, {
      hidden: {
        email: _input.value,
        url_params: _queryString,
      }
    }).open()
    window.history.replaceState(null, null, historyReplaceTo)
  })
})
