setTimeout(() => {
            const iubSrc = ['//cdn.iubenda.com/cs/ccpa/stub.js', '//cdn.iubenda.com/cs/iubenda_cs.js']
            iubSrc.forEach(i => {
                const _script = document.createElement('script')
                _script.src = i
                document.getElementsByTagName('head')[0].appendChild(_script)
            })
        }, 1000)
        var _iub = _iub || []
        _iub.csConfiguration = {
            'ccpaAcknowledgeOnDisplay': true,
            'ccpaApplies': true,
            'consentOnContinuedBrowsing': false,
            'cookiePolicyInOtherWindow': true,
            'enableCcpa': true,
            'invalidateConsentWithoutLog': true,
            'lang': 'en-GB',
            'siteId': 2659286,
            'cookiePolicyId': 58428147,
            'banner': {
                    "acceptButtonCaption": "Got it",
      'acceptButtonCaptionColor': '#FFFFFF',
      'acceptButtonColor': '#202222',
      'acceptButtonDisplay': true,
      'backgroundOverlay': false,
      'backgroundColor': '#ebefef',
      'brandBackgroundColor': '#FFFFFF',
      'brandTextColor': '#202222',
      'closeButtonRejects': true,
      "content": "Kaya uses cookies to bring you the best experience on our website.",
      "closeButtonCaption": "",
      "customizeButtonCaption": "Learn more",
      'customizeButtonCaptionColor': '#202222',
      'customizeButtonColor': 'transparent',
      'customizeButtonDisplay': true,
      "fontSize": "12px",
      'position': 'float-bottom-center',
      'textColor': '#202222',
            },
        }
        const htmlElement = document.querySelector('html')
        const observer = new MutationObserver(mutations => {
            mutations.forEach(() => {
                htmlElement.removeAttribute('style')
            })
        })
        observer.observe(htmlElement, { attributes: true, attributeFilter: ['style'] })
