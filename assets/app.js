(function () {
  "use strict";

  var LANGS = ["ja", "en", "zh"];
  var TYPE_GROUP = {
    "univ-national": "univ", "univ-public": "univ", "univ-private": "univ", "univ-grad": "univ",
    "kosen": "kosen", "high": "high"
  };
  var FIELD_ORDER = ["prog", "ai", "robot", "semi", "security", "space", "design", "startup"];
  var REGION_ORDER = ["hokkaido-tohoku", "kanto", "chubu", "kinki", "chugoku-shikoku", "kyushu-okinawa", "online"];

  // 学校データに留学生向け情報（study-info.js）をまとめる
  var schools = (window.SCHOOLS || []).map(function (s) {
    s.study = (window.STUDY_INFO || {})[s.id] || { english: "none", tuition: null, scholarship: "univ", dorm: "check" };
    return s;
  });
  var lang = detectLang();
  var t = window.I18N[lang];

  // ---------- 共通 ----------
  function detectLang() {
    var p = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(p) >= 0) return p;
    try {
      var s = localStorage.getItem("tcj-lang");
      if (LANGS.indexOf(s) >= 0) return s;
    } catch (e) { /* ストレージ不可でも動作させる */ }
    var nav = (navigator.language || "").toLowerCase();
    if (nav.indexOf("ja") === 0) return "ja";
    if (nav.indexOf("zh") === 0) return "zh";
    return "en";
  }

  function setLang(l) {
    lang = l;
    t = window.I18N[lang];
    try { localStorage.setItem("tcj-lang", l); } catch (e) { /* noop */ }
    var params = new URLSearchParams(location.search);
    params.set("lang", l);
    history.replaceState(null, "", location.pathname + "?" + params.toString() + location.hash);
    render();
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fmtDate(ym) {
    var p = ym.split("-");
    if (lang === "en") {
      var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return m[parseInt(p[1], 10) - 1] + " " + p[0];
    }
    return p[0] + "年" + parseInt(p[1], 10) + "月";
  }

  function schoolUrl(s) { return "school.html?id=" + encodeURIComponent(s.id) + "&lang=" + lang; }

  // 現在の言語以外の名前（サブ表示用）
  function altName(s) { return lang === "ja" ? s.name.en : s.name.ja; }

  // 文字列なら共通文のキー、オブジェクトなら3言語の文
  function note(v, table) {
    if (!v) return "";
    return typeof v === "string" ? (table[v] || "") : (v[lang] || "");
  }

  function englishText(s) {
    var lv = s.study.english;
    return note(s.study.englishNote, t.sharedNotes) || t.englishLevelNotes[lv] || t.englishLevels[lv];
  }

  function tuitionShort(s) {
    var n = s.study.tuition;
    if (n === null || n === undefined) return t.tuitionUnknown;
    if (n === 0) return t.tuitionFree;
    return t.yenShort(n) + t.tuitionPerYear;
  }

  function tuitionFull(s) {
    var n = s.study.tuition;
    if (n === null || n === undefined) return t.tuitionUnknown;
    if (n === 0) return t.tuitionFree;
    return t.yen(n) + t.tuitionPerYear;
  }

  function fieldTags(s) {
    return s.fields.map(function (f) {
      return '<span class="tag tag-' + f + '">' + esc(t.fieldNames[f]) + "</span>";
    }).join("");
  }

  function typeBadge(s) {
    return '<span class="badge badge-' + TYPE_GROUP[s.type] + '">' + esc(t.typeNames[s.type]) + "</span>";
  }

  function englishBadge(s) {
    var lv = s.study.english;
    return lv === "none" ? "" : '<span class="badge badge-en badge-en-' + lv + '">' + esc(t.englishShort[lv]) + "</span>";
  }

  function renderChrome() {
    document.documentElement.lang = t.htmlLang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t[el.getAttribute("data-i18n")];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.placeholder = t[el.getAttribute("data-i18n-ph")];
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    // ページ間リンクに言語を引き継ぐ
    document.querySelectorAll("a[data-link]").forEach(function (a) {
      var parts = a.getAttribute("data-link").split("#");
      a.href = parts[0] + "?lang=" + lang + (parts[1] ? "#" + parts[1] : "");
    });
    var disc = document.getElementById("disclaimer");
    if (disc) disc.textContent = t.disclaimer.replace("{date}", fmtDate(window.DATA_DATE));
  }

  // ---------- 一覧ページ ----------
  function emptyState() { return { q: "", group: "all", field: "all", region: "all", english: "all", dorm: false }; }
  var state = emptyState();

  function chip(name, value, label, active) {
    return '<button type="button" class="chip" data-filter="' + name + '" data-value="' + value +
      '" aria-pressed="' + (active ? "true" : "false") + '">' + esc(label) + "</button>";
  }

  function options(keys, labelOf, current) {
    return keys.map(function (k) {
      return '<option value="' + k + '"' + (current === k ? " selected" : "") + ">" + esc(labelOf(k)) + "</option>";
    }).join("");
  }

  function renderFilters() {
    var g = chip("group", "all", t.all, state.group === "all");
    ["univ", "kosen", "high"].forEach(function (k) { g += chip("group", k, t.typeGroups[k], state.group === k); });
    document.getElementById("f-group").innerHTML = g;

    var f = chip("field", "all", t.all, state.field === "all");
    FIELD_ORDER.forEach(function (k) { f += chip("field", k, t.fieldNames[k], state.field === k); });
    document.getElementById("f-field").innerHTML = f;

    document.getElementById("f-region").innerHTML =
      options(["all"].concat(REGION_ORDER), function (k) { return k === "all" ? t.all : t.regionNames[k]; }, state.region);
    document.getElementById("f-english").innerHTML =
      options(["all", "undergrad", "grad", "any"], function (k) { return t.filterEnglishOpts[k]; }, state.english);
    document.getElementById("f-dorm").checked = state.dorm;
  }

  function matchesEnglish(lv) {
    switch (state.english) {
      case "undergrad": return lv === "undergrad";
      case "grad": return lv === "undergrad" || lv === "grad";
      case "any": return lv !== "none";
      default: return true;
    }
  }

  function matches(s) {
    if (state.group !== "all" && TYPE_GROUP[s.type] !== state.group) return false;
    if (state.field !== "all" && s.fields.indexOf(state.field) < 0) return false;
    if (state.region !== "all" && s.region !== state.region) return false;
    if (!matchesEnglish(s.study.english)) return false;
    if (state.dorm && s.study.dorm !== "yes") return false;
    if (state.q) {
      var hay = [s.name.ja, s.name.en, s.name.zh, s.programs[lang], s.desc[lang], s.pref[lang]]
        .concat(s.fields.map(function (f) { return t.fieldNames[f]; }))
        .join(" ").toLowerCase();
      var words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) < 0) return false;
    }
    return true;
  }

  function card(s) {
    return '<article class="card">' +
      '<div class="card-badges">' + typeBadge(s) + englishBadge(s) + "</div>" +
      '<h3 class="card-title"><a href="' + schoolUrl(s) + '">' + esc(s.name[lang]) + "</a></h3>" +
      '<p class="card-alt">' + esc(altName(s)) + "</p>" +
      '<p class="card-pref">' + esc(s.pref[lang]) + "</p>" +
      '<p class="card-desc">' + esc(s.desc[lang]) + "</p>" +
      '<div class="tags">' + fieldTags(s) + "</div>" +
      '<p class="card-meta"><span>' + esc(t.tuitionCard) + " " + esc(tuitionShort(s)) + "</span>" +
        '<span class="dorm dorm-' + s.study.dorm + '">' + esc(t.dormNames[s.study.dorm]) + "</span></p>" +
      "</article>";
  }

  function renderList() {
    var list = schools.filter(matches);
    document.getElementById("result-count").textContent = t.resultCount.replace("{n}", list.length);
    document.getElementById("cards").innerHTML = list.length
      ? list.map(card).join("")
      : '<p class="empty">' + esc(t.noResults) + "</p>";
  }

  function renderIndexStatic() {
    document.getElementById("stat-schools").textContent = schools.length;
    document.getElementById("stat-english").textContent =
      schools.filter(function (s) { return s.study.english === "undergrad"; }).length;

    document.getElementById("fields-grid").innerHTML = FIELD_ORDER.map(function (k) {
      return '<button type="button" class="field-card tag-' + k + '" data-jump-field="' + k + '">' +
        '<span class="field-name">' + esc(t.fieldNames[k]) + "</span>" +
        '<span class="field-desc">' + esc(t.fieldDesc[k]) + "</span></button>";
    }).join("");

    document.getElementById("guide-grid").innerHTML = t.guide.map(function (g) {
      return '<div class="guide-item"><h3>' + esc(g[0]) + "</h3><p>" + esc(g[1]) + "</p></div>";
    }).join("");
  }

  function bindIndex() {
    document.getElementById("filters").addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      state[b.getAttribute("data-filter")] = b.getAttribute("data-value");
      renderFilters(); renderList();
    });
    document.getElementById("q").addEventListener("input", function (e) { state.q = e.target.value.trim(); renderList(); });
    document.getElementById("f-region").addEventListener("change", function (e) { state.region = e.target.value; renderList(); });
    document.getElementById("f-english").addEventListener("change", function (e) { state.english = e.target.value; renderList(); });
    document.getElementById("f-dorm").addEventListener("change", function (e) { state.dorm = e.target.checked; renderList(); });
    document.getElementById("reset").addEventListener("click", function () {
      state = emptyState();
      document.getElementById("q").value = "";
      renderFilters(); renderList();
    });
    document.getElementById("fields-grid").addEventListener("click", function (e) {
      var b = e.target.closest("[data-jump-field]");
      if (!b) return;
      state.field = b.getAttribute("data-jump-field");
      renderFilters(); renderList();
      document.getElementById("schools").scrollIntoView({ behavior: "smooth" });
    });
  }

  // ---------- 詳細ページ ----------
  function renderDetail() {
    var id = new URLSearchParams(location.search).get("id");
    var s = schools.filter(function (x) { return x.id === id; })[0];
    var root = document.getElementById("detail");
    if (!s) {
      root.innerHTML = '<p class="empty">' + esc(t.notFound) + "</p>";
      document.title = t.siteName;
      return;
    }
    document.title = s.name[lang] + " | " + t.siteName;
    var st = s.study;

    var others = LANGS.filter(function (l) { return l !== lang; })
      .map(function (l) { return esc(s.name[l]); }).join(" / ");

    var fields = s.fields.map(function (f) {
      return '<li><span class="tag tag-' + f + '">' + esc(t.fieldNames[f]) + "</span>" +
        '<span class="field-desc">' + esc(t.fieldDesc[f]) + "</span></li>";
    }).join("");

    var tuitionNote = note(st.tuitionNote, t.sharedNotes);
    var dormNote = note(st.dormNote, {});

    var related = schools.filter(function (x) {
      return x.id !== s.id && x.fields.some(function (f) { return s.fields.indexOf(f) >= 0; });
    }).sort(function (a, b) {
      var ca = a.fields.filter(function (f) { return s.fields.indexOf(f) >= 0; }).length;
      var cb = b.fields.filter(function (f) { return s.fields.indexOf(f) >= 0; }).length;
      return cb - ca;
    }).slice(0, 3);

    root.innerHTML =
      '<div class="detail-head">' +
        '<div class="card-badges">' + typeBadge(s) + englishBadge(s) + "</div>" +
        "<h1>" + esc(s.name[lang]) + "</h1>" +
        '<p class="detail-alt">' + others + "</p>" +
        '<p class="detail-pref">' + esc(s.pref[lang]) + " · " + esc(t.regionNames[s.region]) + "</p>" +
      "</div>" +
      '<p class="detail-desc">' + esc(s.desc[lang]) + "</p>" +
      '<dl class="detail-list">' +
        "<dt>" + esc(t.programs) + "</dt><dd>" + esc(s.programs[lang]) + "</dd>" +
        "<dt>" + esc(t.filterField) + '</dt><dd><ul class="detail-fields">' + fields + "</ul></dd>" +
        "<dt>" + esc(t.website) + '</dt><dd><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + " ↗</a></dd>" +
      "</dl>" +
      '<h2 class="detail-sub">' + esc(t.studyInfoTitle) + "</h2>" +
      '<dl class="detail-list">' +
        "<dt>" + esc(t.englishLevelLabel) + '</dt><dd><strong class="level level-' + st.english + '">' +
          esc(t.englishLevels[st.english]) + "</strong><br>" + esc(englishText(s)) + "</dd>" +
        "<dt>" + esc(t.tuitionLabel) + "</dt><dd><strong>" + esc(tuitionFull(s)) + "</strong>" +
          (tuitionNote ? "<br>" + esc(tuitionNote) : "") +
          '<br><small class="muted">' + esc(t.tuitionFootnote) + "</small></dd>" +
        "<dt>" + esc(t.scholarshipLabel) + "</dt><dd>" + esc(note(st.scholarship, t.scholarshipTexts)) + "</dd>" +
        "<dt>" + esc(t.dormLabel) + "</dt><dd>" + esc(t.dormDetail[st.dorm]) + (dormNote ? "<br>" + esc(dormNote) : "") + "</dd>" +
        "<dt>" + esc(t.checked) + "</dt><dd>" + esc(fmtDate(s.checked)) + "</dd>" +
      "</dl>" +
      '<p class="detail-guide-link"><a data-link="guide.html">' + esc(t.ctaGuide) + " →</a></p>" +
      (related.length
        ? '<section class="related"><h2>' + esc(t.related) + '</h2><div class="cards">' + related.map(card).join("") + "</div></section>"
        : "");
  }

  // ---------- 留学生活ガイド ----------
  function renderBlocks(blocks) {
    return (blocks || []).map(function (b) {
      var body = b.items
        ? "<ul>" + b.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>"
        : "<p>" + esc(b.p) + "</p>";
      return '<div class="g-block"><h3>' + esc(b.h) + "</h3>" + body + "</div>";
    }).join("");
  }

  function renderGuide() {
    var g = window.GUIDE[lang];
    document.title = g.title + " | " + t.siteName;
    var toc = g.sections.map(function (sec) {
      return '<li><a href="#' + sec.id + '">' + esc(sec.title) + "</a></li>";
    }).join("");

    var body = g.sections.map(function (sec) {
      var extra = "";
      if (sec.timeline) {
        extra += "<h3>" + esc(sec.timelineTitle) + '</h3><ol class="timeline">' +
          sec.timeline.map(function (r) {
            return '<li><span class="tl-when">' + esc(r[0]) + '</span><span class="tl-what">' + esc(r[1]) + "</span></li>";
          }).join("") + "</ol>";
      }
      if (sec.steps) {
        extra += "<h3>" + esc(sec.stepsTitle) + '</h3><ol class="steps">' +
          sec.steps.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>";
      }
      return '<section class="g-section" id="' + sec.id + '"><h2>' + esc(sec.title) + "</h2>" +
        (sec.intro ? '<p class="g-intro">' + esc(sec.intro) + "</p>" : "") +
        extra + '<div class="g-blocks">' + renderBlocks(sec.blocks) + "</div></section>";
    }).join("");

    document.getElementById("guide").innerHTML =
      "<h1>" + esc(g.title) + '</h1><p class="g-lead">' + esc(g.lead) + "</p>" +
      '<nav class="g-toc"><strong>' + esc(g.toc) + "</strong><ol>" + toc + "</ol></nav>" +
      body + '<p class="g-note">' + esc(g.note) + "</p>";

    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }

  // ---------- 起動 ----------
  var page = document.body.getAttribute("data-page");

  function render() {
    renderChrome();
    if (page === "index") {
      document.title = t.siteName + " | " + t.siteSub;
      renderIndexStatic(); renderFilters(); renderList();
    } else if (page === "guide") {
      renderGuide();
    } else {
      renderDetail();
    }
    renderChrome(); // 動的に追加したリンクにも言語を反映
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  if (page === "index") bindIndex();
  render();
})();
