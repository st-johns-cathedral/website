/* ===== MAIN SITE LOGIC ===== */
/* Theme, language, dynamic content, and general interactions. */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavigation();
  initScrollEffects();
  initVerseOfDay();
  initServiceWidget();
  initAccordions();
  initBackToTop();
});

function initTheme() {
  const savedTheme = localStorage.getItem("stjohns-theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);

  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", savedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.addEventListener("click", () => {
      const next = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", next);
      localStorage.setItem("stjohns-theme", next);
      themeToggle.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem("stjohns-lang") || "en";
  setLanguage(savedLang);

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langSwitch;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  window.currentLang = lang;
  localStorage.setItem("stjohns-lang", lang);

  document.documentElement.lang = lang === "ta" ? "ta" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (window.i18n && window.i18n[lang] && window.i18n[lang][key]) {
      el.textContent = window.i18n[lang][key];
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
    button.setAttribute("aria-pressed", button.dataset.langSwitch === lang ? "true" : "false");
  });
}

function initNavigation() {
  const mobileToggle = document.querySelector("[data-mobile-menu-toggle]");
  const nav = document.querySelector(".site-nav");
  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", nav.classList.contains("is-open") ? "true" : "false");
    });
  }
}

function initScrollEffects() {
  const revealElems = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.1 });

  revealElems.forEach((el) => observer.observe(el));
}

function initVerseOfDay() {
  const verseEls = document.querySelectorAll("[data-verse]");
  if (!verseEls.length) return;

  const verses = window.siteData && window.siteData.verses ? window.siteData.verses : [];
  if (!verses.length) return;
  const dayIndex = Math.floor(Date.now() / 86400000) % verses.length;
  verseEls.forEach((el) => {
    el.textContent = verses[dayIndex];
  });
}

function initServiceWidget() {
  const nextServiceEl = document.querySelector("[data-next-service]");
  if (!nextServiceEl) return;

  const serviceTimes = window.churchConfig && window.churchConfig.serviceTimes;
  if (!serviceTimes || !serviceTimes.nextService) {
    nextServiceEl.textContent = "[EDIT ME]";
    return;
  }
  nextServiceEl.textContent = serviceTimes.nextService;
}

function initAccordions() {
  document.querySelectorAll(".accordion-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
      const isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".accordion-item").forEach((accordion) => {
        accordion.classList.remove("is-open");
        const inner = accordion.querySelector(".accordion-content");
        if (inner) inner.hidden = true;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        if (content) content.hidden = false;
      }
    });
  });
}

function initBackToTop() {
  const btn = document.querySelector("[data-back-to-top]");
  if (!btn) return;

  const toggle = () => {
    if (window.scrollY > 400) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", toggle);
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
