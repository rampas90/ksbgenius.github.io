new Vue({
  el: '#app',
  vuetify: new Vuetify({
theme: {
  themes: {
    light: {
      anchor: '#c0986e'
    }
  }
}
}),
  delimiters: ['${', '}'],
  data: function () {
    return {
      right: false
    }
  }
})