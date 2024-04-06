# React入門】完全初心者OK！１から簡単なTodoアプリを作ってReactの１歩を踏み出してみよう ~Reactチュートリアル~

- 関数コンポーネント作成コマンド"rafce"
- コンポーネント間でのデータの受け渡しはpropsを使用。しかし、プロップスリレーが発生して多用は無用。
- 配列の操作はスプレッド構文を使用し、破壊的操作を回避
- 配列の操作メソッド
  - map:配列の要素を一つづつ取り出し処理を実行するのに使用
  - find:配列から条件に合致する要素を抽出。特定のタスクのチェックボックスの動作を実行するために使用。抽出した要素のプロパティを反転しチェックボックスを変化
  - filter:条件に合致するリストを抽出。チェックボックスにチェックが入っていないタスク個数を表示するのに使用
  - findは単一の要素を見つけるために使用し、filterはリストから特定のリストを抽出するのに使用すると理解した。
- hooksはuseStateとuseRefを使用
  - useState: タスクリストの更新に使用
  - useRef: タスク入力欄のテキストデータ取得に使用

