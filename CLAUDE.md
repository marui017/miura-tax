# 三浦税理士事務所 コーポレートサイト

## プロジェクト概要

フリーランス・個人事業主向けの税理士事務所サイト。
架空クライアント「三浦税理士事務所」のポートフォリオ用制作物。

---

## 技術構成

- HTML5
- SCSS（FLOCSSアーキテクチャ）
- JavaScript（Vanilla）
- Sassコンパイル：npm run sass:watch

---

## CSSアーキテクチャ（FLOCSS）

- Foundation：リセット・変数・mixin・base
- Layout：`l-` プレフィックス（例：l-header, l-inner）
- Object/Component：`c-` プレフィックス（例：c-btn, c-card）
- Object/Project：`p-` プレフィックス（例：p-hero, p-service）
- Object/Utility：`u-` プレフィックス（例：u-pc-only, u-mt-md）

---

## 命名規則

- BEM記法を使用（Block\_\_Element--Modifier）
- 例：.p-hero\_\_title, .c-btn--primary
- クラス名は日本語・略語を使わず英語で書く

---

## 変数（\_variable.scss）

// Color
$color-black: #3a4656;
$color-navy: #0b1f3a;
$color-white: #ffffff;
$color-orange: #ce6826;
$color-gray-01: #6a7384;
$color-gray-02: #f6f8fb;
$color-blue: #4a93c4;

// Font
$font-sans: "Noto Sans JP", sans-serif;
$font-serif: "Shippori Mincho", "游明朝", serif;
$font-size-base: 16px;
$line-height-base: 1.8;

// Breakpoint
$bp-sp: 767px;
$bp-tab: 1024px;

// Spacing
$section-padding-pc: 80px;
$section-padding-sp: 60px;
$inner-width: 1080px;
$inner-padding: 20px;

---

## レスポンシブ方針

- デスクトップファースト（PCのスタイルを基準に書き、tab、spは上書きしていく）

---

## HTMLの共通構造

セクションは以下のパターンで統一する。

```html
<section class="p-[セクション名]">
  <div class="l-inner">
    <div class="p-[セクション名]__head">
      <p class="p-[セクション名]__label">英語ラベル</p>
      <h2 class="p-[セクション名]__title">タイトル</h2>
    </div>
    <div class="p-[セクション名]__body">
      <!-- コンテンツ -->
    </div>
  </div>
</section>
```

---

## アニメーション

- スクロールアニメーションはHTMLに`js-fadeIn`クラスを付与する
- js/main.jsのIntersectionObserverが自動で制御する
- KVのみ別途CSSアニメーションで実装する
- アニメーションは控えめに。過度な動きは使用しない

---

## コーディングルール

- SCSSの新規スタイルは必ず該当ファイルに記述する
- インラインスタイルは使用しない
- `!important`はutilityクラス以外では使用しない
- コメントはセクションの区切りに記述する
- 画像には必ずalt属性を設定する（装飾画像はalt=""）

---

## 画像フォルダ構成

```
img/
├── common/    ロゴ・アイコンなど共通素材
├── top/       トップページ用
├── service/   サービスページ用
└── about/     所長紹介ページ用
```

---

## ページ構成

| ファイル名   | ページ名     |
| ------------ | ------------ |
| index.html   | トップ       |
| service.html | サービス     |
| price.html   | 料金         |
| faq.html     | よくある質問 |
| about.html   | 所長紹介     |
| contact.html | お問い合わせ |

---

## style.scssのimport順序

新しいファイルを追加する際は必ずこの順番を守る。

```
1. foundation（_variable, _function, _mixin, _reset, _base）
2. layout（_header, _footer, _main）
3. object/component（_button, _card, _form）
4. object/project（ページ単位のファイル）
5. object/utility（_utility）
```

---

## デザイン参考画像

\_design/フォルダに各ページ・各セクションのスクリーンショットを格納している。
コーディング時は該当セクションの画像を参照すること。
