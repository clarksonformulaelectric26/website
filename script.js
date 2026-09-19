// Fades the hero background into the page background color as the user scrolls
// through the first viewport height, then stays hidden behind the content.
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".hero-overlay");
  const header = document.querySelector(".site-header");
  if (!overlay) return;

  const onScroll = () => {
    const fadeDistance = window.innerHeight * 0.9;
    const opacity = Math.min(window.scrollY / fadeDistance, 1);
    overlay.style.opacity = opacity;
    if (header) {
      header.classList.toggle("solid", opacity > 0.6);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
