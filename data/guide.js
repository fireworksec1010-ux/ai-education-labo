// 留学生活ガイド・就職活動ガイドの本文（日本語 ja / 英語 en / 簡体字中国語 zh）
// blocks の書き方： { h: 見出し, p: 段落 } または { h: 見出し, items: [箇条書き] }
// timeline / steps は就職活動セクション専用
window.GUIDE = {
  ja: {
    title: "留学生活ガイド",
    lead: "日本で学ぶ外国人留学生が最初につまずきやすい「お金」「アルバイト」「部屋探し」「到着後の手続き」「就職活動」をまとめました。制度は変わることがあるので、最終的には学校の国際課や公的機関で確認してください。",
    toc: "目次",
    sections: [
      {
        id: "money", title: "お金：学費・生活費・奨学金",
        blocks: [
          { h: "学費の目安（年間）", items: [
            "国立大学：53万5,800円が標準（一部の大学は最大64万2,960円）",
            "公立大学：国立大学とほぼ同じ",
            "私立大学（理工系）：約140万〜190万円",
            "国立高専：23万4,600円",
            "入学時には別に入学金がかかります（国立大学は28万2,000円、私立は20万〜30万円程度）"
          ]},
          { h: "生活費の目安（月）", items: [
            "東京などの大都市：約12万〜15万円（家賃6万〜8万円を含む）",
            "地方都市：約8万〜10万円",
            "大学の寮に入ると家賃を大きく抑えられます"
          ]},
          { h: "主な奨学金", items: [
            "国費留学生（文部科学省奨学金）：授業料免除＋毎月の奨学金。母国の日本大使館や大学を通じて応募します",
            "JASSO学習奨励費：月4万8,000円（2026年度）。入学後に学校を通じて申請します",
            "大学独自の奨学金・授業料減免",
            "民間財団・企業の奨学金"
          ]},
          { h: "ポイント", p: "多くの奨学金は入学後に学校を通じて申請し、締め切りも早めです。入学したらすぐ国際課（留学生課）で募集情報を確認しましょう。" }
        ]
      },
      {
        id: "work", title: "アルバイトのルール",
        blocks: [
          { h: "まず「資格外活動許可」が必要", p: "留学の在留資格のままではアルバイトはできません。入国時に空港で申請できます（入国後は出入国在留管理局で申請）。許可されると在留カードの裏面に記載されます。" },
          { h: "働ける時間の上限", items: [
            "授業がある期間：週28時間以内（どの曜日から数えても7日間で28時間まで）",
            "夏休みなど学校が定める長期休業中：1日8時間・週40時間以内",
            "アルバイトを掛け持ちしても、合計時間で上限が決まります"
          ]},
          { h: "してはいけない仕事", p: "バー、キャバクラ、パチンコ店など風俗営業に関係する店では、皿洗いや清掃であっても働けません。" },
          { h: "ルールを守らないと", p: "在留期間の更新が認められなかったり、退去強制（国外退去）になったりすることがあります。時間の上限は必ず守りましょう。" },
          { h: "時給と税金", items: [
            "最低賃金は都道府県ごとに異なり、全国で時給1,000円以上です（2025年度改定）",
            "給料は銀行口座で受け取るのが一般的です",
            "年間の収入によっては所得税・住民税がかかります"
          ]}
        ]
      },
      {
        id: "housing", title: "部屋探し",
        blocks: [
          { h: "住まいの選択肢", items: [
            "大学の寮・留学生宿舎：家賃が安く安心。まずは応募を検討しましょう",
            "民間のアパート・マンション：自由度は高いが、初期費用がかかります",
            "シェアハウス：家具付きで初期費用が安いことが多い"
          ]},
          { h: "初期費用は家賃の4〜6か月分が目安", items: [
            "敷金：退去時に修繕費を差し引いて返ってくるお金",
            "礼金：大家さんへのお礼。返ってきません",
            "仲介手数料、前家賃（最初の月の家賃）",
            "保証会社の保証料、火災保険料"
          ]},
          { h: "保証人がいないときは", p: "日本人の連帯保証人がいなくても、保証会社を利用すれば借りられることが多いです。大学が機関保証や「留学生住宅総合補償」を案内してくれる場合もあるので、国際課に相談しましょう。" },
          { h: "探し方のコツ", items: [
            "「外国人可」「留学生歓迎」と書かれた物件や、多言語対応の不動産会社を選ぶ",
            "大学の生協や国際課が紹介する物件は安心",
            "必要なもの：在留カード、学生証または在学証明書、日本の電話番号、緊急連絡先"
          ]},
          { h: "住んでからのマナー", items: [
            "ゴミは決められた曜日に、種類ごとに分けて出す",
            "夜の音に注意（壁が薄い建物が多い）",
            "又貸しや、契約者以外との無断の同居は禁止",
            "退去するときは1〜2か月前に連絡。部屋の傷や汚れは修繕費を請求されることがあります"
          ]}
        ]
      },
      {
        id: "arrival", title: "到着後の手続き",
        blocks: [
          { h: "1. 住民登録（14日以内）", p: "住む場所が決まったら14日以内に、市区町村の役所で転入の届け出をします。在留カードの裏面に住所が記載されます。" },
          { h: "2. 国民健康保険", p: "住民登録と同時に加入します（加入は義務）。病院での自己負担が医療費の3割になります。収入が少ない場合は保険料が減額されます。" },
          { h: "3. 国民年金", p: "20歳以上は加入の対象です。学生は「学生納付特例」を申請すると、在学中の支払いを猶予できます。" },
          { h: "4. 銀行口座・携帯電話", p: "住民登録が済んだら、在留カードを持って手続きします。入国から6か月未満の間は、口座の機能が制限されることがあります。" },
          { h: "5. マイナンバー", p: "住民登録をすると12桁の個人番号（マイナンバー）が通知されます。アルバイトや税金の手続きで必要になるので大切に保管しましょう。" }
        ]
      },
      {
        id: "job", title: "就職活動ガイド",
        intro: "日本で働きたい留学生は多いものの、日本独特の就職活動に早く慣れることが内定への近道です。ここでは大学（4年制）の一般的な流れを紹介します。",
        timelineTitle: "就職活動のスケジュール（目安）",
        timeline: [
          ["3年生 6〜9月", "夏のインターンシップ。選考につながることもあります。自己分析・業界研究を始めます。"],
          ["3年生 10〜2月", "秋冬のインターンシップ、OB・OG訪問。日本語能力試験（N1・N2）の取得を目指します。"],
          ["3年生 3月", "企業の説明会・エントリー受付が本格スタート。エントリーシート（ES）を提出します。"],
          ["4年生 6月〜", "面接などの選考が本格化（実際にはもっと早く選考を始める企業も多い）。"],
          ["4年生 10月", "多くの企業で内定式。卒業後の4月に入社します。"],
          ["卒業前", "在留資格を「留学」から就労できる資格（「技術・人文知識・国際業務」など）に変更申請します。"]
        ],
        stepsTitle: "選考の流れ",
        steps: ["自己分析", "業界・企業研究", "エントリーシート", "適性検査（SPIなど）", "グループディスカッション", "面接（2〜4回）", "内定"],
        blocks: [
          { h: "内定を取りやすくする工夫", items: [
            "早く始める：3年生の夏のインターンシップが実質的なスタート。留学生は情報が遅れがちなので要注意",
            "日本語力を「見える形」に：日本語能力試験 N1（少なくともN2）を取得。面接は敬語と「結論から話す」を練習",
            "エントリーシートは日本人に添削してもらう",
            "「なぜ日本の会社で働きたいか」「長く働くつもりか」を具体的に言えるようにする",
            "強みをはっきり示す：母国語＋日本語＋英語、プログラミング・AI・データ分析などの技術スキルは人手不足で評価されやすい",
            "大企業だけでなく、海外展開している中堅企業・IT企業・外資系企業も受ける"
          ]},
          { h: "ビザ（在留資格）の注意点", items: [
            "就労ビザは「仕事の内容が専攻と関係あること」が条件。専攻と関係のない単純作業の仕事では許可されません",
            "卒業までに内定が出なくても、学校の推薦があれば「特定活動」の在留資格で卒業後も最長1年、就職活動を続けられます",
            "高専・大学院の学生も基本の流れは同じ。理系の大学院では研究室や教授の推薦で就職先が決まることも多いです"
          ]},
          { h: "相談できるところ", items: [
            "学校のキャリアセンター・国際課（模擬面接やES添削もしてくれます）",
            "ハローワークの外国人雇用サービスセンター（無料）",
            "留学生向けの就職サイト・合同企業説明会"
          ]}
        ]
      }
    ],
    note: "このガイドは2026年10月時点の一般的な情報です。在留資格や制度の詳細は、出入国在留管理庁や学校の国際課で必ず確認してください。"
  },

  en: {
    title: "Student Life Guide",
    lead: "A guide to the things international students in Japan most often struggle with: money, part-time work, finding an apartment, procedures after arrival, and job hunting. Rules can change, so always confirm with your school's international office or the relevant authorities.",
    toc: "Contents",
    sections: [
      {
        id: "money", title: "Money: tuition, living costs and scholarships",
        blocks: [
          { h: "Approximate tuition (per year)", items: [
            "National universities: ¥535,800 standard (up to ¥642,960 at some universities)",
            "Public universities: about the same as national universities",
            "Private universities (science & engineering): about ¥1.4M–1.9M",
            "National KOSEN: ¥234,600",
            "An admission fee is charged on entry (¥282,000 at national universities, about ¥200,000–300,000 at private ones)"
          ]},
          { h: "Approximate living costs (per month)", items: [
            "Large cities such as Tokyo: about ¥120,000–150,000 (including ¥60,000–80,000 rent)",
            "Regional cities: about ¥80,000–100,000",
            "Living in a university dormitory greatly reduces rent"
          ]},
          { h: "Main scholarships", items: [
            "Japanese Government (MEXT) Scholarship: tuition waiver plus a monthly stipend. Apply via the Japanese embassy in your country or through a university",
            "JASSO Monbukagakusho Honors Scholarship: ¥48,000/month (2026). Apply through your school after enrolment",
            "University scholarships and tuition reductions",
            "Private foundation and corporate scholarships"
          ]},
          { h: "Tip", p: "Most scholarships are applied for through your school after enrolment, and deadlines come early. Check with the international student office as soon as you arrive." }
        ]
      },
      {
        id: "work", title: "Part-time work rules",
        blocks: [
          { h: "First, get \"Permission to Engage in Activity Other Than That Permitted\"", p: "You cannot work on a student visa alone. You can apply at the airport when you enter Japan (or later at an Immigration Services Bureau). Once granted, it is noted on the back of your residence card." },
          { h: "Maximum working hours", items: [
            "During term: up to 28 hours per week (no more than 28 hours in any 7-day period)",
            "During long vacations set by your school (e.g. summer): up to 8 hours a day and 40 hours a week",
            "If you have more than one job, the limit applies to your total hours"
          ]},
          { h: "Jobs you must not do", p: "You may not work at adult entertainment businesses such as hostess bars or pachinko parlours — even washing dishes or cleaning." },
          { h: "If you break the rules", p: "Your visa renewal may be refused, or you may be deported. Always stay within the hour limits." },
          { h: "Wages and tax", items: [
            "Minimum wage differs by prefecture and is over ¥1,000/hour everywhere (2025 revision)",
            "Wages are usually paid into a bank account",
            "Depending on your annual income, income tax and resident tax may apply"
          ]}
        ]
      },
      {
        id: "housing", title: "Finding an apartment",
        blocks: [
          { h: "Housing options", items: [
            "University dormitories / international residences: cheap and safe — apply for these first",
            "Private apartments: more freedom, but high move-in costs",
            "Share houses: often furnished with low move-in costs"
          ]},
          { h: "Move-in costs are usually 4–6 months' rent", items: [
            "Shikikin (deposit): returned when you leave, minus repair costs",
            "Reikin (key money): a non-refundable gift to the landlord",
            "Agency fee and first month's rent",
            "Rent guarantee company fee and fire insurance"
          ]},
          { h: "If you have no guarantor", p: "Even without a Japanese guarantor, you can usually rent by using a guarantee company. Some universities offer institutional guarantees or the \"Comprehensive Renters' Insurance for Foreign Students\" — ask your international office." },
          { h: "Search tips", items: [
            "Look for listings marked \"foreigners welcome\" and agencies with multilingual staff",
            "Properties introduced by your university co-op or international office are reliable",
            "You'll need: residence card, student ID or certificate of enrolment, a Japanese phone number, and an emergency contact"
          ]},
          { h: "House rules", items: [
            "Sort rubbish by type and put it out on the designated days",
            "Keep noise down at night — walls are often thin",
            "Subletting or letting others live with you without permission is prohibited",
            "Give 1–2 months' notice before moving out. You may be charged for damage or dirt"
          ]}
        ]
      },
      {
        id: "arrival", title: "Procedures after arrival",
        blocks: [
          { h: "1. Resident registration (within 14 days)", p: "Within 14 days of moving in, register your address at the city or ward office. Your address will be written on the back of your residence card." },
          { h: "2. National Health Insurance", p: "Enrol at the same time as resident registration (it is mandatory). You'll pay only 30% of medical costs. Premiums are reduced for low incomes." },
          { h: "3. National Pension", p: "Everyone aged 20 or over must join. Students can apply for the \"Special Payment System for Students\" to postpone payments while studying." },
          { h: "4. Bank account and mobile phone", p: "After registering, bring your residence card to open accounts. For the first six months after arrival, some bank account functions may be restricted." },
          { h: "5. My Number", p: "After registration you'll be notified of your 12-digit Individual Number (My Number). Keep it safe — you'll need it for part-time jobs and tax procedures." }
        ]
      },
      {
        id: "job", title: "Job Hunting Guide",
        intro: "Many international students want to work in Japan. Getting used to Japan's unique job-hunting system early is the fastest path to a job offer. Below is the typical schedule for a four-year university.",
        timelineTitle: "Job-hunting schedule (typical)",
        timeline: [
          ["Year 3, Jun–Sep", "Summer internships — sometimes linked directly to hiring. Start self-analysis and industry research."],
          ["Year 3, Oct–Feb", "Autumn/winter internships and alumni visits. Aim for JLPT N1 or N2."],
          ["Year 3, March", "Company information sessions and applications open. Submit entry sheets (ES)."],
          ["Year 4, from June", "Interviews and selection in full swing (many companies actually start earlier)."],
          ["Year 4, October", "Many companies hold offer ceremonies. You start work the April after graduating."],
          ["Before graduating", "Apply to change your status of residence from \"Student\" to a work status such as \"Engineer/Specialist in Humanities/International Services\"."]
        ],
        stepsTitle: "Selection process",
        steps: ["Self-analysis", "Industry & company research", "Entry sheet", "Aptitude test (e.g. SPI)", "Group discussion", "Interviews (2–4 rounds)", "Job offer"],
        blocks: [
          { h: "Tips for getting an offer", items: [
            "Start early: summer internships in year 3 are the real starting line. International students often get information late, so be careful",
            "Make your Japanese visible: get JLPT N1 (at least N2). Practise keigo (polite language) and \"conclusion first\" answers for interviews",
            "Have a Japanese speaker check your entry sheets",
            "Be ready to explain specifically why you want to work for a Japanese company and whether you plan to stay long-term",
            "Show clear strengths: native language + Japanese + English, and tech skills such as programming, AI and data analysis, which are in short supply",
            "Don't apply only to big companies — try mid-sized firms with overseas business, IT companies and foreign-owned companies too"
          ]},
          { h: "Visa (status of residence) points", items: [
            "A work visa requires that your job is related to what you studied. Simple labour unrelated to your major will not be approved",
            "If you have no offer by graduation, with your school's recommendation you can stay up to one more year under \"Designated Activities\" to keep job hunting",
            "KOSEN and graduate students follow the same basic process. In science and engineering graduate schools, jobs are often found through lab or professor recommendations"
          ]},
          { h: "Where to get help", items: [
            "Your school's career center and international office (mock interviews and ES checks)",
            "Employment Service Centers for Foreigners at Hello Work (free)",
            "Job sites and career fairs for international students"
          ]}
        ]
      }
    ],
    note: "This guide reflects general information as of October 2026. Always confirm visa and system details with the Immigration Services Agency of Japan or your school's international office."
  },

  zh: {
    title: "留学生活指南",
    lead: "汇总了在日本学习的外国留学生最容易遇到困难的方面：资金、打工、租房、抵达后的手续以及求职。制度可能会有变化，请务必向学校国际处或相关公共机构确认。",
    toc: "目录",
    sections: [
      {
        id: "money", title: "资金：学费・生活费・奖学金",
        blocks: [
          { h: "学费参考（每年）", items: [
            "国立大学：标准为535,800日元（部分大学最高642,960日元）",
            "公立大学：与国立大学大致相同",
            "私立大学（理工科）：约140万〜190万日元",
            "国立高专：234,600日元",
            "入学时另需缴纳入学金（国立大学282,000日元，私立约20万〜30万日元）"
          ]},
          { h: "生活费参考（每月）", items: [
            "东京等大城市：约12万〜15万日元（含房租6万〜8万日元）",
            "地方城市：约8万〜10万日元",
            "入住大学宿舍可大幅降低房租"
          ]},
          { h: "主要奖学金", items: [
            "日本政府（文部科学省）奖学金：免除学费＋每月奖学金。通过本国日本大使馆或大学申请",
            "JASSO学习奖励费：每月48,000日元（2026年度）。入学后通过学校申请",
            "校内奖学金・学费减免",
            "民间财团・企业奖学金"
          ]},
          { h: "要点", p: "大部分奖学金需在入学后通过学校申请，且截止日期较早。入学后请尽快到国际处（留学生科）确认招募信息。" }
        ]
      },
      {
        id: "work", title: "打工规定",
        blocks: [
          { h: "首先需要“资格外活动许可”", p: "仅凭留学签证不能打工。入境时可在机场申请（入境后可到出入国在留管理局申请）。获得许可后会记载在在留卡背面。" },
          { h: "工作时间上限", items: [
            "上课期间：每周28小时以内（从任何一天起算的7天内不超过28小时）",
            "暑假等学校规定的长假期间：每天8小时、每周40小时以内",
            "即使兼职多份工作，也按合计时间计算上限"
          ]},
          { h: "禁止从事的工作", p: "不能在酒吧、夜总会、柏青哥店等风俗营业相关场所工作，即使是洗碗或清洁工作也不行。" },
          { h: "违反规定的后果", p: "可能无法更新在留期间，甚至被强制遣返。请务必遵守时间上限。" },
          { h: "时薪与税金", items: [
            "最低工资因都道府县而异，全国均在时薪1,000日元以上（2025年度调整）",
            "工资一般通过银行账户发放",
            "根据年收入可能需要缴纳所得税和住民税"
          ]}
        ]
      },
      {
        id: "housing", title: "租房",
        blocks: [
          { h: "住房选择", items: [
            "大学宿舍・留学生公寓：房租便宜且安心，建议优先申请",
            "民间公寓：自由度高，但初期费用较高",
            "合租房（Share House）：多带家具，初期费用通常较低"
          ]},
          { h: "初期费用约为4〜6个月房租", items: [
            "敷金（押金）：退房时扣除修缮费后退还",
            "礼金：给房东的谢礼，不退还",
            "中介费、首月房租",
            "担保公司担保费、火灾保险费"
          ]},
          { h: "没有担保人时", p: "即使没有日本人连带担保人，利用担保公司通常也能租到房子。部分大学会介绍机构担保或“留学生住宅综合补偿”，请咨询国际处。" },
          { h: "找房技巧", items: [
            "选择标有“外国人可”“欢迎留学生”的房源或提供多语言服务的房产中介",
            "大学生协或国际处介绍的房源更放心",
            "所需材料：在留卡、学生证或在学证明、日本电话号码、紧急联系人"
          ]},
          { h: "入住后的礼仪", items: [
            "垃圾需按种类分类，在指定日期投放",
            "夜间注意噪音（很多建筑墙壁较薄）",
            "禁止转租或擅自与合同以外的人同住",
            "退房需提前1〜2个月通知。房间损坏或污渍可能会被收取修缮费"
          ]}
        ]
      },
      {
        id: "arrival", title: "抵达后的手续",
        blocks: [
          { h: "1. 住民登记（14天以内）", p: "确定住处后14天内，到市区町村政府办理迁入登记。住址会记载在在留卡背面。" },
          { h: "2. 国民健康保险", p: "办理住民登记时同时加入（义务）。看病时个人只需负担30%的医疗费。收入较低时保险费可减免。" },
          { h: "3. 国民年金", p: "20岁以上需加入。学生申请“学生缴纳特例”后，在学期间可暂缓缴纳。" },
          { h: "4. 银行账户・手机", p: "完成住民登记后，携带在留卡办理。入境未满6个月期间，账户功能可能受到限制。" },
          { h: "5. 个人编号（My Number）", p: "完成住民登记后会收到12位个人编号。打工和办理税务手续时需要使用，请妥善保管。" }
        ]
      },
      {
        id: "job", title: "求职指南",
        intro: "希望在日本工作的留学生很多，尽早熟悉日本独特的求职方式是获得录用的捷径。以下介绍四年制大学的一般流程。",
        timelineTitle: "求职日程（参考）",
        timeline: [
          ["大三 6〜9月", "暑期实习，有时直接与选拔挂钩。开始自我分析和行业研究。"],
          ["大三 10〜2月", "秋冬实习、拜访校友（OB・OG）。争取取得日语能力考试N1・N2。"],
          ["大三 3月", "企业说明会和报名正式开始，提交报名表（ES）。"],
          ["大四 6月〜", "面试等选拔全面展开（实际上很多企业更早开始选拔）。"],
          ["大四 10月", "许多企业举行内定仪式，毕业后的4月入职。"],
          ["毕业前", "申请将在留资格从“留学”变更为可工作的资格（如“技术・人文知识・国际业务”）。"]
        ],
        stepsTitle: "选拔流程",
        steps: ["自我分析", "行业・企业研究", "报名表（ES）", "能力测试（SPI等）", "小组讨论", "面试（2〜4轮）", "获得内定"],
        blocks: [
          { h: "提高录用率的技巧", items: [
            "尽早开始：大三暑期实习才是真正的起点。留学生容易信息滞后，需特别注意",
            "让日语能力“看得见”：取得日语能力考试N1（至少N2）。面试时练习敬语和“先说结论”",
            "报名表（ES）请日本人帮忙修改",
            "能具体说明“为什么想在日本企业工作”“是否打算长期工作”",
            "明确展示优势：母语＋日语＋英语，以及编程、AI、数据分析等人才紧缺的技术能力",
            "不只投大企业，也可报考开展海外业务的中型企业、IT企业和外资企业"
          ]},
          { h: "签证（在留资格）注意事项", items: [
            "工作签证要求“工作内容与所学专业相关”，与专业无关的简单劳动不会获批",
            "毕业前未获内定时，如有学校推荐，可通过“特定活动”在留资格在毕业后最多继续求职1年",
            "高专和研究生的基本流程相同。理工科研究生通过研究室或教授推荐就业的情况也很多"
          ]},
          { h: "可以咨询的地方", items: [
            "学校的就业指导中心・国际处（可提供模拟面试和ES修改）",
            "Hello Work（公共职业安定所）的外国人雇佣服务中心（免费）",
            "面向留学生的求职网站・企业联合说明会"
          ]}
        ]
      }
    ],
    note: "本指南为截至2026年10月的一般信息。在留资格及制度详情请务必向日本出入国在留管理厅或学校国际处确认。"
  }
};
