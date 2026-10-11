// 留学生向け情報（学費・奨学金・寮・英語で卒業できるか）
// 学費は毎年変わるため schools.js とは分けて管理。キーは schools.js の id。
//
// english : "undergrad" 学部（高専）を英語だけで卒業できる
//           "grad"      大学院なら英語だけで修了できる
//           "partial"   一部の授業・専門科目を英語で学べる
//           "none"      授業は日本語
// tuition : 年間の学費の目安（円）。授業料＋毎年かかる施設費・諸会費。入学金・寮費は含まない。不明は null
// scholarship : "univ" / "kosen" / "high" は i18n.js の共通文。学校独自の説明は { ja, en, zh }
// dorm    : "yes" 寮あり / "no" 寮なし / "check" 公式サイトで要確認
window.STUDY_INFO = {
  "utokyo": {
    english: "undergrad", tuition: 642960,
    englishNote: {
      ja: "PEAK（英語学位プログラム）は2026年秋入学で新規募集を終了。2027年9月開設予定の「College of Design」はすべて英語・5年制（学士＋修士）で、約100人のうち半数が留学生。大学院は英語で修了できるコースが多数。",
      en: "PEAK (English-taught degree program) takes its last intake in autumn 2026. The UTokyo College of Design, opening Sept. 2027, is fully English-taught, five years (bachelor's + master's), with about half of its ~100 students from abroad. Many graduate courses can be completed in English.",
      zh: "英文学位项目PEAK于2026年秋季入学后停止招生。计划2027年9月开设的“College of Design”为全英文五年制（本科＋硕士），约100名学生中一半为留学生。研究生阶段有大量可全英文完成的课程。"
    },
    tuitionNote: {
      ja: "学部の標準授業料。College of Design の学費は募集要項で確認してください。",
      en: "Standard undergraduate tuition. Check the admissions guide for College of Design fees.",
      zh: "本科标准学费。College of Design的学费请查看招生简章。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "kyoto-u": {
    english: "grad", tuition: 535800,
    englishNote: {
      ja: "学部の留学生向けプログラム「Kyoto iUP」は、最初に日本語を集中して学び、その後は日本語で授業を受ける形式。情報学研究科などの大学院には英語だけで修了できるコースあり。",
      en: "Kyoto iUP, the undergraduate program for international students, starts with intensive Japanese and then moves to Japanese-taught classes. Graduate schools such as Informatics offer courses completed fully in English.",
      zh: "面向留学生的本科项目“Kyoto iUP”先集中学习日语，之后用日语上课。信息学研究科等研究生院设有可全英文完成的课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "science-tokyo": {
    english: "undergrad", tuition: 635400,
    englishNote: {
      ja: "学士課程「GSEP」は日本語力不要で、理工系の学位を英語だけで取得可能。大学院にも英語で修了できるコースが多数。",
      en: "The GSEP bachelor's program requires no Japanese and awards a science/engineering degree entirely in English. Many graduate courses are also English-only.",
      zh: "本科项目“GSEP”无需日语能力，可全英文取得理工科学位。研究生阶段也有大量全英文课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "tohoku-u": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "「FGL」の機械・航空宇宙工学コース（IMAC-U）では、ロボティクスなどを含む工学の学位を英語だけで取得可能。日本語力は不要（TOEFL iBT 79／IELTS 6.0以上など）。",
      en: "The FGL program's International Mechanical and Aerospace Engineering course (IMAC-U) awards an engineering degree — including robotics — fully in English. No Japanese required (e.g. TOEFL iBT 79 / IELTS 6.0+).",
      zh: "“FGL”项目的机械・航空宇宙工学课程（IMAC-U）可全英文取得包括机器人学在内的工学学位，无需日语（需TOEFL iBT 79／IELTS 6.0以上等）。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "osaka-u": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "学部の英語プログラムは化学・生物系が中心。情報科学・ロボット分野は大学院で英語だけで修了できるコースあり。",
      en: "English-taught undergraduate programs focus on chemistry and biology. For information science and robotics, English-only courses are available at graduate level.",
      zh: "本科英文项目以化学・生物方向为主。信息科学、机器人领域在研究生阶段设有全英文课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "nagoya-u": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "「G30」プログラムで、自動車工学・物理系などの学位を英語だけで取得可能。大学院にも英語コースあり。",
      en: "The G30 program offers degrees fully in English in fields such as Automotive Engineering and physical sciences, plus English-taught graduate courses.",
      zh: "通过“G30”项目，可全英文取得汽车工学、物理等方向的学位。研究生阶段也有英文课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "kyushu-u": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "工学部の「IUPE」で、工学の学位を英語だけで取得可能。大学院にも英語コースあり。",
      en: "The International Undergraduate Program in Engineering (IUPE) awards an engineering degree fully in English. English-taught graduate courses also available.",
      zh: "工学部的“IUPE”项目可全英文取得工学学位。研究生阶段也有英文课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "hokudai": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "留学生専用の「ISP」は学士＋修士の5年制で、物理・化学・生物を中心に英語だけで学べる。情報系は大学院の英語コースで。",
      en: "The Integrated Science Program (ISP), for international students only, is a five-year bachelor's + master's track taught in English, centred on physics, chemistry and biology. For computing, see English-taught graduate courses.",
      zh: "留学生专属的“ISP”为本科＋硕士五年制，以物理、化学、生物为中心全英文授课。信息方向可选择研究生英文课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "tsukuba": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "学部の「学際工学（Interdisciplinary Engineering）」プログラムで、理工系を英語だけで学べる。英語で行う授業が非常に多く、大学院にも英語コース多数。",
      en: "The Bachelor's Program in Interdisciplinary Engineering is taught in English. The university offers a very large number of English classes and many English-taught graduate programs.",
      zh: "本科“跨学科工学（Interdisciplinary Engineering）”项目可全英文学习理工科。英文授课数量众多，研究生阶段也有大量英文课程。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "uec": {
    english: "grad", tuition: 535800,
    englishNote: {
      ja: "学部の授業は日本語。大学院には英語だけで修了できるプログラムあり。",
      en: "Undergraduate classes are in Japanese. Some graduate programs can be completed entirely in English.",
      zh: "本科以日语授课。研究生阶段设有可全英文完成的项目。"
    },
    tuitionNote: {
      ja: "2027年度入学者から年642,960円に改定予定。",
      en: "Scheduled to rise to ¥642,960/yr for students entering from 2027.",
      zh: "计划自2027年度入学者起调整为每年642,960日元。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "u-aizu": {
    english: "undergrad", tuition: 535800,
    englishNote: {
      ja: "「ICT Global Program」でコンピュータ理工学の学位を英語だけで取得可能。教員の多くが海外出身。",
      en: "The ICT Global Program awards a computer science degree fully in English. Many faculty members are from overseas.",
      zh: "通过“ICT Global Program”可全英文取得计算机理工学位。许多教师来自海外。"
    },
    tuitionNote: {
      ja: "公立大学のため、入学金は福島県内出身者とそれ以外で異なります。",
      en: "As a public university, the admission fee differs for Fukushima residents and others.",
      zh: "作为公立大学，入学金因是否为福岛县内生源而不同。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "fun": {
    english: "none", tuition: 535800,
    englishNote: {
      ja: "授業は日本語。入学には十分な日本語力が必要。",
      en: "Classes are in Japanese; strong Japanese skills are required.",
      zh: "以日语授课，入学需具备较高的日语能力。"
    },
    scholarship: "univ", dorm: "check"
  },
  "waseda": {
    english: "undergrad", tuition: 1647000,
    englishNote: {
      ja: "基幹・創造・先進理工学部に、英語だけで学位が取れるプログラム（English-based Undergraduate Program）あり。",
      en: "The three science and engineering schools offer English-based Undergraduate Programs, with degrees earned entirely in English.",
      zh: "基干、创造、先进理工三个学部设有可全英文取得学位的项目（English-based Undergraduate Program）。"
    },
    tuitionNote: {
      ja: "基幹理工学部の授業料＋諸費用（2026年度）。入学金20万円は別。",
      en: "School of Fundamental Science and Engineering, tuition + fees (2026). Admission fee ¥200,000 extra.",
      zh: "基干理工学部学费＋杂费（2026年度）。入学金20万日元另计。"
    },
    scholarship: {
      ja: "国費・JASSO学習奨励費のほか、留学生向けの大学独自奨学金が充実。",
      en: "Government (MEXT) and JASSO scholarships, plus a wide range of Waseda scholarships for international students.",
      zh: "除国费、JASSO学习奖励费外，还有丰富的校内留学生奖学金。"
    },
    dorm: "yes"
  },
  "keio": {
    english: "undergrad", tuition: 1893350,
    englishNote: {
      ja: "湘南藤沢キャンパスの「GIGA」プログラムで、情報・テクノロジー系を含む学位を英語だけで取得可能。理工学部の学部授業は主に日本語。",
      en: "The GIGA Program at Shonan Fujisawa Campus awards degrees — including technology fields — fully in English. Undergraduate classes in the Faculty of Science and Technology are mainly in Japanese.",
      zh: "湘南藤泽校区的“GIGA”项目可全英文取得包括信息技术方向在内的学位。理工学部本科主要以日语授课。"
    },
    tuitionNote: {
      ja: "理工学部の初年度納入金から入学金を除いた額。環境情報学部（GIGA）は約158万円。",
      en: "Faculty of Science and Technology, first-year fees minus admission fee. Environment and Information Studies (GIGA): approx. ¥1.58M.",
      zh: "理工学部首年缴纳金额减去入学金。环境信息学部（GIGA）约158万日元。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "ritsumei": {
    english: "undergrad", tuition: 1794600,
    englishNote: {
      ja: "情報理工学部の「Information Systems Science and Engineering Course」で、情報系の学位を英語だけで取得可能。",
      en: "The Information Systems Science and Engineering Course in the College of Information Science and Engineering awards a computing degree fully in English.",
      zh: "信息理工学部的“Information Systems Science and Engineering Course”可全英文取得信息类学位。"
    },
    tuitionNote: {
      ja: "情報理工学部の授業料＋諸会費（2026年度）。入学金20万円は別。",
      en: "College of Information Science and Engineering, tuition + fees (2026). Admission fee ¥200,000 extra.",
      zh: "信息理工学部学费＋杂费（2026年度）。入学金20万日元另计。"
    },
    scholarship: {
      ja: "国費・JASSO学習奨励費など。留学生向け授業料減免（20〜100%）は2026年度で終了予定で、2027年度以降は未定。",
      en: "MEXT, JASSO and others. The tuition reduction for international students (20–100%) is scheduled to end after 2026; plans from 2027 are undecided.",
      zh: "国费、JASSO学习奖励费等。留学生学费减免（20〜100%）预计于2026年度结束，2027年度以后尚未确定。"
    },
    dorm: "yes"
  },
  "chibatech": {
    english: "none", tuition: 1424500,
    englishNote: {
      ja: "授業は日本語。",
      en: "Classes are in Japanese.",
      zh: "以日语授课。"
    },
    tuitionNote: {
      ja: "授業料＋諸会費（2026年度）。入学金25万円は別。",
      en: "Tuition + fees (2026). Admission fee ¥250,000 extra.",
      zh: "学费＋杂费（2026年度）。入学金25万日元另计。"
    },
    scholarship: "univ", dorm: "check"
  },
  "shibaura": {
    english: "undergrad", tuition: 1515020,
    englishNote: {
      ja: "工学部「先進国際課程（IGP）」は授業がすべて英語の4年制で、1年生から研究室で研究。定員は少人数（年9人程度）。",
      en: "The Innovative Global Program (IGP) in the College of Engineering is a four-year, fully English-taught degree with lab research from year one. Very small intake (about 9 students a year).",
      zh: "工学部“先进国际课程（IGP）”为全英文四年制，一年级起即进入研究室。招生人数很少（每年约9人）。"
    },
    tuitionNote: {
      ja: "工学部の授業料＋施設・教育充実費等＋諸会費（2026年度）。入学金28万円は別。",
      en: "College of Engineering, tuition + facility fees + other fees (2026). Admission fee ¥280,000 extra.",
      zh: "工学部学费＋设施・教育充实费等＋杂费（2026年度）。入学金28万日元另计。"
    },
    scholarship: "univ", dorm: "check"
  },
  "dendai": {
    english: "none", tuition: 1463160,
    englishNote: {
      ja: "授業は日本語。",
      en: "Classes are in Japanese.",
      zh: "以日语授课。"
    },
    tuitionNote: {
      ja: "未来科学部ロボット・メカトロニクス学科の授業料＋諸会費（2026年度）。入学金25万円は別。",
      en: "Robotics and Mechatronics, tuition + fees (2026). Admission fee ¥250,000 extra.",
      zh: "未来科学部机器人・机电一体化学科学费＋杂费（2026年度）。入学金25万日元另计。"
    },
    scholarship: "univ", dorm: "check"
  },
  "kyutech": {
    english: "grad", tuition: 535800,
    englishNote: {
      ja: "学部の授業は日本語。大学院には英語だけで修了できるプログラムあり。",
      en: "Undergraduate classes are in Japanese. Some graduate programs can be completed entirely in English.",
      zh: "本科以日语授课。研究生阶段设有可全英文完成的项目。"
    },
    scholarship: "univ", dorm: "yes"
  },
  "toyota-ti": {
    english: "none", tuition: 600000,
    englishNote: {
      ja: "授業は日本語（米国シカゴ校との交流あり）。",
      en: "Classes are in Japanese (exchange with the Chicago institute).",
      zh: "以日语授课（与芝加哥校区有交流）。"
    },
    tuitionNote: {
      ja: "私立ながら授業料は年60万円と国立並み。",
      en: "Although private, tuition is ¥600,000/yr — similar to national universities.",
      zh: "虽为私立，学费为每年60万日元，与国立大学相当。"
    },
    scholarship: {
      ja: "希望者全員が使える無利子の大学独自奨学金あり。",
      en: "An interest-free university loan scholarship is available to all who apply.",
      zh: "设有所有申请者均可使用的无息校内奖学金。"
    },
    dorm: "yes",
    dormNote: { ja: "1年生は全員が寮生活。", en: "All first-year students live in the dormitory.", zh: "一年级学生全员住校。" }
  },
  "oist": {
    english: "grad", tuition: 0,
    englishNote: {
      ja: "教育・研究はすべて英語。日本語力は不要。",
      en: "All teaching and research are in English. No Japanese required.",
      zh: "教学与研究全部使用英语，无需日语能力。"
    },
    tuitionNote: {
      ja: "授業料（年54万円）は研究助手としての給与から全額支援。さらに年250万円以上の生活支援あり。",
      en: "Tuition (¥540,000/yr) is fully covered through the research assistantship, which also provides ¥2.5M+ per year for living costs.",
      zh: "学费（每年54万日元）由研究助理薪酬全额支付，另有每年250万日元以上的生活支持。"
    },
    scholarship: {
      ja: "合格者全員に研究助手としての給与・住居支援あり。",
      en: "All admitted students receive a research assistantship and housing support.",
      zh: "所有录取学生均可获得研究助理薪酬及住房支持。"
    },
    dorm: "yes"
  },

  // ===== 高専 =====
  "tokyo-ct":    { english: "none", englishNote: "kosenTransfer", tuition: 234600, scholarship: "kosen", dorm: "yes" },
  "sendai-ct":   { english: "none", englishNote: "kosenTransfer", tuition: 234600, scholarship: "kosen", dorm: "yes" },
  "nagaoka-ct":  { english: "none", englishNote: "kosenTransfer", tuition: 234600, scholarship: "kosen", dorm: "yes" },
  "kumamoto-ct": { english: "none", englishNote: "kosenTransfer", tuition: 234600, scholarship: "kosen", dorm: "yes" },
  "ict-kanazawa": {
    english: "partial", tuition: null,
    englishNote: {
      ja: "専門科目の多くを英語で学び、3年生は全員がニュージーランドに1年間留学。4・5年生は金沢工業大学のキャンパスで学ぶ。",
      en: "Most engineering subjects are taught in English, and all 3rd-year students spend a year in New Zealand. Years 4–5 study on the Kanazawa Institute of Technology campus.",
      zh: "大部分专业课程使用英语授课，三年级全员赴新西兰留学一年。四、五年级在金泽工业大学校区学习。"
    },
    tuitionNote: {
      ja: "学費・寮費は公式サイトで確認してください。",
      en: "Check the official website for tuition and dormitory fees.",
      zh: "学费及住宿费请查看官方网站。"
    },
    scholarship: {
      ja: "学校独自の奨学金制度は公式サイトで確認してください。",
      en: "Check the official website for the college's own scholarships.",
      zh: "校内奖学金制度请查看官方网站。"
    },
    dorm: "yes",
    dormNote: { ja: "1・2年生は白山麓キャンパスで全寮制。", en: "Years 1–2 live on the residential Hakusanroku campus.", zh: "一、二年级在白山麓校区全寄宿。" }
  },
  "kamiyama": {
    english: "none", tuition: 0,
    tuitionNote: {
      ja: "企業の出資による奨学金基金で、授業料は実質無償。寮費などは公式サイトで確認してください。",
      en: "A company-backed scholarship fund makes tuition effectively free. Check the official website for dormitory and other costs.",
      zh: "通过企业出资的奖学金基金，学费实质免费。住宿费等请查看官方网站。"
    },
    scholarship: {
      ja: "ソニーグループ・ソフトバンクなどが出資する奨学金基金で全員の授業料をまかなう。",
      en: "A scholarship fund backed by Sony Group, SoftBank and others covers tuition for all students.",
      zh: "由索尼集团、软银等出资的奖学金基金承担全体学生的学费。"
    },
    dorm: "yes",
    dormNote: { ja: "全寮制。", en: "Fully residential.", zh: "全寄宿制。" }
  },

  // ===== 高校 =====
  "n-high": {
    english: "none", tuition: 296000,
    tuitionNote: {
      ja: "ネットコースの目安（履修単位数で変動）。国の就学支援金で負担が軽くなります。通学コースは別料金。",
      en: "Approximate cost for the online course (varies by credits). Government tuition support reduces the burden. Campus courses cost extra.",
      zh: "网络课程参考费用（随学分数变动），可通过国家就学支援金减轻负担。到校课程另行收费。"
    },
    scholarship: "high", dorm: "no"
  },
  "kagaku-gijutsu": { english: "none", tuition: 0, tuitionNote: "publicHigh", scholarship: "high", dorm: "no" },
  "tama-kagaku":    { english: "none", tuition: 0, tuitionNote: "publicHigh", scholarship: "high", dorm: "no" },
  "seto-koka":      { english: "none", tuition: 0, tuitionNote: "publicHigh", scholarship: "high", dorm: "no" },
  "higashiyodo":    { english: "none", tuition: 0, tuitionNote: "publicHigh", scholarship: "high", dorm: "no" }
};
