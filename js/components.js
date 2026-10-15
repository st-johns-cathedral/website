/* ===== COMPONENT RENDERING ===== */
/* Injects header and footer for each page. */

document.addEventListener("DOMContentLoaded", () => {
  renderSiteHeader();
  renderSiteFooter();
  renderPageMeta();
});

function renderSiteHeader() {
  const target = document.getElementById("site-header");
  if (!target) return;

  const isPagesDir = window.location.pathname.includes("/pages/");
  const basePath = isPagesDir ? "../" : "./";

  const navLinks = [
    { label: "Home", href: basePath + "index.html" },
    { label: "About", href: basePath + "pages/about.html" },
    { label: "History", href: basePath + "pages/history.html" },
    { label: "Architecture & Relics", href: basePath + "pages/architecture.html" },
    { label: "Worship & Services", href: basePath + "pages/worship.html" },
    { label: "Clergy & Leadership", href: basePath + "pages/clergy.html" },
    { label: "Ministries", href: basePath + "pages/ministries.html" },
    { label: "Sermons & Media", href: basePath + "pages/sermons.html" },
    { label: "Gallery", href: basePath + "pages/gallery.html" },
    { label: "Giving", href: basePath + "pages/giving.html" },
    { label: "Prayer Requests", href: basePath + "pages/prayer.html" },
    { label: "Contact", href: basePath + "pages/contact.html" },
    { label: "News", href: basePath + "pages/news.html" }
  ];

  const navHtml = navLinks.map((item) => `
    <li class="nav-item">
      <a href="${item.href}" class="nav-link">${item.label}</a>
    </li>
  `).join("");

  target.innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${basePath}index.html" aria-label="St. John's Cathedral home">
          <img class="brand-mark" src="${basePath}assets/images/cathedral-monogram-icon.png" alt="" aria-hidden="true" />
          <span class="brand-text">
            <strong>St. John's</strong>
            <small>Cathedral, Nazareth</small>
          </span>
        </a>

        <nav class="site-nav" aria-label="Main navigation">
          <ul class="nav-list">${navHtml}</ul>
        </nav>

        <div class="header-actions">
          <div class="lang-switch" aria-label="Language toggle">
            <button class="lang-btn" type="button" data-lang-switch="en" aria-pressed="true">EN</button>
            <button class="lang-btn" type="button" data-lang-switch="ta" aria-pressed="false">தமிழ்</button>
          </div>
          <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle color theme">
            <span class="sr-only">Theme</span>
          </button>
          <button class="mobile-menu-toggle" type="button" data-mobile-menu-toggle aria-expanded="false" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderSiteFooter() {
  const target = document.getElementById("site-footer");
  if (!target) return;

  const isPagesDir = window.location.pathname.includes("/pages/");
  const basePath = isPagesDir ? "../" : "./";

  target.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <h3>St. John's Cathedral, Nazareth</h3>
          <p>Gothic heritage, worship, and fellowship in the heart of Nazareth, Tamil Nadu.</p>
        </div>

        <div class="footer-links">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="${basePath}index.html">Home</a></li>
            <li><a href="${basePath}pages/about.html">About</a></li>
            <li><a href="${basePath}pages/history.html">History</a></li>
            <li><a href="${basePath}pages/contact.html">Contact</a></li>
            <li><a href="${basePath}pages/privacy.html">Privacy</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="${basePath}pages/sermons.html">Sermons</a></li>
            <li><a href="${basePath}pages/giving.html">Giving</a></li>
            <li><a href="${basePath}pages/prayer.html">Prayer Requests</a></li>
            <li><a href="${basePath}pages/gallery.html">Gallery</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contact</h4>
          <p>${window.churchConfig ? window.churchConfig.address : "[EDIT ME]"}</p>
          <p><a href="tel:${window.churchConfig ? window.churchConfig.phone : ""}">${window.churchConfig ? window.churchConfig.phone : "[EDIT ME]"}</a></p>
          <p><a href="mailto:${window.churchConfig ? window.churchConfig.email : ""}">${window.churchConfig ? window.churchConfig.email : "[EDIT ME]"}</a></p>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© ${new Date().getFullYear()} St. John's Cathedral, Nazareth. All rights reserved.</p>
        <a href="#top" class="back-to-top" data-back-to-top>Back to top</a>
      </div>
    </footer>
  `;
}

function renderPageMeta() {
  const title = document.body.dataset.pageTitle || "St. John's Cathedral, Nazareth";
  document.title = title;
}
