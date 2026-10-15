/* ===== GALLERY LIGHTBOX ===== */
/* Minimal gallery lightbox for category filtering and fullscreen preview. */

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});

function initGallery() {
  const gallery = document.querySelector("[data-gallery-grid]");
  if (!gallery) return;

  const items = window.siteData && window.siteData.gallery ? window.siteData.gallery : [];
  if (!items.length) return;

  const buttons = document.querySelectorAll("[data-gallery-filter]");
  const renderGallery = (filter = "All") => {
    const filtered = filter === "All" ? items : items.filter((item) => item.category === filter);

    gallery.innerHTML = filtered.map((item) => `
      <article class="gallery-item${item.orientation === "portrait" ? " gallery-item--portrait" : ""}">
        <button class="gallery-open" type="button" data-gallery-image="${item.src}" data-gallery-title="${item.title}" aria-label="Open image ${item.title}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy" />
        </button>
      </article>
    `).join("");

    gallery.querySelectorAll("[data-gallery-image]").forEach((button) => {
      button.addEventListener("click", () => {
        openLightbox(button.dataset.galleryImage, button.dataset.galleryTitle);
      });
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
      renderGallery(button.dataset.galleryFilter);
    });
  });

  renderGallery();

  function openLightbox(src, title) {
    const lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox) return;
    lightbox.classList.add("is-open");
    lightbox.querySelector("img").src = src;
    lightbox.querySelector("figcaption").textContent = title;
  }

  const closeButton = document.querySelector("[data-lightbox-close]");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      document.querySelector("[data-lightbox]").classList.remove("is-open");
    });
  }
}
