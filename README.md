#Vue

## Vue.jsの特徴

- 「データバインンディング」!
- 一度作ったリソースの再利用が得意！
- 柔軟性が高い！ページの一部だけなど時と場合に応じて使える
- 日本語ドキュメントの充実
- データ駆動
- コンポーネントで機能ごとに分けて開発することが可能

## DOM操作にまつわる様々な機能を持っている
HTMLとJavaScriptをセットにするコンポーネントと呼ばれる機能で開発をサポート

豆知識
|名称|意味|記述例|
|---|---|---|
|ケバブケース|単語をハイフンでつなげていくこと|my-component|
|キャメルケース|単語をつなげて最初は小文字後に続く単語は大文字にする|myComponent|
|パスカルケース|単語ごとに頭文字を大文字にする|MyComponent|

## Vue.jsの歴史（言語の背景を知るのも大切）

- Evab You氏の個人プロジェクトとしてスタート2014年にリリースされた比較的新しいJavaScriptフレームワーク
- 2015年にPHPのフレームワーク「Laravel」のフロントエンドエンジンとして採用されたことで知名度があがる
- 2016年後半にリリースされたバージョン2では仮装DOMを採用したことによりレンダリングパフォーマンスを向上したとしてされに知名度UP！
- Adobe、任天堂、LINE、GitLabなど有名企業がプロジェクトで採用している　[Awesome Vue](https://gitlab.com/vuejs/awesome-vue)

## Vueで使用する用語
- mount（マウント） → 配置する要素とアプリケーションを紐づけること。
- ディレクティブ → 「v-」から始まる属性。
- created ライフサイクルフック → あらかじめ登録した処理を特定のタイミングで自動的に呼び出す。

## ライフサイクルフック
- beforeCreate
- created Vueのインスタンスが作成&初期化が終わった後に呼び出される
|メソッド  |タイミング  |
|---|---|
|beforeCreate|インスタンスが作成され、リアクティブの初期化がされる前|
|created|Vueのインスタンスが作成&初期化が終わった後に呼び出される|
|beforeMount|インスタンスがマウントされる前|
|mounted|インスタンスがマウントされた後|
