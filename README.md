# RiPPro の Web サイト

## How to develop

- Install Dependencies

```sh
yarn && yarn prepare
```

- Develop

```sh
yarn dev
```

- Build & Export

```sh
yarn build && yarn export
```

## Deploy

GitHub Actions で Push 時に自動デプロイされます．

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

