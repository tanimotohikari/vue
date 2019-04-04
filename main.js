var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['りんご', 'ばなな', 'いちご'],
    show: true,
    show2: true
  },
  created: function() {
    // このインスタンスの作成&初期化が終わったらすぐ実行
    console.log('created');
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    }
  }
})
