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
    /*
      classとスタイルのデータバインディング
    */
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    /*
      オブジェクトデータを渡す
    */
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id: 1,
      class: 'hoge',
      width: 200,
      height: 50
    },
    /*
      複数の要素を同時に切り替えたい時
    */
    ok: false,
    /*
      リストデータの表示と更新
    */
    name: '',
    hp: '',
    monsterList: [
      { id: 1, name: 'スライム', hp: 10 },
      { id: 2, name: 'ゴブリン', hp: 30 },
      { id: 3, name: 'ミニドラゴン', hp: 40 },
    ],
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
    },
    /*
      v-if templateの非表示
    */
    chnageStatus: function() {
      this.ok = !this.ok;
    },
    /*
      リストに新規項目を追加する
    */
    addMonster: function() {
      // リスト内で一番大きなidの取得
      var maxId = this.monsterList.reduce(function(a, b) {
        return a.id > b.id ? a.id : b.id
      }, 0)
      //
      // // 新しいモンスターをリストに追加
      this.monsterList.push({
        id: maxId + 1,
        name: this.name,
        hp: this.hp
      })
    },
    /*
      リストから削除する
    */
    removeMonster: function(index) {
      this.monsterList.splice(index, 1)
    },
    /*
      モンスターを攻撃する
    */
    attackMonster: function(index) {
      this.monsterList[index].hp -= 10
    }
  }
})
