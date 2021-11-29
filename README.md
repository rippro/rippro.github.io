# Webサイトの管理方法

## ファイルの編集方法

ブラウザで https://github.com/rippro/rippro.github.io にアクセスし、GitHub上で編集する。
または、ローカルに git clone し、編集して commit, push する。

## ページの追加

template.htmlを使ってください．
タイトル，パンくずリスト，右のナビゲーションの更新を忘れないように．

## イベントの追加方法

直近のイベントはindex.htmlにsectionを足してください．
3から5つぐらいが限度だと思います．センスに任せます．
イベントそのものはeventディレクトリで作ってください．
ページと同様にタイトル，パンくずリストの更新を忘れないように．

## ページ構成（#つきはid，それ以外はclass）

h1タグはタイトル専用
h2で章，h3で節

```
#main：全体
	#head：ヘッダ
		#tagline：タグライン
	#article：記事
		#breadcrumbs：パンくずリスト
		section：章
			detail：詳細
	#navi：ナビゲーション
		navibutton：ボタン
	#footer：フッター
```
基本的にidになってるものはいじらない．
逆にclassになってるものは増やしたり減らしたりしてください．

- ベース色：#c0c0c0
- ボトム：立命カラー(#700)
- アクセント：青系(#6CBAD8・#cdf0fd)

## 注意

style.cssで位置関係をいじると
結構右のナビゲーションとかトップのNewsBoxが崩れたりする．
フォルダを作ったらindex.htmlを必ず置くこと．

## パーミッションの設定
- 普通の公開ファイル(index.htmlなど)
  - chmod 644 hogefile
- 外部に見せたくないファイルの設定(README.txt, .htpasswdなど)
  - chmod 600 hogefile
- 外部に見せたくないディレクトリの設定(.gitなど)
  - chmod 700 hogedir