// AI・フィジカルAI（ロボット）・宇宙・半導体の大きな展示会（日本語 ja / 英語 en / 簡体字中国語 zh）
// fields : schools.js と同じ分野キー（ai / robot / space / semi / startup など）
// start/end : "YYYY-MM-DD"。公式発表前のものは approx: true と when（例年の時期）を付ける
// 終わった展示会は自動で「終了」表示になる。翌年の会期が出たら差し替える
window.EXPOS = [
  {
    id: "nextech-2026-autumn",
    fields: ["ai", "robot"],
    start: "2026-11-11", end: "2026-11-13",
    url: "https://www.nextech-week.jp/",
    name: { ja: "NexTech Week 2026【秋】（AI・人工知能EXPO／フィジカルAI EXPO ほか）", en: "NexTech Week 2026 Autumn (AI EXPO / Physical AI EXPO and more)", zh: "NexTech Week 2026【秋】（AI・人工智能EXPO／物理AI EXPO 等）" },
    venue: { ja: "幕張メッセ（千葉）", en: "Makuhari Messe (Chiba)", zh: "幕张展览馆（千叶）" },
    desc: {
      ja: "生成AI・AIエージェントなどの最新技術が集まるAIの専門展。この秋の回では、AIをロボットや機械で現場に生かす「フィジカルAI EXPO」が初めて開かれます。",
      en: "A specialist AI show covering generative AI, AI agents and more. This autumn edition launches the first Physical AI EXPO, focused on putting AI to work in robots and machines.",
      zh: "汇集生成式AI、AI智能体等最新技术的AI专业展。本届秋季展首次举办将AI应用于机器人和设备的“物理AI EXPO”。"
    }
  },
  {
    id: "semicon-2026",
    fields: ["semi"],
    start: "2026-12-09", end: "2026-12-11",
    url: "https://www.semiconjapan.org/",
    name: { ja: "SEMICON Japan 2026", en: "SEMICON Japan 2026", zh: "SEMICON Japan 2026" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "半導体の製造装置・材料・設計の国際展示会で、今回が第50回。入場は無料（事前登録制）です。",
      en: "The international exhibition for semiconductor manufacturing equipment, materials and design — its 50th edition. Free entry with advance registration.",
      zh: "半导体制造设备、材料与设计领域的国际展会，本届为第50届。免费入场（需提前登记）。"
    }
  },
  {
    id: "isiex-2027",
    fields: ["space"],
    start: "2027-03-17", end: "2027-03-19",
    url: "https://biz.nikkan.co.jp/eve/isiex/",
    name: { ja: "2027国際宇宙産業展 ISIEX", en: "International Space Industry Exhibition (ISIEX) 2027", zh: "2027国际宇宙产业展 ISIEX" },
    venue: { ja: "東京ビッグサイト 東7・8ホール（東京）", en: "Tokyo Big Sight, East Halls 7–8 (Tokyo)", zh: "东京国际展览中心 东7・8馆（东京）" },
    desc: {
      ja: "人工衛星・ロケットの部品から宇宙データの利用まで、宇宙産業の技術が集まる展示会（主催：日刊工業新聞社）。前回は122社・団体が出展しました。",
      en: "Covers the space industry from satellite and rocket components to the use of space data (organised by Nikkan Kogyo Shimbun). 122 companies and organisations exhibited last time.",
      zh: "从人造卫星、火箭零部件到太空数据应用，汇集航天产业技术的展会（主办：日刊工业新闻社）。上届有122家企业・团体参展。"
    }
  },
  {
    id: "nextech-2027-spring",
    fields: ["ai", "robot"],
    start: "2027-04-21", end: "2027-04-23",
    url: "https://www.nextech-week.jp/",
    name: { ja: "NexTech Week 2027【春】（AI・人工知能EXPO／フィジカルAI EXPO／ヒューマノイドロボットEXPO ほか）", en: "NexTech Week 2027 Spring (AI EXPO / Physical AI EXPO / Humanoid Robot EXPO and more)", zh: "NexTech Week 2027【春】（AI・人工智能EXPO／物理AI EXPO／人形机器人EXPO 等）" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "日本最大級のAI展示会の春の回。AIに加えて、フィジカルAI・人型ロボット・量子コンピューターの専門展も同時に開かれます。入場は無料です。",
      en: "The spring edition of one of Japan's largest AI shows. Alongside AI, it hosts dedicated shows for physical AI, humanoid robots and quantum computing. Free entry.",
      zh: "日本规模最大的AI展会之一的春季展。除AI外，还同时举办物理AI、人形机器人和量子计算专业展。免费入场。"
    }
  },
  {
    id: "spexa-2027",
    fields: ["space"],
    start: "2027-05-12", end: "2027-05-14",
    url: "https://www.spexa.jp/",
    name: { ja: "SPEXA 2027 宇宙ビジネス展", en: "SPEXA 2027 — Space Business Expo", zh: "SPEXA 2027 宇宙商业展" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "ロケット・衛星・宇宙データなど、宇宙ビジネスの専門展。2026年は322社が出展し、約1万6,000人が来場しました。来場登録は無料です。",
      en: "A specialist expo for the space business — rockets, satellites, space data and more. In 2026, 322 companies exhibited and about 16,000 people attended. Visitor registration is free.",
      zh: "涵盖火箭、卫星、太空数据等的宇宙商业专业展。2026年有322家企业参展，约1.6万人到场。参观登记免费。"
    }
  },
  {
    id: "sushitech-2027",
    fields: ["ai", "robot", "startup"],
    start: "2027-05-20", end: "2027-05-22",
    url: "https://sushitech-startup.metro.tokyo.lg.jp/",
    name: { ja: "SusHi Tech Tokyo 2027", en: "SusHi Tech Tokyo 2027", zh: "SusHi Tech Tokyo 2027" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "東京都が主催する、スタートアップとイノベーションの国際イベント（5回目）。AI・ロボット・宇宙など世界のスタートアップが集まります。",
      en: "An international startup and innovation event hosted by the Tokyo Metropolitan Government (5th edition), bringing together startups from around the world in AI, robotics, space and more.",
      zh: "由东京都主办的初创企业与创新国际活动（第5届），汇聚来自世界各地的AI、机器人、航天等领域初创企业。"
    }
  },
  {
    id: "aiexpo-industry-2027",
    fields: ["ai", "robot"],
    start: "2027-06-16", end: "2027-06-18",
    url: "https://www.manufacturing-world.jp/",
    name: { ja: "AI・人工知能EXPO Industry（ものづくり ワールド［東京］と同時開催）", en: "AI EXPO Industry (with Manufacturing World Tokyo)", zh: "AI・人工智能EXPO Industry（与制造业世界［东京］同期举办）" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "製造業向けのAIに特化して初めて開かれる展示会。日本最大級の製造業の展示会「ものづくり ワールド」と同時開催で、工場で動くAI・ロボットが見られます。",
      en: "The first AI show dedicated to manufacturing, held with Manufacturing World — one of Japan's largest manufacturing exhibitions — so you can see AI and robots at work in factories.",
      zh: "首次举办的制造业AI专业展，与日本规模最大的制造业展会“制造业世界”同期举办，可以看到在工厂中运作的AI和机器人。"
    }
  },
  {
    id: "ceatec-2027",
    fields: ["ai"],
    start: "2027-10-12", end: "2027-10-15", approx: true,
    when: { ja: "2027年10月中旬（例年）", en: "Mid-October 2027 (usual timing)", zh: "2027年10月中旬（往年）" },
    url: "https://www.ceatec.com/",
    name: { ja: "CEATEC 2027", en: "CEATEC 2027", zh: "CEATEC 2027" },
    venue: { ja: "幕張メッセ（千葉）", en: "Makuhari Messe (Chiba)", zh: "幕张展览馆（千叶）" },
    desc: {
      ja: "AI・デジタル技術の総合展示会。大手電機メーカーからスタートアップ、大学の研究まで幅広く出展します。2026年は10月13〜16日に開かれました。",
      en: "Japan's comprehensive show for AI and digital technology, with exhibitors from major electronics makers to startups and university labs. The 2026 edition ran 13–16 October.",
      zh: "AI与数字技术综合展，参展方从大型电子企业到初创公司、大学研究室。2026年于10月13日至16日举办。"
    }
  },
  {
    id: "jms-2027",
    fields: ["robot", "ai"],
    start: "2027-10-30", end: "2027-11-09", approx: true,
    when: { ja: "2027年秋（未発表。前回は10月下旬〜11月上旬）", en: "Autumn 2027 (TBA; last held late Oct – early Nov)", zh: "2027年秋（尚未公布，上届为10月下旬〜11月上旬）" },
    url: "https://www.japan-mobility-show.com/",
    name: { ja: "Japan Mobility Show 2027", en: "Japan Mobility Show 2027", zh: "Japan Mobility Show 2027（日本移动出行展）" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "旧・東京モーターショー。自動運転やロボット、空飛ぶクルマなど未来の移動の技術が並ぶ、一般の人も入場できる大型イベントです（入場は有料）。",
      en: "Formerly the Tokyo Motor Show. A large public event showcasing the future of mobility — self-driving, robots, flying cars and more (paid entry).",
      zh: "原东京车展。展出自动驾驶、机器人、飞行汽车等未来出行技术，是普通观众也可参加的大型活动（需购票）。"
    }
  },
  {
    id: "irex-2027",
    fields: ["robot", "ai"],
    start: "2027-11-29", end: "2027-12-02", approx: true,
    when: { ja: "2027年11月下旬〜12月上旬（2年に1度・未発表）", en: "Late Nov – early Dec 2027 (biennial; TBA)", zh: "2027年11月下旬〜12月上旬（两年一届，尚未公布）" },
    url: "https://irex.nikkan.co.jp/",
    name: { ja: "2027国際ロボット展（iREX）", en: "International Robot Exhibition (iREX) 2027", zh: "2027国际机器人展（iREX）" },
    venue: { ja: "東京ビッグサイト（東京）", en: "Tokyo Big Sight (Tokyo)", zh: "东京国际展览中心（东京）" },
    desc: {
      ja: "2年に1度開かれる、世界最大級のロボット展。産業用ロボットからサービスロボット、人型ロボットまで、ロボットとフィジカルAIの最先端が集まります。",
      en: "One of the world's largest robot shows, held every two years, featuring the cutting edge of robotics and physical AI — from industrial and service robots to humanoids.",
      zh: "两年一届的世界最大规模机器人展之一，汇集从工业机器人、服务机器人到人形机器人的机器人与物理AI最前沿技术。"
    }
  }
];
