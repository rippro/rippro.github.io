# RiPPro の Web サイト

## How to develop

- Install Dependencies

```sh
npm ci
```

- Develop

```sh
npm run dev
```

- Build & Export

```sh
npm run check && npx astro build
```

## Deploy

GitHub Actions で masterにPush 時に自動デプロイされます．

## コンテンツの追加

それぞれのファイルはここにあります．

```txt
|--src                          # プロジェクトのソースルートです
| |--assets                     # 画像など最適化可能なリソースを置く場所
| |--components                 # ページのパーツ(再利用可能なもの)を置く場所
| |--contents                   # mdxなどコンテンツとなるmdを置く場所
| |--layouts                    # ページレイアウトの完成系など大きなコンポーネント
| |--pages                      # 実際にレンダリングする時のエンドポイント
| |--styles                     # css置き場
| |--utils                      # ヘルパー関数置き場
|--public                       # 最適化不要なファイル置き場
| |--static
| | |--contestData/             # ここにRUPC, ACPCなどの解説ファイルなどを置きます
```

## コンテスト記事の書き方
`/src/content/event/` にmarkdownを配置することで自動的に記事が作成されます。
frontmatter(ファイル先頭にハイフン三つで囲む)にYaml形式で追加していくことで項目を作成できます。
特記事項として、`problems`は左に「名前」、右に「OJのurl」を持つタプルの配列で記述します。
`explanation`は問題名の配列を記載すると自動でAから順番に問題番号が振られます。pdfへのリンクは`/contestData/{マークダウンのファイル名}/{A-Z}.pdf`に自動でリンクされるのでファイル名は揃えてください。

詳しくは`/src/content/event/sample.md` を参考に記載してもらえればと思います。
必須項目は`title`, `pubDate`, `tags`のみで、残りは記載しなければ項目ごとします。
`tags`に`ignorant`または`draft`を付加すると`/events`ページのリストから削除されます。ただし、直リンクでのアクセスは可能です。

## 個別ページのカスタマイズ方法
`/src/pages/`以下の`.astro`ファイルを編集することで個別ページがカスタマイズされます。
frontmatterではビルド時に実行されるtypescriptが書けます。
frontmatterの下ではReact風のhtmlコード(JSXです)やcss, scriptタグが使用できます。
全体のページ間の統一は`/src/layout/Layouts.astro`で管理されています。
`Paragraph`や`SectionTitle`で本文と見出しを記述できますが、難しかったらhtmlでベタ書きしてもいいかもしれません。`SectionTitle`の`level`を指定する際に`{1}`と囲むことに気を付けてください。


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

