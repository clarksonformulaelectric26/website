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

// Builds the join panel's Google Form frame the first time the panel is
// opened. It is not in the markup because a lazy <iframe> inside a closed
// <details> is still loaded eagerly by Chrome, which would mean a request to
// Google — and a Google cookie — for every visitor to the home page, not just
// the ones who click Join. The container stays empty (and hidden by CSS) until
// then, so with JavaScript off the "open in a new tab" link carries the panel
// on its own.
document.addEventListener("DOMContentLoaded", () => {
  const panel = document.querySelector(".join-panel");
  const embed = panel && panel.querySelector(".join-embed");
  if (!embed || !embed.dataset.formSrc) return;

  panel.addEventListener("toggle", () => {
    if (!panel.open || embed.firstElementChild) return;

    const frame = document.createElement("iframe");
    frame.title = "New member interest form";
    frame.height = embed.dataset.formHeight;
    frame.src = embed.dataset.formSrc;
    embed.appendChild(frame);
  });
});

// Embedded iframes (e.g. YouTube) can receive keyboard focus with no visible
// indication, since their own internal focus ring can't be styled cross-origin
// and the page never scrolls to bring them into view. The visible outline
// comes from the ".media-embed:focus-within" CSS rule (the browser tracks
// that natively, no JS needed). Scrolling the frame into view can't rely on
// a "focus" event, though: focus/blur/focusin firing on an <iframe> is
// notoriously unreliable across browsers even though
// `document.activeElement` updates correctly, so this polls activeElement
// instead — a small, well-known, browser-agnostic workaround.
document.addEventListener("DOMContentLoaded", () => {
  const frames = Array.from(document.querySelectorAll(".media-embed iframe"));
  if (!frames.length) return;

  let lastActive = null;
  setInterval(() => {
    const active = document.activeElement;
    if (active !== lastActive) {
      lastActive = active;
      if (frames.includes(active)) {
        active.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, 200);
});
