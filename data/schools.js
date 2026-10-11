// 学校データ（日本語 ja / 英語 en / 簡体字中国語 zh）
// 学校を追加するときは、この配列に1件追加するだけでOK（項目の意味は README.md 参照）
window.SCHOOLS = [
  // ===== 大学 =====
  {
    id: "utokyo",
    type: "univ-national",
    region: "kanto",
    fields: ["ai", "robot", "prog", "semi", "design"],
    url: "https://www.u-tokyo.ac.jp/",
    checked: "2026-10",
    name: { ja: "東京大学", en: "The University of Tokyo", zh: "东京大学" },
    pref: { ja: "東京都", en: "Tokyo", zh: "东京都" },
    programs: {
      ja: "工学部（電子情報工学科・機械情報工学科など）、大学院情報理工学系研究科、College of Design（2027年9月開設予定）",
      en: "Faculty of Engineering (Information & Communication Eng., Mechano-Informatics, etc.), Graduate School of Information Science and Technology, UTokyo College of Design (opening Sept. 2027)",
      zh: "工学部（电子信息工学科、机械信息工学科等）、信息理工学系研究科、College of Design（计划2027年9月开设）"
    },
    desc: {
      ja: "日本のAI・ロボット研究をリードする国内トップの総合大学。2027年秋には、授業をすべて英語で行う5年制の新課程「College of Design」が開設予定で、日本人と留学生がともに学びます。",
      en: "Japan's leading university and a hub of AI and robotics research. Its new five-year, fully English-taught UTokyo College of Design is scheduled to open in autumn 2027, with Japanese and international students learning together.",
      zh: "日本顶尖的综合性大学，在人工智能和机器人研究领域处于领先地位。2027年秋季计划开设全英文授课的五年制新课程“College of Design”，日本学生与留学生共同学习。"
    }
  },
  {
    id: "kyoto-u",
    type: "univ-national",
    region: "kinki",
    fields: ["ai", "prog", "robot"],
    url: "https://www.kyoto-u.ac.jp/",
    checked: "2026-10",
    name: { ja: "京都大学", en: "Kyoto University", zh: "京都大学" },
    pref: { ja: "京都府", en: "Kyoto", zh: "京都府" },
    programs: {
      ja: "工学部情報学科、大学院情報学研究科",
      en: "Faculty of Engineering (Undergraduate School of Informatics and Mathematical Science), Graduate School of Informatics",
      zh: "工学部信息学科、信息学研究科"
    },
    desc: {
      ja: "自由な学風で知られ、情報学・数理工学の基礎研究に強い大学。機械学習や知能情報学の研究室が充実しています。",
      en: "Known for its free academic culture and strong fundamental research in informatics and applied mathematics, with many labs in machine learning and intelligence science.",
      zh: "以自由学风著称，在信息学与数理工学基础研究方面实力雄厚，拥有众多机器学习与智能信息学研究室。"
    }
  },
  {
    id: "science-tokyo",
    type: "univ-national",
    region: "kanto",
    fields: ["ai", "prog", "robot", "semi"],
    url: "https://www.isct.ac.jp/",
    checked: "2026-10",
    name: { ja: "東京科学大学", en: "Institute of Science Tokyo", zh: "东京科学大学" },
    pref: { ja: "東京都", en: "Tokyo", zh: "东京都" },
    programs: {
      ja: "情報理工学院（情報工学系・数理計算科学系）、工学院（機械系・電気電子系など）",
      en: "School of Computing (Computer Science, Mathematical and Computing Science), School of Engineering (Mechanical, Electrical & Electronic, etc.)",
      zh: "信息理工学院（信息工学系、数理计算科学系）、工学院（机械系、电气电子系等）"
    },
    desc: {
      ja: "2024年10月に東京工業大学と東京医科歯科大学が統合して誕生。理工系トップクラスの研究力に加え、医療×AI・ロボットなど分野をまたぐ研究にも注目です。",
      en: "Formed in October 2024 by merging Tokyo Institute of Technology and Tokyo Medical and Dental University. Top-tier science and engineering, plus cross-disciplinary work such as medical AI and robotics.",
      zh: "2024年10月由东京工业大学与东京医科齿科大学合并成立。理工科研究实力顶尖，医疗×人工智能、机器人等跨学科研究也备受关注。"
    }
  },
  {
    id: "tohoku-u",
    type: "univ-national",
    region: "hokkaido-tohoku",
    fields: ["semi", "robot", "ai", "space"],
    url: "https://www.tohoku.ac.jp/",
    checked: "2026-10",
    name: { ja: "東北大学", en: "Tohoku University", zh: "东北大学" },
    pref: { ja: "宮城県", en: "Miyagi", zh: "宫城县" },
    programs: {
      ja: "工学部（機械知能・航空工学科、電気情報物理工学科）、大学院情報科学研究科",
      en: "School of Engineering (Mechanical and Aerospace Eng., Electrical, Information and Physics Eng.), Graduate School of Information Sciences",
      zh: "工学部（机械智能・航空工学科、电气信息物理工学科）、信息科学研究科"
    },
    desc: {
      ja: "国の「国際卓越研究大学」第1号に認定。半導体・材料・災害対応ロボットの研究で世界的な実績があります。",
      en: "The first university designated as a \"University for International Research Excellence\" by the Japanese government, with world-class work in semiconductors, materials and disaster-response robotics.",
      zh: "日本首个获政府认定的“国际卓越研究大学”，在半导体、材料及灾害救援机器人研究方面具有世界级成果。"
    }
  },
  {
    id: "osaka-u",
    type: "univ-national",
    region: "kinki",
    fields: ["robot", "ai", "prog"],
    url: "https://www.osaka-u.ac.jp/",
    checked: "2026-10",
    name: { ja: "大阪大学", en: "Osaka University", zh: "大阪大学" },
    pref: { ja: "大阪府", en: "Osaka", zh: "大阪府" },
    programs: {
      ja: "基礎工学部（システム科学科・情報科学科）、大学院情報科学研究科",
      en: "School of Engineering Science (Systems Science, Information and Computer Sciences), Graduate School of Information Science and Technology",
      zh: "基础工学部（系统科学科、信息科学科）、信息科学研究科"
    },
    desc: {
      ja: "人間そっくりのアンドロイド研究など、人とロボットの関わりを探る研究で世界的に有名。工学と人間科学の融合が特徴です。",
      en: "World-famous for research on how people and robots interact, including lifelike androids. Known for blending engineering with human sciences.",
      zh: "以仿真人形机器人等人机交互研究闻名世界，特色在于工学与人类科学的融合。"
    }
  },
  {
    id: "nagoya-u",
    type: "univ-national",
    region: "chubu",
    fields: ["ai", "robot", "semi", "prog"],
    url: "https://www.nagoya-u.ac.jp/",
    checked: "2026-10",
    name: { ja: "名古屋大学", en: "Nagoya University", zh: "名古屋大学" },
    pref: { ja: "愛知県", en: "Aichi", zh: "爱知县" },
    programs: {
      ja: "情報学部、工学部（機械・航空宇宙工学科、電気電子情報工学科）",
      en: "School of Informatics, School of Engineering (Mechanical and Aerospace Eng., Electrical Eng. and Computer Science)",
      zh: "信息学部、工学部（机械・航空宇宙工学科、电气电子信息工学科）"
    },
    desc: {
      ja: "自動車産業が集まる中部地域の中心大学。自動運転やモビリティ、窒化ガリウム（GaN）半導体の研究で知られます。",
      en: "The core university of central Japan's automotive heartland, known for autonomous driving, mobility and gallium nitride (GaN) semiconductor research.",
      zh: "位于汽车产业聚集的日本中部地区，以自动驾驶、出行技术及氮化镓（GaN）半导体研究著称。"
    }
  },
  {
    id: "kyushu-u",
    type: "univ-national",
    region: "kyushu-okinawa",
    fields: ["ai", "semi", "prog", "security"],
    url: "https://www.kyushu-u.ac.jp/",
    checked: "2026-10",
    name: { ja: "九州大学", en: "Kyushu University", zh: "九州大学" },
    pref: { ja: "福岡県", en: "Fukuoka", zh: "福冈县" },
    programs: {
      ja: "工学部（電気情報工学科）、大学院システム情報科学府、マス・フォア・インダストリ研究所",
      en: "School of Engineering (Electrical Eng. and Computer Science), Graduate School of Information Science and Electrical Engineering, Institute of Mathematics for Industry",
      zh: "工学部（电气信息工学科）、系统信息科学府、产业数学研究所"
    },
    desc: {
      ja: "アジアに近い九州の拠点大学。数学を産業に生かす研究や、九州で拡大する半導体産業と連携した人材育成に力を入れています。",
      en: "The leading university in Kyushu, close to the rest of Asia. Strong in industrial mathematics and in training talent for Kyushu's fast-growing semiconductor industry.",
      zh: "靠近亚洲各国的九州核心大学，致力于产业数学研究，并与九州快速发展的半导体产业合作培养人才。"
    }
  },
  {
    id: "hokudai",
    type: "univ-national",
    region: "hokkaido-tohoku",
    fields: ["semi", "ai", "prog"],
    url: "https://www.hokudai.ac.jp/",
    checked: "2026-10",
    name: { ja: "北海道大学", en: "Hokkaido University", zh: "北海道大学" },
    pref: { ja: "北海道", en: "Hokkaido", zh: "北海道" },
    programs: {
      ja: "工学部（情報エレクトロニクス学科）、大学院情報科学院",
      en: "School of Engineering (Electronics and Information Eng.), Graduate School of Information Science and Technology",
      zh: "工学部（信息电子学科）、信息科学院"
    },
    desc: {
      ja: "広大なキャンパスを持つ北の総合大学。北海道千歳市で進む次世代半導体の工場建設をきっかけに、半導体人材の育成を強化しています。",
      en: "A comprehensive university with a vast campus in northern Japan. It is expanding semiconductor education as a next-generation chip plant is built in nearby Chitose.",
      zh: "拥有广阔校园的北方综合性大学。随着北海道千岁市新一代半导体工厂的建设，正加强半导体人才培养。"
    }
  },
  {
    id: "tsukuba",
    type: "univ-national",
    region: "kanto",
    fields: ["robot", "ai", "prog", "space"],
    url: "https://www.tsukuba.ac.jp/",
    checked: "2026-10",
    name: { ja: "筑波大学", en: "University of Tsukuba", zh: "筑波大学" },
    pref: { ja: "茨城県", en: "Ibaraki", zh: "茨城县" },
    programs: {
      ja: "情報学群（情報科学類・情報メディア創成学類）、理工学群（工学システム学類）",
      en: "School of Informatics (College of Information Science, College of Media Arts, Science and Technology), School of Science and Engineering (College of Engineering Systems)",
      zh: "信息学群（信息科学类、信息媒体创成学类）、理工学群（工学系统学类）"
    },
    desc: {
      ja: "研究機関が集まる「つくば研究学園都市」の中心。体に装着して動きを助けるロボットスーツなど、人を支えるロボット研究が有名です。",
      en: "At the heart of Tsukuba Science City, surrounded by national research institutes. Famous for human-assistive robotics such as wearable robot suits.",
      zh: "位于研究机构云集的“筑波科学城”中心，以可穿戴机器人外骨骼等辅助人类的机器人研究闻名。"
    }
  },
  {
    id: "uec",
    type: "univ-national",
    region: "kanto",
    fields: ["ai", "prog", "robot", "security"],
    url: "https://www.uec.ac.jp/",
    checked: "2026-10",
    name: { ja: "電気通信大学", en: "The University of Electro-Communications", zh: "电气通信大学" },
    pref: { ja: "東京都", en: "Tokyo", zh: "东京都" },
    programs: {
      ja: "情報理工学域（情報学専攻・機械知能システム学専攻など）、人工知能先端研究センター",
      en: "School of Informatics and Engineering (Informatics, Mechanical and Intelligent Systems, etc.), Artificial Intelligence eXploration Research Center",
      zh: "信息理工学域（信息学、机械智能系统学等）、人工智能尖端研究中心"
    },
    desc: {
      ja: "情報・通信・ロボットに特化した理工系大学。AI研究センターを持ち、プログラミングや情報通信を基礎から深く学べます。",
      en: "A science and engineering university specialising in information, communications and robotics, with a dedicated AI research center.",
      zh: "专注于信息、通信与机器人领域的理工科大学，设有人工智能研究中心，可从基础深入学习编程与信息通信。"
    }
  },
  {
    id: "u-aizu",
    type: "univ-public",
    region: "hokkaido-tohoku",
    fields: ["prog", "ai", "security", "space"],
    url: "https://www.u-aizu.ac.jp/",
    checked: "2026-10",
    name: { ja: "会津大学", en: "The University of Aizu", zh: "会津大学" },
    pref: { ja: "福島県", en: "Fukushima", zh: "福岛县" },
    programs: {
      ja: "コンピュータ理工学部（コンピュータ理工学科）",
      en: "School of Computer Science and Engineering",
      zh: "计算机理工学部（计算机理工学科）"
    },
    desc: {
      ja: "日本初のコンピュータ理工学専門の大学。教員の多くが海外出身で、授業や研究で日常的に英語を使います。月・惑星探査のデータ解析などユニークな研究も。",
      en: "Japan's first university dedicated to computer science and engineering. Many faculty members are from overseas and English is used daily. Unique research includes lunar and planetary data analysis.",
      zh: "日本首所计算机理工专门大学。许多教师来自海外，教学与研究中日常使用英语。还开展月球及行星探测数据分析等独特研究。"
    }
  },
  {
    id: "fun",
    type: "univ-public",
    region: "hokkaido-tohoku",
    fields: ["prog", "ai", "design"],
    url: "https://www.fun.ac.jp/",
    checked: "2026-10",
    name: { ja: "公立はこだて未来大学", en: "Future University Hakodate", zh: "公立函馆未来大学" },
    pref: { ja: "北海道", en: "Hokkaido", zh: "北海道" },
    programs: {
      ja: "システム情報科学部（情報アーキテクチャ学科・複雑系知能学科）",
      en: "School of Systems Information Science (Information Architecture, Complex and Intelligent Systems)",
      zh: "系统信息科学部（信息架构学科、复杂系统智能学科）"
    },
    desc: {
      ja: "情報科学とデザインを融合した大学。学生がチームで地域や企業の課題に取り組む「プロジェクト学習」が特徴で、AI・アプリ開発を実践的に学べます。",
      en: "A university that combines information science and design. Its team-based \"project learning\" tackles real problems from local communities and companies, giving hands-on AI and app development experience.",
      zh: "融合信息科学与设计的大学。特色是学生组队解决地区和企业实际问题的“项目学习”，可实践性地学习人工智能与应用开发。"
    }
  },
  {
    id: "waseda",
    type: "univ-private",
    region: "kanto",
    fields: ["robot", "ai", "prog", "design"],
    url: "https://www.waseda.jp/",
    checked: "2026-10",
    name: { ja: "早稲田大学", en: "Waseda University", zh: "早稻田大学" },
    pref: { ja: "東京都", en: "Tokyo", zh: "东京都" },
    programs: {
      ja: "基幹理工学部（情報理工学科など）、創造理工学部（総合機械工学科）、先進理工学部",
      en: "School of Fundamental Science and Engineering (Computer Science, etc.), School of Creative Science and Engineering (Modern Mechanical Eng.), School of Advanced Science and Engineering",
      zh: "基干理工学部（信息理工学科等）、创造理工学部（综合机械工学科）、先进理工学部"
    },
    desc: {
      ja: "1970年代に世界初の本格的な人間型ロボットを開発した、ヒューマノイド研究の草分け。留学生が非常に多く国際色豊かです。",
      en: "A pioneer of humanoid robotics, having built one of the world's first full-scale humanoid robots in the 1970s. Home to a very large international student community.",
      zh: "人形机器人研究的先驱，于20世纪70年代开发了世界上最早的全尺寸人形机器人之一。留学生众多，国际化氛围浓厚。"
    }
  },
  {
    id: "keio",
    type: "univ-private",
    region: "kanto",
    fields: ["prog", "ai", "robot", "design", "startup"],
    url: "https://www.keio.ac.jp/",
    checked: "2026-10",
    name: { ja: "慶應義塾大学", en: "Keio University", zh: "庆应义塾大学" },
    pref: { ja: "東京都・神奈川県", en: "Tokyo / Kanagawa", zh: "东京都・神奈川县" },
    programs: {
      ja: "理工学部（情報工学科・システムデザイン工学科など）、環境情報学部（湘南藤沢キャンパス）",
      en: "Faculty of Science and Technology (Information and Computer Science, System Design Eng., etc.), Faculty of Environment and Information Studies (Shonan Fujisawa Campus)",
      zh: "理工学部（信息工学科、系统设计工学科等）、环境信息学部（湘南藤泽校区）"
    },
    desc: {
      ja: "湘南藤沢キャンパス（SFC）は日本のインターネット研究の発祥地の一つ。テクノロジーとデザイン、起業を自由に組み合わせて学べ、起業家も多く輩出しています。",
      en: "Its Shonan Fujisawa Campus (SFC) is one of the birthplaces of internet research in Japan. Students freely combine technology, design and entrepreneurship, and many go on to found startups.",
      zh: "湘南藤泽校区（SFC）是日本互联网研究的发源地之一。学生可自由组合学习技术、设计与创业，培养了众多创业者。"
    }
  },
  {
    id: "ritsumei",
    type: "univ-private",
    region: "kinki",
    fields: ["prog", "ai", "robot", "security"],
    url: "https://www.ritsumei.ac.jp/",
    checked: "2026-10",
    name: { ja: "立命館大学", en: "Ritsumeikan University", zh: "立命馆大学" },
    pref: { ja: "大阪府・滋賀県・京都府", en: "Osaka / Shiga / Kyoto", zh: "大阪府・滋贺县・京都府" },
    programs: {
      ja: "情報理工学部（大阪いばらきキャンパス）、理工学部（ロボティクス学科）",
      en: "College of Information Science and Engineering (Osaka Ibaraki Campus), College of Science and Engineering (Robotics)",
      zh: "信息理工学部（大阪茨木校区）、理工学部（机器人学科）"
    },
    desc: {
      ja: "情報理工学部に加え、理工学部にロボティクス学科を持つ西日本の大規模私大。ゲームやメディア技術など幅広い分野を学べます。",
      en: "A major private university in western Japan with both an information science college and a dedicated robotics department. Programs also cover game and media technology.",
      zh: "日本西部的大型私立大学，既有信息理工学部，理工学部还设有机器人学科，还可学习游戏与媒体技术等广泛领域。"
    }
  },
  {
    id: "chibatech",
    type: "univ-private",
    region: "kanto",
    fields: ["robot", "ai", "space", "prog"],
    url: "https://chibatech.jp/",
    checked: "2026-10",
    name: { ja: "千葉工業大学", en: "Chiba Institute of Technology", zh: "千叶工业大学" },
    pref: { ja: "千葉県", en: "Chiba", zh: "千叶县" },
    programs: {
      ja: "先進工学部（未来ロボティクス学科）、情報変革科学部、未来ロボット技術研究センター（fuRo）、惑星探査研究センター（PERC）",
      en: "Faculty of Advanced Engineering (Advanced Robotics), Faculty of Information and Computer Science, Future Robotics Technology Center (fuRo), Planetary Exploration Research Center (PERC)",
      zh: "先进工学部（未来机器人学科）、信息变革科学部、未来机器人技术研究中心（fuRo）、行星探测研究中心（PERC）"
    },
    desc: {
      ja: "福島第一原発の調査ロボットを開発したfuRoなど、実際に社会で使われるロボットづくりで有名。東京スカイツリータウンに研究成果を体験できる施設もあります。",
      en: "Famous for robots used in the real world, such as fuRo's robots that surveyed the Fukushima Daiichi nuclear plant. It also runs a hands-on exhibit at Tokyo Skytree Town.",
      zh: "以开发实际应用于社会的机器人而闻名，如fuRo为福岛第一核电站开发的调查机器人。在东京晴空塔城还设有可体验研究成果的展示设施。"
    }
  },
  {
    id: "shibaura",
    type: "univ-private",
    region: "kanto",
    fields: ["robot", "prog", "ai", "semi"],
    url: "https://www.shibaura-it.ac.jp/",
    checked: "2026-10",
    name: { ja: "芝浦工業大学", en: "Shibaura Institute of Technology", zh: "芝浦工业大学" },
    pref: { ja: "東京都・埼玉県", en: "Tokyo / Saitama", zh: "东京都・埼玉县" },
    programs: {
      ja: "工学部（情報・通信工学課程、機械工学課程など）、システム理工学部、デザイン工学部",
      en: "College of Engineering (Information and Communications Eng., Mechanical Eng., etc.), College of Systems Engineering and Science, College of Engineering and Design",
      zh: "工学部（信息・通信工学课程、机械工学课程等）、系统理工学部、设计工学部"
    },
    desc: {
      ja: "ものづくりに強い実学系の工業大学。国の「スーパーグローバル大学」に選ばれ、海外大学との共同プロジェクトなど国際的な学びにも積極的です。",
      en: "A practical engineering university with strong manufacturing roots. Selected for the government's Top Global University Project and active in joint projects with overseas universities.",
      zh: "注重实践、擅长制造技术的工业大学。入选日本政府“超级国际化大学”项目，积极开展与海外大学的联合项目。"
    }
  },
  {
    id: "dendai",
    type: "univ-private",
    region: "kanto",
    fields: ["robot", "prog", "security"],
    url: "https://www.dendai.ac.jp/",
    checked: "2026-10",
    name: { ja: "東京電機大学", en: "Tokyo Denki University", zh: "东京电机大学" },
    pref: { ja: "東京都・埼玉県", en: "Tokyo / Saitama", zh: "东京都・埼玉县" },
    programs: {
      ja: "未来科学部（ロボット・メカトロニクス学科）、システムデザイン工学部（情報システム工学科）",
      en: "School of Science and Technology for Future Life (Robotics and Mechatronics), School of System Design and Technology (Information Systems Eng.)",
      zh: "未来科学部（机器人・机电一体化学科）、系统设计工学部（信息系统工学科）"
    },
    desc: {
      ja: "「技術は人なり」を掲げる伝統ある工業大学。ロボット・メカトロニクスや情報セキュリティを実習中心に学べます。",
      en: "A long-established engineering university with the motto \"Technology is people.\" Robotics, mechatronics and information security are taught with a strong focus on hands-on practice.",
      zh: "以“技术即人”为校训的传统工业大学，以实践为中心教授机器人、机电一体化及信息安全。"
    }
  },
  {
    id: "kyutech",
    type: "univ-national",
    region: "kyushu-okinawa",
    fields: ["robot", "ai", "space", "prog"],
    url: "https://www.kyutech.ac.jp/",
    checked: "2026-10",
    name: { ja: "九州工業大学", en: "Kyushu Institute of Technology", zh: "九州工业大学" },
    pref: { ja: "福岡県", en: "Fukuoka", zh: "福冈县" },
    programs: {
      ja: "情報工学部（飯塚キャンパス）、工学部、大学院生命体工学研究科",
      en: "School of Computer Science and Systems Engineering (Iizuka Campus), School of Engineering, Graduate School of Life Science and Systems Engineering",
      zh: "信息工学部（饭塚校区）、工学部、生命体工学研究科"
    },
    desc: {
      ja: "超小型人工衛星の開発で世界トップクラスの実績を持つ工業大学。家庭用サービスロボットの競技会でも活躍しています。",
      en: "An engineering university with a world-leading track record in building small satellites, and strong teams in service-robot competitions.",
      zh: "在超小型人造卫星开发方面拥有世界顶级业绩的工业大学，在家用服务机器人竞赛中也表现活跃。"
    }
  },
  {
    id: "toyota-ti",
    type: "univ-private",
    region: "chubu",
    fields: ["robot", "ai", "semi"],
    url: "https://www.toyota-ti.ac.jp/",
    checked: "2026-10",
    name: { ja: "豊田工業大学", en: "Toyota Technological Institute", zh: "丰田工业大学" },
    pref: { ja: "愛知県", en: "Aichi", zh: "爱知县" },
    programs: {
      ja: "工学部（先端工学基礎学科：機械システム・電子情報・物質工学の3分野）",
      en: "Faculty of Engineering (Advanced Science and Technology: Mechanical Systems, Electronics and Information, Materials Science)",
      zh: "工学部（尖端工学基础学科：机械系统、电子信息、物质工学三个方向）"
    },
    desc: {
      ja: "トヨタ自動車が設立した少人数制の工業大学。米国シカゴに機械学習研究で知られる姉妹校があり、産業と直結した研究ができます。",
      en: "A small engineering university founded by Toyota Motor Corporation. Its sister institute in Chicago is known for machine learning research, and studies are closely tied to industry.",
      zh: "由丰田汽车公司创办的小班制工业大学。在美国芝加哥设有以机器学习研究著称的姊妹校，研究与产业紧密相连。"
    }
  },
  {
    id: "oist",
    type: "univ-grad",
    region: "kyushu-okinawa",
    fields: ["ai", "robot", "prog"],
    url: "https://www.oist.jp/",
    checked: "2026-10",
    name: { ja: "沖縄科学技術大学院大学（OIST）", en: "Okinawa Institute of Science and Technology (OIST)", zh: "冲绳科学技术大学院大学（OIST）" },
    pref: { ja: "沖縄県", en: "Okinawa", zh: "冲绳县" },
    programs: {
      ja: "5年一貫制博士課程（神経科学・計算科学・物理・化学など分野横断）",
      en: "Five-year PhD program spanning neuroscience, computational science, physics, chemistry and more",
      zh: "五年一贯制博士课程（跨越神经科学、计算科学、物理、化学等领域）"
    },
    desc: {
      ja: "すべて英語で運営される国際的な大学院大学。学生・教員の多くが海外出身で、脳科学とAIを結びつける研究などが行われています。大学卒業後の進学先として注目です。",
      en: "An international graduate university run entirely in English. Most students and faculty come from abroad, and research links brain science with AI. A strong option after an undergraduate degree.",
      zh: "完全以英语运营的国际化研究生大学，大部分学生和教师来自海外，开展将脑科学与人工智能相结合的研究，是本科毕业后深造的热门选择。"
    }
  },

  // ===== 高専（高等専門学校）=====
  {
    id: "tokyo-ct",
    type: "kosen",
    region: "kanto",
    fields: ["prog", "ai", "robot"],
    url: "https://www.tokyo-ct.ac.jp/",
    checked: "2026-10",
    name: { ja: "東京工業高等専門学校（東京高専）", en: "National Institute of Technology, Tokyo College", zh: "东京工业高等专门学校" },
    pref: { ja: "東京都", en: "Tokyo", zh: "东京都" },
    programs: {
      ja: "情報工学科、電子工学科、機械工学科、電気工学科、物質工学科",
      en: "Departments of Computer Science, Electronic Eng., Mechanical Eng., Electrical Eng., Chemical Science and Eng.",
      zh: "信息工学科、电子工学科、机械工学科、电气工学科、物质工学科"
    },
    desc: {
      ja: "15歳から5年間、専門技術を学べる国立高専。ディープラーニングを使ったものづくりコンテスト（DCON）やロボコンで活躍しています。",
      en: "A national college of technology where students start specialised engineering at 15 for five years. Active in deep-learning business contests (DCON) and robot contests.",
      zh: "15岁起用5年时间学习专业技术的国立高专，在深度学习创业大赛（DCON）和机器人大赛中表现活跃。"
    }
  },
  {
    id: "sendai-ct",
    type: "kosen",
    region: "hokkaido-tohoku",
    fields: ["prog", "ai", "robot"],
    url: "https://www.sendai-nct.ac.jp/",
    checked: "2026-10",
    name: { ja: "仙台高等専門学校（仙台高専）", en: "National Institute of Technology, Sendai College", zh: "仙台高等专门学校" },
    pref: { ja: "宮城県", en: "Miyagi", zh: "宫城县" },
    programs: {
      ja: "総合工学科（情報・電子・機械・建築などの系・コース）",
      en: "Department of General Engineering (courses in information, electronics, mechanics, architecture, etc.)",
      zh: "综合工学科（信息、电子、机械、建筑等方向）"
    },
    desc: {
      ja: "東北最大級の高専。情報系の教育に力を入れ、デジタル技術とものづくりを組み合わせた人材育成を進めています。",
      en: "One of the largest colleges of technology in the Tohoku region, investing heavily in IT education that combines digital technology with manufacturing.",
      zh: "东北地区规模最大的高专之一，重视信息类教育，致力于培养数字技术与制造相结合的人才。"
    }
  },
  {
    id: "nagaoka-ct",
    type: "kosen",
    region: "chubu",
    fields: ["ai", "robot", "prog"],
    url: "https://www.nagaoka-ct.ac.jp/",
    checked: "2026-10",
    name: { ja: "長岡工業高等専門学校（長岡高専）", en: "National Institute of Technology, Nagaoka College", zh: "长冈工业高等专门学校" },
    pref: { ja: "新潟県", en: "Niigata", zh: "新潟县" },
    programs: {
      ja: "電子制御工学科、電気電子システム工学科、機械工学科ほか／AI・IoT・ロボティクスを学ぶ「AIR Tech」教育",
      en: "Electronic Control Eng., Electrical and Electronic Systems Eng., Mechanical Eng., etc. / \"AIR Tech\" program in AI, IoT and robotics",
      zh: "电子控制工学科、电气电子系统工学科、机械工学科等／学习AI・IoT・机器人的“AIR Tech”教育"
    },
    desc: {
      ja: "AI・IoT・ロボティクスを横断的に学ぶ独自プログラムを持つ高専。地域の企業と連携した実践的なものづくり教育が特徴です。",
      en: "A college of technology with its own cross-disciplinary program in AI, IoT and robotics, and practical engineering education in partnership with local companies.",
      zh: "拥有横跨AI、IoT与机器人领域独特项目的高专，特色是与当地企业合作开展实践性制造教育。"
    }
  },
  {
    id: "kumamoto-ct",
    type: "kosen",
    region: "kyushu-okinawa",
    fields: ["semi", "prog", "ai", "security"],
    url: "https://kumamoto-nct.ac.jp/",
    checked: "2026-10",
    name: { ja: "熊本高等専門学校（熊本高専）", en: "National Institute of Technology, Kumamoto College", zh: "熊本高等专门学校" },
    pref: { ja: "熊本県", en: "Kumamoto", zh: "熊本县" },
    programs: {
      ja: "情報通信エレクトロニクス工学科、制御情報システム工学科、人間情報システム工学科ほか",
      en: "Information, Communication and Electronic Eng., Control and Information Systems Eng., Human-Oriented Information Systems Eng., etc.",
      zh: "信息通信电子工学科、控制信息系统工学科、人类信息系统工学科等"
    },
    desc: {
      ja: "世界的な半導体メーカーの工場進出で注目される熊本の高専。半導体人材の育成や情報セキュリティ教育に力を入れています。",
      en: "Located in Kumamoto, where a major global chipmaker has built new fabs. The college focuses on training semiconductor engineers and on cybersecurity education.",
      zh: "位于因全球知名半导体企业建厂而备受关注的熊本，致力于半导体人才培养和信息安全教育。"
    }
  },
  {
    id: "ict-kanazawa",
    type: "kosen",
    region: "chubu",
    fields: ["ai", "robot", "prog", "design"],
    url: "https://www.ict-kanazawa.ac.jp/",
    checked: "2026-10",
    name: { ja: "国際高等専門学校（国際高専）", en: "International College of Technology, Kanazawa", zh: "国际高等专门学校" },
    pref: { ja: "石川県", en: "Ishikawa", zh: "石川县" },
    programs: {
      ja: "国際理工学科（AI・IoT・ロボティクスなどを英語で学ぶ）",
      en: "Department of Science and Technology (AI, IoT and robotics taught in English)",
      zh: "国际理工学科（用英语学习AI、IoT、机器人等）"
    },
    desc: {
      ja: "工学の専門科目を英語で学ぶ私立高専。白山麓キャンパスでの寮生活も特徴です。金沢工業大学と連携し、大学院まで一貫して学ぶ道もあります。",
      en: "A private college of technology that teaches engineering in English. Residential life at the Hakusanroku campus is a key feature, with a pathway through Kanazawa Institute of Technology up to graduate school.",
      zh: "用英语教授工学专业课程的私立高专。在白山麓校区的寄宿生活也是一大特色，与金泽工业大学合作，可一贯学习至研究生阶段。"
    }
  },
  {
    id: "kamiyama",
    type: "kosen",
    region: "chugoku-shikoku",
    fields: ["prog", "design", "startup", "ai"],
    url: "https://kamiyama.ac.jp/",
    checked: "2026-10",
    name: { ja: "神山まるごと高等専門学校", en: "Kamiyama Marugoto College of Technology", zh: "神山Marugoto高等专门学校" },
    pref: { ja: "徳島県", en: "Tokushima", zh: "德岛县" },
    programs: {
      ja: "デザイン・エンジニアリング学科（テクノロジー × デザイン × 起業家精神）",
      en: "Department of Design and Engineering (technology × design × entrepreneurship)",
      zh: "设计・工程学科（技术 × 设计 × 创业精神）"
    },
    desc: {
      ja: "2023年に開校した全寮制の私立高専。1学年40人。ソニーグループやソフトバンクなど企業の出資による奨学金基金で、学費の実質無償化を実現しています。",
      en: "A private, fully residential college of technology opened in 2023, with 40 students per year. A scholarship fund backed by companies such as Sony Group and SoftBank makes tuition effectively free.",
      zh: "2023年开校的全寄宿制私立高专，每届40人。由索尼集团、软银等企业出资设立的奖学金基金，实现了学费实质免费。"
    }
  },

  // ===== 高校 =====
  {
    id: "n-high",
    type: "high",
    region: "online",
    fields: ["prog", "ai", "startup"],
    url: "https://nnn.ed.jp/",
    checked: "2026-10",
    name: { ja: "N高等学校・S高等学校・R高等学校", en: "N High School / S High School / R High School", zh: "N高中・S高中・R高中" },
    pref: { ja: "全国（ネット通信制）", en: "Nationwide (online)", zh: "全国（网络函授制）" },
    programs: {
      ja: "ネットの通信制高校。プログラミングなどを学べる課外授業、通学コースあり",
      en: "Online correspondence high schools with extracurricular courses such as programming, plus campus-based options",
      zh: "网络函授制高中，设有编程等课外课程，也有到校学习的课程"
    },
    desc: {
      ja: "KADOKAWA・ドワンゴが創ったネットの高校で、生徒数は日本最大級（3校合計で3万人超）。自分のペースで学びながら、プログラミングや起業などに挑戦できます。",
      en: "Online high schools created by KADOKAWA and Dwango, with one of the largest student bodies in Japan (over 30,000 across the three schools). Students learn at their own pace while trying programming and entrepreneurship.",
      zh: "由KADOKAWA与Dwango创办的网络高中，学生人数位居日本前列（三校合计超过3万人）。学生可按自己的节奏学习，同时挑战编程和创业。"
    }
  },
  {
    id: "kagaku-gijutsu",
    type: "high",
    region: "kanto",
    fields: ["prog", "robot", "ai"],
    url: "https://www.metro.ed.jp/kagakugijyutu-h/",
    checked: "2026-10",
    name: { ja: "東京都立科学技術高等学校", en: "Tokyo Metropolitan Science and Technology High School", zh: "东京都立科学技术高中" },
    pref: { ja: "東京都（江東区）", en: "Tokyo (Koto City)", zh: "东京都（江东区）" },
    programs: {
      ja: "科学技術科、創造理数科（2024年度設置）",
      en: "Science and Technology Course, Creative Science and Mathematics Course (since 2024)",
      zh: "科学技术科、创造理数科（2024年度设立）"
    },
    desc: {
      ja: "大学レベルの研究設備を持つ、大学進学を目指す専門高校。文部科学省のスーパーサイエンスハイスクール（SSH）に指定され、実験・研究中心に学びます。",
      en: "A university-oriented specialised high school with university-level research facilities. Designated a Super Science High School (SSH) by the Ministry of Education, with learning centred on experiments and research.",
      zh: "拥有大学级研究设备、以升学为目标的专业高中。被文部科学省指定为超级科学高中（SSH），以实验与研究为中心开展学习。"
    }
  },
  {
    id: "tama-kagaku",
    type: "high",
    region: "kanto",
    fields: ["prog", "ai", "semi"],
    url: "https://www.metro.ed.jp/tamakagakugijutsu-h/",
    checked: "2026-10",
    name: { ja: "東京都立多摩科学技術高等学校", en: "Tokyo Metropolitan Tama Science and Technology High School", zh: "东京都立多摩科学技术高中" },
    pref: { ja: "東京都（小金井市）", en: "Tokyo (Koganei City)", zh: "东京都（小金井市）" },
    programs: {
      ja: "科学技術科（情報通信・ナノ科学・バイオ・環境エネルギーなどの領域）",
      en: "Science and Technology Course (information and communications, nanoscience, biotechnology, environment and energy)",
      zh: "科学技术科（信息通信、纳米科学、生物、环境能源等领域）"
    },
    desc: {
      ja: "大学進学を目指す科学技術系の都立高校で、スーパーサイエンスハイスクール（SSH）指定校。情報通信などの専門領域を選んで課題研究に取り組みます。",
      en: "A university-oriented science and technology high school and a designated Super Science High School (SSH). Students choose a field such as information and communications for research projects.",
      zh: "以升学为目标的科学技术类都立高中，超级科学高中（SSH）指定校。学生可选择信息通信等专业领域开展课题研究。"
    }
  },
  {
    id: "seto-koka",
    type: "high",
    region: "chubu",
    fields: ["robot", "prog"],
    url: "https://seto-te.aichi-c.ed.jp/",
    checked: "2026-10",
    name: { ja: "愛知県立瀬戸工科高等学校", en: "Aichi Prefectural Seto Technical High School", zh: "爱知县立濑户工科高中" },
    pref: { ja: "愛知県（瀬戸市）", en: "Aichi (Seto City)", zh: "爱知县（濑户市）" },
    programs: {
      ja: "ロボット工学科ほか",
      en: "Department of Robotics Engineering, etc.",
      zh: "机器人工学科等"
    },
    desc: {
      ja: "ものづくり産業が集まる愛知県が、工業高校の学科改編で設置したロボット工学科を持つ高校。ロボットの制御やプログラミングを実習で学びます。",
      en: "Aichi — a manufacturing powerhouse — created robotics departments in its technical high schools, and Seto is one of them. Students learn robot control and programming through practical training.",
      zh: "制造业聚集的爱知县在工业高中学科改革中设立了机器人工学科，本校即为其中之一。学生通过实习学习机器人控制与编程。"
    }
  },
  {
    id: "higashiyodo",
    type: "high",
    region: "kinki",
    fields: ["robot", "prog"],
    url: "https://www3.osaka-c.ed.jp/higashiyodo-t/",
    checked: "2026-10",
    name: { ja: "大阪府立東淀工業高等学校", en: "Osaka Prefectural Higashiyodo Technical High School", zh: "大阪府立东淀工业高中" },
    pref: { ja: "大阪府（大阪市）", en: "Osaka (Osaka City)", zh: "大阪府（大阪市）" },
    programs: {
      ja: "機械工学科、電気工学科、理工学科（ロボットシステムインテグレーター人材の育成に取り組む）",
      en: "Mechanical Eng., Electrical Eng., Science and Engineering (training robot system integrators)",
      zh: "机械工学科、电气工学科、理工学科（致力于培养机器人系统集成人才）"
    },
    desc: {
      ja: "工場などでロボットを導入・活用できる技術者（ロボットSIer）の育成に取り組む工業高校。ロボットのプログラミングや制御を実践的に学べます。",
      en: "A technical high school training \"robot SIers\" — engineers who install and integrate robots in factories. Students learn robot programming and control in practice.",
      zh: "致力于培养能在工厂等场所导入和运用机器人的技术人员（机器人系统集成商）的工业高中，可实践学习机器人编程与控制。"
    }
  }
];
