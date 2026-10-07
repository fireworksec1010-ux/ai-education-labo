(function () {
  "use strict";

  var LANGS = ["ja", "en", "zh"];
  var TYPE_GROUP = {
    "univ-national": "univ", "univ-public": "univ", "univ-private": "univ", "univ-grad": "univ",
    "kosen": "kosen", "high": "high"
  };
  var FIELD_ORDER = ["prog", "ai", "robot", "semi", "security", "space", "design", "startup"];
  var REGION_ORDER = ["hokkaido-tohoku", "kanto", "chubu", "kinki", "chugoku-shikoku", "kyushu-okinawa", "online"];

  var schools = window.SCHOOLS || [];
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
    history.replaceState(null, "", location.pathname + "?" + params.toString());
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

  function fieldTags(s) {
    return s.fields.map(function (f) {
      return '<span class="tag tag-' + f + '">' + esc(t.fieldNames[f]) + "</span>";
    }).join("");
  }

  function typeBadge(s) {
    return '<span class="badge badge-' + TYPE_GROUP[s.type] + '">' + esc(t.typeNames[s.type]) + "</span>";
  }

  function englishBadge(s) {
    return s.english ? '<span class="badge badge-en">' + esc(t.englishYes) + "</span>" : "";
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
    var disc = document.getElementById("disclaimer");
    if (disc) disc.textContent = t.disclaimer.replace("{date}", fmtDate(window.DATA_DATE));
    document.querySelectorAll("a[data-home]").forEach(function (a) { a.href = "index.html?lang=" + lang; });
  }

  // ---------- 一覧ページ ----------
  var state = { q: "", group: "all", field: "all", region: "all", english: false };

  function chip(name, value, label, active) {
    return '<button type="button" class="chip" data-filter="' + name + '" data-value="' + value +
      '" aria-pressed="' + (active ? "true" : "false") + '">' + esc(label) + "</button>";
  }

  function renderFilters() {
    var g = chip("group", "all", t.all, state.group === "all");
    ["univ", "kosen", "high"].forEach(function (k) { g += chip("group", k, t.typeGroups[k], state.group === k); });
    document.getElementById("f-group").innerHTML = g;

    var f = chip("field", "all", t.all, state.field === "all");
    FIELD_ORDER.forEach(function (k) { f += chip("field", k, t.fieldNames[k], state.field === k); });
    document.getElementById("f-field").innerHTML = f;

    var sel = document.getElementById("f-region");
    var opts = '<option value="all">' + esc(t.all) + "</option>";
    REGION_ORDER.forEach(function (k) {
      opts += '<option value="' + k + '"' + (state.region === k ? " selected" : "") + ">" + esc(t.regionNames[k]) + "</option>";
    });
    sel.innerHTML = opts;
    document.getElementById("f-english").checked = state.english;
  }

  function matches(s) {
    if (state.group !== "all" && TYPE_GROUP[s.type] !== state.group) return false;
    if (state.field !== "all" && s.fields.indexOf(state.field) < 0) return false;
    if (state.region !== "all" && s.region !== state.region) return false;
    if (state.english && !s.english) return false;
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
    document.getElementById("stat-english").textContent = schools.filter(function (s) { return s.english; }).length;

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
    document.getElementById("f-english").addEventListener("change", function (e) { state.english = e.target.checked; renderList(); });
    document.getElementById("reset").addEventListener("click", function () {
      state = { q: "", group: "all", field: "all", region: "all", english: false };
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

    var others = LANGS.filter(function (l) { return l !== lang; })
      .map(function (l) { return esc(s.name[l]); }).join(" / ");

    var fields = s.fields.map(function (f) {
      return '<li><span class="tag tag-' + f + '">' + esc(t.fieldNames[f]) + "</span>" +
        '<span class="field-desc">' + esc(t.fieldDesc[f]) + "</span></li>";
    }).join("");

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
        "<dt>" + esc(t.englishLabel) + "</dt><dd>" + esc(s.englishNote[lang]) + "</dd>" +
        "<dt>" + esc(t.filterField) + '</dt><dd><ul class="detail-fields">' + fields + "</ul></dd>" +
        "<dt>" + esc(t.website) + '</dt><dd><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + " ↗</a></dd>" +
        "<dt>" + esc(t.checked) + "</dt><dd>" + esc(fmtDate(s.checked)) + "</dd>" +
      "</dl>" +
      (related.length
        ? '<section class="related"><h2>' + esc(t.related) + '</h2><div class="cards">' + related.map(card).join("") + "</div></section>"
        : "");
  }

  // ---------- 起動 ----------
  var page = document.body.getAttribute("data-page");

  function render() {
    renderChrome();
    if (page === "index") {
      document.title = t.siteName + " | " + t.siteSub;
      renderIndexStatic(); renderFilters(); renderList();
    } else {
      renderDetail();
    }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  if (page === "index") bindIndex();
  render();
})();
