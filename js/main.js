/**
 * Substitua aqui antes de publicar (só dígitos no WhatsApp: 55 + DDD + número).
 */
var SPARTAN = {
  whatsapp: "5586999999999",
  waMessage: "Quero estrutura digital para minha empresa",
  formSubmitEmail: "seu-email@dominio.com",
};

(function () {
  function digitsOnly(s) {
    return String(s || "").replace(/\D/g, "");
  }

  function waHref() {
    var n = digitsOnly(SPARTAN.whatsapp);
    if (!n) n = "5586999999999";
    var t = encodeURIComponent(SPARTAN.waMessage || "Olá");
    return "https://wa.me/" + n + "?text=" + t;
  }

  function waHrefWithMessage(msg) {
    var n = digitsOnly(SPARTAN.whatsapp);
    if (!n) n = "5586999999999";
    var t = encodeURIComponent(msg || SPARTAN.waMessage || "Olá");
    return "https://wa.me/" + n + "?text=" + t;
  }

  function captureUtm() {
    var p = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) {
      var v = p.get(k);
      if (!v) return;
      document.querySelectorAll('input[name="' + k + '"]').forEach(function (inp) {
        inp.value = v;
      });
    });
  }

  function buildLeadWhatsAppText(form) {
    var nome = (form.nome && form.nome.value.trim()) || "";
    var sel = form.servico;
    var servicoLabel = sel && sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : "";
    var mensagem = (form.mensagem && form.mensagem.value.trim()) || "";
    var lines = [
      "Olá, sou " + nome + ".",
      "",
      "Serviço de interesse: " + servicoLabel,
      "",
      "Mensagem:",
      mensagem,
      "",
      "— Lead pelo site SPARTAN.",
    ];
    var us = form.querySelector('[name="utm_source"]');
    var um = form.querySelector('[name="utm_medium"]');
    var uc = form.querySelector('[name="utm_campaign"]');
    var utmParts = [];
    if (us && us.value.trim()) utmParts.push("utm_source=" + us.value.trim());
    if (um && um.value.trim()) utmParts.push("utm_medium=" + um.value.trim());
    if (uc && uc.value.trim()) utmParts.push("utm_campaign=" + uc.value.trim());
    if (utmParts.length) {
      lines.push("");
      lines.push("Origem: " + utmParts.join(" | "));
    }
    return lines.join("\n");
  }

  function trackContact() {
    if (typeof fbq !== "undefined") fbq("track", "Contact");
    if (typeof gtag !== "undefined")
      gtag("event", "whatsapp_click", { event_category: "contato", event_label: "form_lead" });
  }

  function openWhatsAppWithText(text) {
    var n = digitsOnly(SPARTAN.whatsapp);
    if (!n) n = "5586999999999";
    var url = "https://wa.me/" + n + "?text=" + encodeURIComponent(text);
    var w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w || w.closed) {
      window.location.href = url;
    }
  }

  function bindLeadForm() {
    var form = document.getElementById("lead-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var honey = form.querySelector('[name="_honey"]');
      if (honey && honey.value) return;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      trackContact();
      openWhatsAppWithText(buildLeadWhatsAppText(form));
    });
  }

  function bindWhatsapp() {
    document.querySelectorAll(".js-wa").forEach(function (a) {
      var custom = a.getAttribute("data-wa-message");
      var href = custom ? waHrefWithMessage(custom) : waHref();
      a.setAttribute("href", href);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var sel = anchor.getAttribute("href");
      if (!sel || sel === "#") return;
      var target = document.querySelector(sel);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  document.querySelectorAll('a[href*="wa.me"], a.js-wa').forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (typeof fbq !== "undefined") fbq("track", "Contact");
      if (typeof gtag !== "undefined")
        gtag("event", "whatsapp_click", { event_category: "contato" });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    captureUtm();
    bindLeadForm();
    bindWhatsapp();
  });
})();
