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

// Staggers the subteam spec-plate cards into view as they reach the viewport.
// Marked "reveal" only via JS, so a no-JS visitor sees the cards plainly.
// Checks bounding rects on scroll rather than relying solely on
// IntersectionObserver's sampled frames, so a large/instant scroll jump
// (End key, fast fling, jump links) can never strand a card permanently
// hidden by skipping past its narrow intersection window between frames.
document.addEventListener("DOMContentLoaded", () => {
  let cards = Array.from(document.querySelectorAll(".subteam-card"));
  if (!cards.length) return;

  cards.forEach((card) => card.classList.add("reveal"));

  let ticking = false;
  const revealPending = () => {
    ticking = false;
    const viewBottom = window.innerHeight * 0.95;
    const stillHidden = [];
    cards.forEach((card, i) => {
      if (card.getBoundingClientRect().top < viewBottom) {
        setTimeout(() => card.classList.add("in-view"), i * 30);
      } else {
        stillHidden.push(card);
      }
    });
    cards = stillHidden;
    if (!cards.length) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  };

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(revealPending);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  revealPending();
});
