# Tech Campus Japan

プログラミング・AI・フィジカルAI（ロボット）・半導体などを学べる日本の大学・高専・高校を、日本語 / English / 简体中文 で紹介する静的サイト（GitHub Pages）。

## ファイル構成
| ファイル | 内容 |
|---|---|
| `index.html` | 一覧ページ（検索・絞り込み） |
| `school.html` | 学校詳細ページ（`school.html?id=utokyo&lang=en` のように表示） |
| `guide.html` | 留学生活ガイド・就職活動ガイド（`guide.html#job` で就職活動へ） |
| `contact.html` | お問い合わせ（宛先は `data/i18n.js` の `CONTACT_EMAIL`） |
| `data/schools.js` | **学校データ**（名前・学部・紹介文など） |
| `data/study-info.js` | **留学生向け情報**（学費・奨学金・寮・英語で卒業できるか）。学費は毎年見直す |
| `data/guide.js` | 留学生活ガイドの本文（3言語） |
| `data/i18n.js` | 画面の固定文言（3言語）と情報確認日 `DATA_DATE` |
| `assets/app.js` / `assets/style.css` | 表示処理とデザイン |
| `tools/check.html` | データ点検ページ（ブラウザで開くと欠けている訳などを表示） |

ビルドやサーバーは不要。`index.html` をダブルクリックすればブラウザで確認できます。

## 学校を追加・更新する
`data/schools.js` の配列に1件追加します。各項目：

- `id` … URL用の英数字（重複不可）
- `type` … `univ-national` 国立大 / `univ-public` 公立大 / `univ-private` 私立大 / `univ-grad` 大学院大学 / `kosen` 高専 / `high` 高校
- `region` … `hokkaido-tohoku` / `kanto` / `chubu` / `kinki` / `chugoku-shikoku` / `kyushu-okinawa` / `online`
- `fields` … `prog` プログラミング / `ai` AI / `robot` ロボット・フィジカルAI / `semi` 半導体 / `security` セキュリティ / `space` 宇宙 / `design` デザイン / `startup` 起業
- `english` … 英語で学べるコースがあれば `true`
- `url` … 公式サイト、`checked` … 情報確認年月（例 `"2026-10"`）
- `name` `pref` `programs` `desc` `englishNote` … それぞれ `{ ja, en, zh }` の3言語（中国語は簡体字）

あわせて `data/study-info.js` に同じ `id` で留学生向け情報を1件追加します（項目の意味はファイル冒頭のコメント参照）。

追加後は `tools/check.html` を開き、「MISSING」などのエラーが出ないことを確認してから公開します。
