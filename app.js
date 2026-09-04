(function () {
  "use strict";

  var D = window.SCREEN_DATA;
  var STORAGE_KEY = "screen.session.v1";

  // ---- helpers ----
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function sample(arr, n) {
    var copy = arr.slice(), out = [];
    while (out.length < n && copy.length) {
      out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
    }
    return out;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // ---- state ----
  var log = load();
  var current = null;   // the currently displayed generation
  var lastGen = null;   // key of last generator used, for Reroll

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(log)); } catch (e) {}
  }

  // ---- generators ----
  function genNPC() {
    var name = rand(D.npcFirstNames) + " " + rand(D.npcSurnames);
    var role = rand(D.npcRoles);
    var trait = rand(D.npcTraits);
    var voice = rand(D.npcVoices);
    var want = rand(D.npcWants);
    var secret = rand(D.npcSecrets);
    var html =
      "<h3>" + esc(name) + "</h3>" +
      '<p class="meta">' + esc(role) + "</p>" +
      "<ul>" +
      "<li><strong>Personality:</strong> " + esc(trait) + "</li>" +
      "<li><strong>Voice:</strong> " + esc(voice) + "</li>" +
      "<li><strong>Wants:</strong> " + esc(want) + "</li>" +
      "<li><strong>Secret:</strong> " + esc(secret) + "</li>" +
      "</ul>";
    var summary = name + " (" + role + ") - wants " + want + "; secret: " + secret + ".";
    return { kind: "NPC", summary: summary, html: html };
  }

  function genRumors() {
    var t = rand(D.rumorsTrue), f = rand(D.rumorsFalse), m = rand(D.rumorsMisleading);
    var html =
      "<ul>" +
      '<li><span class="tag true">True</span>' + esc(t) + "</li>" +
      '<li><span class="tag false">False</span>' + esc(f) + "</li>" +
      '<li><span class="tag misleading">Misleading</span>' + esc(m) + "</li>" +
      "</ul>";
    var summary = "Rumors -- TRUE: " + t + " | FALSE: " + f + " | MISLEADING: " + m;
    return { kind: "Tavern Rumors", summary: summary, html: html };
  }

  function genShop() {
    var keeper = rand(D.shopkeepers);
    var items = sample(D.shopItems, 4).map(function (it) {
      var price = it.low + Math.floor(Math.random() * (it.high - it.low + 1));
      return { name: it.name, price: price + " " + it.unit };
    });
    var html =
      '<p class="meta">Run by ' + esc(keeper) + "</p>" +
      "<ul>" + items.map(function (it) {
        return "<li>" + esc(it.name) + " - <strong>" + esc(it.price) + "</strong></li>";
      }).join("") + "</ul>";
    var summary = "Shop run by " + keeper + " -- " +
      items.map(function (i) { return i.name + " (" + i.price + ")"; }).join(", ") + ".";
    return { kind: "Quick Shop", summary: summary, html: html };
  }

  function genComplication() {
    var c = rand(D.complications);
    var html = '<p style="font-size:17px;margin:0">' + esc(c) + "</p>";
    return { kind: "Complication", summary: "Complication: " + c, html: html };
  }

  var GENERATORS = { npc: genNPC, rumors: genRumors, shop: genShop, complication: genComplication };

  // ---- result rendering ----
  var resultCard = document.getElementById("resultCard");
  var resultKind = document.getElementById("resultKind");
  var resultBody = document.getElementById("resultBody");

  function generate(key) {
    lastGen = key;
    current = GENERATORS[key]();
    resultKind.textContent = current.kind;
    resultBody.innerHTML = current.html;
    resultCard.classList.remove("hidden");
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- session log ----
  var sessionLog = document.getElementById("sessionLog");
  var logCount = document.getElementById("logCount");
  var emptyState = document.getElementById("emptyState");

  function addEntry(flag, text, kind) {
    log.unshift({
      id: Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      flag: flag,
      kind: kind || "Note",
      text: text,
      ts: Date.now()
    });
    save();
    renderLog();
  }

  function fmtTime(ts) {
    var d = new Date(ts), h = d.getHours(), m = d.getMinutes();
    var ap = h >= 12 ? "PM" : "AM";
    h = h % 12; if (h === 0) h = 12;
    return h + ":" + (m < 10 ? "0" + m : m) + " " + ap;
  }

  function renderLog() {
    logCount.textContent = log.length;
    emptyState.style.display = log.length ? "none" : "block";
    sessionLog.innerHTML = log.map(function (e) {
      return '<li class="log-item">' +
        '<span class="badge ' + e.flag + '">' + esc(e.flag) + "</span>" +
        '<span class="txt">' + esc(e.text) +
          '<div class="time">' + fmtTime(e.ts) + "</div></span>" +
        '<button class="del" aria-label="Delete entry" data-del="' + e.id + '">&times;</button>' +
        "</li>";
    }).join("");
  }

  // ---- recap ----
  function buildRecap() {
    if (!log.length) return "No beats logged yet this session.";
    var chrono = log.slice().sort(function (a, b) { return a.ts - b.ts; });
    var by = function (flag) { return chrono.filter(function (e) { return e.flag === flag; }); };
    var section = function (title, entries) {
      if (!entries.length) return "";
      return title + "\n" + entries.map(function (e) { return "  - " + e.text; }).join("\n") + "\n\n";
    };
    var out = "PREVIOUSLY ON YOUR CAMPAIGN\n\n";
    out += section("What happened:", by("remember"));
    out += section("Also of note:", by("note"));
    out += section("Still unresolved:", by("unresolved"));
    out += section("Threads to call back:", by("callback"));
    return out.trim();
  }

  // ---- wiring ----
  document.querySelectorAll(".panic-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { generate(btn.getAttribute("data-gen")); });
  });

  document.getElementById("regenBtn").addEventListener("click", function () {
    if (lastGen) generate(lastGen);
  });

  document.querySelectorAll(".flag-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!current) return;
      addEntry(btn.getAttribute("data-flag"), current.summary, current.kind);
      flash(btn);
    });
  });

  var logInput = document.getElementById("logInput");
  document.getElementById("logBtn").addEventListener("click", logNote);
  logInput.addEventListener("keydown", function (e) { if (e.key === "Enter") logNote(); });
  function logNote() {
    var v = logInput.value.trim();
    if (!v) return;
    addEntry("note", v, "Note");
    logInput.value = "";
    logInput.focus();
  }

  sessionLog.addEventListener("click", function (e) {
    var id = e.target.getAttribute && e.target.getAttribute("data-del");
    if (!id) return;
    log = log.filter(function (x) { return x.id !== id; });
    save();
    renderLog();
  });

  document.getElementById("clearBtn").addEventListener("click", function () {
    if (log.length && confirm("Clear the whole session log?")) {
      log = []; save(); renderLog();
    }
  });

  var recapModal = document.getElementById("recapModal");
  var recapText = document.getElementById("recapText");
  document.getElementById("recapBtn").addEventListener("click", function () {
    recapText.textContent = buildRecap();
    recapModal.classList.remove("hidden");
  });
  document.getElementById("closeRecap").addEventListener("click", function () {
    recapModal.classList.add("hidden");
  });
  recapModal.addEventListener("click", function (e) {
    if (e.target === recapModal) recapModal.classList.add("hidden");
  });
  document.getElementById("copyRecap").addEventListener("click", function () {
    if (navigator.clipboard) navigator.clipboard.writeText(recapText.textContent);
  });

  function flash(btn) {
    btn.style.opacity = ".5";
    setTimeout(function () { btn.style.opacity = ""; }, 150);
  }

  renderLog();
})();
