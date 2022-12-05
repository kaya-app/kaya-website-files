(function(d, t) {
  var BASE_URL = "https://app.chatwoot.com";
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function() {
    window.chatwootSDK.run({
      websiteToken: 'K7H3zqwFdFuq8KMUihGwuW8B',
      baseUrl: BASE_URL
    })
  }
})(document, "script");


const clClass = document.querySelectorAll('.chat-launcher')
const clHref = document.querySelectorAll("[href='#chat-launcher']");
[...clClass, ...clHref].forEach(i => {
  i.addEventListener('click', () => {
    window.$chatwoot.toggle("open");
  })
})
