// 月次トピックスとカレンダー（日本語 ja / 英語 en / 簡体字中国語 zh）
// 毎月の更新手順は .claude/skills/tech-site-update/SKILL.md を参照
//
// issues   : 月ごとの号。新しい号を配列の先頭に追加する
//   topics : { id, kind, title, body, schools: [schools.js の id], sources: [{ name, url }] }
//            kind = "tuition" 学費 / "program" 新しい学部・コース / "admission" 入試 / "policy" 制度・施策
//   spotlight : 今月の注目校（schools.js の id）
// calendar : 締め切り・試験・イベント。start/end は "YYYY-MM-DD"。日付が未確定のものは approx: true と when を付ける
//            kind = "deadline" 出願 / "exam" 試験 / "event" イベント / "scholarship" 奨学金
window.NEWS = {
  issues: [
    {
      month: "2026-11",
      spotlight: ["pu-kumamoto", "tohoku-u"],
      topics: [
        {
          id: "2026-11-intl-tuition",
          kind: "tuition",
          schools: ["tohoku-u", "tsukuba"],
          title: {
            ja: "国立大学で留学生の授業料引き上げが相次ぐ（2027年4月入学から）",
            en: "National universities raise tuition for international students from April 2027",
            zh: "多所国立大学将上调留学生学费（2027年4月入学起）"
          },
          body: {
            ja: "東北大学は2027年4月以降に入学する外国人留学生（学士・修士）の授業料を年53万5,800円から90万円に、筑波大学は現行授業料に年7万3,000円を上乗せします。岡山大学は年133万9,500円とし、国立大学で最高額になります。いずれも在学中の学生は対象外で、増えた分は留学生向けの奨学金や生活支援の充実に充てるとしています。2027年に入学する人は、最新の金額を必ず確認しましょう。",
            en: "Tohoku University will raise annual tuition for international students entering bachelor's and master's programs from April 2027, from ¥535,800 to ¥900,000. The University of Tsukuba will add ¥73,000 a year to current tuition, and Okayama University will charge ¥1,339,500 — the highest among national universities. Current students are not affected, and the universities say the extra revenue will fund scholarships and support for international students. If you plan to enter in 2027, check the latest fees.",
            zh: "东北大学将把2027年4月以后入学的外国留学生（本科・硕士）学费从每年535,800日元上调至900,000日元；筑波大学将在现行学费基础上每年加收73,000日元；冈山大学定为每年1,339,500日元，为国立大学最高。在读学生均不受影响，增收部分将用于留学生奖学金和生活支援。计划2027年入学的同学请务必确认最新金额。"
          },
          sources: [
            { name: "東北大学", url: "https://www.tohoku.ac.jp/japanese/2025/12/news20251201-info.html" },
            { name: "筑波大学", url: "https://www.tsukuba.ac.jp/pressrelease/pdf/20251218160000-1.pdf" },
            { name: "岡山大学", url: "https://www.okayama-u.ac.jp/up_load_files/press_r8/press20260625-1.pdf" }
          ]
        },
        {
          id: "2026-11-tohoku-gateway",
          kind: "program",
          schools: ["tohoku-u"],
          title: {
            ja: "東北大学「ゲートウェイカレッジ」が2027年度に開設",
            en: "Tohoku University launches its English-centred Gateway College in 2027",
            zh: "东北大学“Gateway College”将于2027年度开设"
          },
          body: {
            ja: "授業は英語が中心で、日本人学生と留学生がほぼ半々で学ぶ新しい学士課程です。募集は4月入学88人・10月入学90人。10月入学は英語中心の選抜で、海外に住む人は来日せずに受験できる運用が予定されています。国籍による出願制限はありません。",
            en: "A new bachelor's program taught mainly in English, with roughly equal numbers of Japanese and international students. It will admit 88 students in April and 90 in October. The October intake uses English-based selection, and overseas applicants are expected to be able to apply without travelling to Japan. There are no nationality restrictions.",
            zh: "以英语授课为主、日本学生与留学生约各占一半的新本科课程。4月入学招收88人、10月入学招收90人。10月入学采用以英语为主的选拔，预计海外考生无需赴日即可参加。报名不受国籍限制。"
          },
          sources: [
            { name: "東北大学ゲートウェイカレッジ", url: "https://tu-gwc.tohoku.ac.jp/" }
          ]
        },
        {
          id: "2026-11-kumamoto-semi",
          kind: "program",
          schools: ["pu-kumamoto"],
          title: {
            ja: "熊本県立大学に「半導体学部」 2027年4月開設が決定",
            en: "Prefectural University of Kumamoto to open a Faculty of Semiconductors in April 2027",
            zh: "熊本县立大学“半导体学部”确定于2027年4月开设"
          },
          body: {
            ja: "2026年9月に文部科学大臣の設置認可を受けました。定員は1学年60人。2年生までに自分で半導体チップを設計する技術を身につけ、その後「AI・応用情報」「マイクロエレクトロニクス」「スマートマテリアル」の3つのモデルから専門を深めます。半導体企業でのインターンシップもあります。授業は日本語です。",
            en: "Approved by Japan's education minister in September 2026, with 60 students per year. Students learn to design their own semiconductor chips by year two, then specialise in AI & applied informatics, microelectronics or smart materials. Internships at semiconductor companies are offered. Classes are in Japanese.",
            zh: "已于2026年9月获得文部科学大臣设置认可，每届招收60人。学生在二年级前掌握自行设计半导体芯片的技术，之后从“AI・应用信息”“微电子”“智能材料”三个方向深入学习，并可在半导体企业实习。以日语授课。"
          },
          sources: [
            { name: "熊本県", url: "https://www.pref.kumamoto.jp/uploaded/attachment/318276.pdf" },
            { name: "熊本県立大学", url: "https://semi.pu-kumamoto.ac.jp/" }
          ]
        },
        {
          id: "2026-11-utokyo-cod",
          kind: "admission",
          schools: ["utokyo"],
          title: {
            ja: "東京大学 College of Design、第1期生の出願は11月5日まで",
            en: "UTokyo College of Design: first-cohort applications close on 5 November",
            zh: "东京大学College of Design首届报名截至11月5日"
          },
          body: {
            ja: "2027年9月に始まる、授業がすべて英語の5年制課程（学士＋修士）です。募集は約100人で、半数ほどが留学生の予定。出願期間は2026年10月15日〜11月5日（日本時間17時）です。",
            en: "The fully English-taught, five-year program (bachelor's + master's) starts in September 2027. About 100 students will be admitted, around half from overseas. Applications run from 15 October to 5 November 2026 (5 p.m. JST).",
            zh: "2027年9月开课的全英文五年制课程（本科＋硕士），招收约100人，其中约一半为留学生。报名时间为2026年10月15日至11月5日（日本时间17时）。"
          },
          sources: [
            { name: "リセマム", url: "https://resemom.jp/article/2026/09/17/87581.html" }
          ]
        }
      ]
    }
  ],

  calendar: [
    {
      start: "2026-11-05", kind: "deadline", url: "https://resemom.jp/article/2026/09/17/87581.html",
      title: { ja: "東京大学 College of Design 出願締切（17時）", en: "UTokyo College of Design application deadline (5 p.m. JST)", zh: "东京大学College of Design报名截止（17时）" }
    },
    {
      start: "2026-11-08", kind: "exam", url: "https://www.jasso.go.jp/ryugaku/eju/about/eju_guide/2026.html",
      title: { ja: "日本留学試験（EJU）2026年度第2回（日本国内のみ）", en: "EJU 2026 2nd session (in Japan only)", zh: "日本留学考试（EJU）2026年度第2次（仅限日本国内）" }
    },
    {
      start: "2026-11-09", end: "2026-11-13", kind: "deadline", url: "https://semi.pu-kumamoto.ac.jp/",
      title: { ja: "熊本県立大学 半導体学部 学校推薦型選抜 出願（熊本県内の高校が対象）", en: "Pref. Univ. of Kumamoto, Faculty of Semiconductors: school-recommendation applications (Kumamoto high schools)", zh: "熊本县立大学半导体学部 学校推荐型选拔报名（面向熊本县内高中）" }
    },
    {
      start: "2026-11-21", end: "2026-11-22", kind: "event", url: "https://www.studyinjapan.go.jp/ja/events/",
      title: { ja: "日本留学フェア（インドネシア：21日スラバヤ・22日ジャカルタ）", en: "Japan Education Fair (Indonesia: Surabaya 21st, Jakarta 22nd)", zh: "日本留学展（印度尼西亚：21日泗水・22日雅加达）" }
    },
    {
      start: "2027-01-25", end: "2027-02-03", kind: "deadline", url: "https://semi.pu-kumamoto.ac.jp/",
      title: { ja: "熊本県立大学 半導体学部 一般選抜 出願", en: "Pref. Univ. of Kumamoto, Faculty of Semiconductors: general admission applications", zh: "熊本县立大学半导体学部 一般选拔报名" }
    },
    {
      start: "2027-02-15", end: "2027-03-15", approx: true, kind: "exam", url: "https://www.jasso.go.jp/ryugaku/eju/",
      when: { ja: "2027年2月中旬〜3月中旬（例年）", en: "Mid-Feb to mid-Mar 2027 (usual timing)", zh: "2027年2月中旬〜3月中旬（往年）" },
      title: { ja: "日本留学試験（EJU）2027年度第1回（6月実施）の出願", en: "Applications for EJU 2027 1st session (held in June)", zh: "日本留学考试（EJU）2027年度第1次（6月举行）报名" }
    },
    {
      start: "2027-04-01", end: "2027-06-30", approx: true, kind: "scholarship", url: "https://www.studyinjapan.go.jp/en/smap-stopj-applications-undergraduate.html",
      when: { ja: "2027年4〜6月ごろ（国ごとに異なる）", en: "Around Apr–Jun 2027 (varies by country)", zh: "2027年4〜6月前后（因国家而异）" },
      title: { ja: "国費留学生（文部科学省奨学金・大使館推薦）2028年入学分の募集", en: "MEXT Scholarship (Embassy Recommendation) for 2028 entry", zh: "日本政府（文部科学省）奖学金（使馆推荐）2028年入学批次招募" }
    }
  ]
};
