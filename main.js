var state = { count: 0 }

var app = new Vue({
  el: '#app',
  data: {
    /*
      データ直下のプロパティは後から追加できないため
      初期値やからデータとして定時しておく必要がある
    */
    /*
      dataオプションに文字列やオブジェクトを定義することで,
      インスタンス作成時にリアクティブなデータに変換される
    */
    message: 'Hello Vue.js!',
    list: ['りんご', 'ばなな', 'いちご'],
    show: true,
    show2: true,
    /*
      オプション外で定義されたデータも
      Vue.jsのdataとして登録するとリアクティブデータに変換される
    */
    state: state,
    message2: {
      value: 'Vue.js!'
    },
    num: 1,
    message3: {
      value: 'Vue.js! 3',
      scroll: 0
    },
    count: 0
  },
  created: function() {
    // このインスタンスの作成&初期化が終わったらすぐ実行
    //console.log('created');
  },
  mounted: function() {
    this.scroll = 100
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    },
    increment: function() {
      this.count += 1
    }
  }
})
