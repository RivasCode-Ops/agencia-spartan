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

  function bindFormsubmit() {
    var email = SPARTAN.formSubmitEmail;
    if (!email || email.indexOf("@") === -1) email = "seu-email@dominio.com";
    var form = document.getElementById("lead-form");
    if (!form) return;
    form.setAttribute("action", "https://formsubmit.co/" + encodeURIComponent(email));
    var next = form.querySelector('input[name="_next"]');
    if (next) {
      next.value = new URL("obrigado.html", window.location.href).href;
    }
  }

  function bindWhatsapp() {
    var href = waHref();
    document.querySelectorAll(".js-wa").forEach(function (a) {
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
    bindFormsubmit();
    bindWhatsapp();
  });
})();
