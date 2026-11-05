---
name: tech-site-update
description: 技術系の学校ガイドサイト「Tech Campus Japan」（日本語・英語・簡体字中国語、GitHub Pagesで公開中）の月次更新・公開手順と、Threadsでの週次発信の手順。「Tech Campus Japan を更新して」「学校サイトの今月号を作って」「学校を追加して」「学費を見直して」「学校サイトのSNS投稿を作って」などの依頼のときに使う。
---

# Tech Campus Japan 更新手順

対象リポジトリ：`C:\Users\firef\tech-school-guide`（GitHub: fireworksec1010-ux/ai-education-labo、公開）
公開サイト：https://fireworksec1010-ux.github.io/ai-education-labo/

## 基本方針
- ビルド不要の静的サイト。データは `data/*.js`（JSONと同じ形で `window.○○ = {...}` に入れている。Python/Nodeが無いPCでもダブルクリックで開けるようにするため）。
- **3言語（ja / en / zh＝簡体字）を必ずそろえる。** 訳抜けは `tools/check.html` で検出できる。
- 数字・日付は推測で書かない。公式資料（大学・文部科学省・JASSO・自治体）で確認できたものだけ載せ、出典URLを付ける。確認できないものは「公式サイトで確認」とする。
- 予定・例年の時期は `approx: true` と `when` で「目安」と明記する。
- 公開前に必ずプレビューを見せ、ユーザーの「pushして」を待つ（月次更新でも同じ。食品サイトのような自動pushの合意はまだない）。

## 月次更新（毎月1回）

### A. 今月のトピックス（`data/news.js` の `issues`）
- 新しい号を `issues` 配列の**先頭**に追加（`month: "YYYY-MM"`）。過去の号は消さない（ページ下部に「過去の号」として出る）。
- 3〜5本。テーマ：新しい学部・コース（特に英語で学べるもの）、学費改定、入試日程、半導体・AI人材の施策など。
- 各トピックに `kind`（tuition / program / admission / policy）、関連校 `schools`（schools.js の id）、出典 `sources` を付ける。
- 本文は2〜4文。留学生が「自分に関係あるか」判断できるよう、対象・時期・金額を具体的に。

### B. カレンダー（`data/news.js` の `calendar`）
- 今後2〜3か月の出願締切・EJU・日本留学フェア・奨学金募集を追加。終わった予定は自動で「終了」表示になるので、2〜3か月たったら削除してよい。
- 主な情報源：EJU日程 https://www.jasso.go.jp/ryugaku/eju/ 、日本留学フェア https://www.studyinjapan.go.jp/ja/events/ 、国費留学生 https://www.studyinjapan.go.jp/en/smap-stopj-applications-undergraduate.html 、各校の募集要項。

### C. 今月の注目校（`spotlight`）
- 1〜2校。可能なら毎月1校を新規追加して掲載校を増やす。
- 新規追加は `data/schools.js` と `data/study-info.js` の両方に同じ id で1件ずつ（項目の意味は各ファイル冒頭のコメント）。

### E. 展示会（`data/expos.js`）
- 毎月、終わった展示会の次回会期が発表されていないか確認し、発表されたら日付を差し替えて `approx` を外す。「目安」のものも公式発表が出たら確定日に直す。
- 新しい大型展（AI・フィジカルAI・ロボット・宇宙・半導体）が発表されたら追加。会期は主催者か業界メディアで確認できたものだけ載せる。
- 展示会はSNSの第4週ネタ（「来月の注目展示会」）にも使える。

### D. 掲載情報の点検（毎月8校ずつ、4か月で一巡）
- 学費・英語コース・寮を各校公式で確認し、変わっていれば `study-info.js` を直し、`schools.js` の `checked` を当月にする。
- その月のトピックスで扱った学校（学費改定など）は必ず反映する。
- 点検した学校名は報告に含める。

### 仕上げ
1. `tools/check.html` をヘッドレスChromeで開き「OK」を確認：
   `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --allow-file-access-from-files --dump-dom "file:///C:/Users/firef/tech-school-guide/tools/check.html"`
2. `news.html` とトップページを日英中・パソコン／スマホ幅（iframe 390px）で撮影して確認。
3. `data/i18n.js` の `window.DATA_DATE` を当月に更新。
4. ユーザーにプレビューを見せる → 「pushして」で commit・push → 公開URLが200で開くことを確認。

## SNS週次発信（Threads・英語）
- アカウントは食品・空手と共通の「Tom | Japan Labo」。**英語で投稿**し、リンクは英語版（`?lang=en`）にする。
- Metricool経由で予約。まずは `createScheduledPostForReview`（レビュー待ち）で作り、ユーザーが確認してから公開。曜日は食品・空手と重ならないよう固定（学校＝火曜を基本、時間は `getBestTimeToPostByNetwork` で決める）。
- 毎月4週のローテーション：
  1. 第1週：今月のトピックスから1本 → `news.html?lang=en#<topic id>`
  2. 第2週：注目校紹介（英語で卒業できるか・学費・寮を3行で）→ `school.html?id=<id>&lang=en`
  3. 第3週：留学生活の豆知識（アルバイト週28時間、初期費用、就活の時期など）→ `guide.html?lang=en`
  4. 第4週：締め切りリマインドかデータ（例：学部を英語だけで卒業できる13大学）→ `news.html?lang=en#calendar` か トップ
- 投稿文は500字以内、ハッシュタグは1〜3個（#StudyInJapan など）。事実は必ずサイト掲載内容と一致させる。
