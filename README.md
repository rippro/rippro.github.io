[![pages-build-deployment](https://github.com/rippro/rippro.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/rippro/rippro.github.io/actions/workflows/pages/pages-build-deployment)

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
|--components
| |--EventList.tsx            # RUPC, ACPCなどのイベント一覧と各コンテストの詳細情報一覧
| |--IndexArticles.tsx        # インデックスページの記事(コンテンツ)
| |--Layout
| | |--Navigator.tsx          # 左側にあるナビゲーションバー
| |--Links.tsx                # Linksページのリンク内容
|--pages
| |--_app.tsx
| |--contact.tsx
| |--event
| | |--[id].tsx
| | |--index.tsx
| |--index.tsx
| |--links.tsx
| |--menbers.tsx
| |--welcome.tsx
|--public
| |--static
| | |--contestData/           # ここにRUPC, ACPCなどの解説ファイルなどを置きます
```
