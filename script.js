// Closes the phone menu once it has been used. The menu itself needs no
// JavaScript — it is a <details>, and on every page but this one its links
// navigate away, which closes it by loading a new document. Here they are
// same-page jumps, so without this the panel would stay open over the section
// it just scrolled to. Escape closes it too, the way a menu should.
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu");
  const nav = menu && menu.parentElement.querySelector("nav");
  if (!menu || !nav) return;

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) menu.open = false;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
});

// Lands a page opened at a fragment (index.html#contact from another page's
// nav, a pasted link, a bookmark) on the right section.
//
// Without this it lands at the top instead: `html { scroll-behavior: smooth }`
// makes the browser *animate* the load-time fragment scroll too, and that
// animation is cancelled by the layout shifting under it as the page's images
// arrive — so the scroll starts, gets interrupted, and never resumes. Removing
// the smooth behavior fixes the landing but costs it everywhere else, so the
// jump is re-run here with the animation suppressed for that one scroll, which
// leaves in-page nav clicks smooth.
//
// It runs twice, since an image finishing above the target moves the target:
// once as soon as the document is parsed, then again at "load", when the
// remaining images have their boxes. The second run is skipped if the visitor
// has scrolled in the meantime — arriving at the right place is worth a jump,
// but not worth yanking a page out from under someone already reading it.
document.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) return;

  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) return;

  const root = document.documentElement;
  let landedAt = null;

  const jump = () => {
    if (landedAt !== null && Math.abs(window.scrollY - landedAt) > 2) return;

    // Suppressed by hand rather than with scrollIntoView's "instant" behavior,
    // which throws on browsers that predate it instead of being ignored.
    const inlineBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    target.scrollIntoView();
    root.style.scrollBehavior = inlineBehavior;

    landedAt = window.scrollY;
  };

  jump();
  window.addEventListener("load", jump, { once: true });
});

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

// Turns the contact section's mailto: link into a copy-to-clipboard control.
// The link is a real mailto: in the markup, so with JavaScript off the button
// still does the useful thing rather than nothing at all.
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".contact-email");
  const note = document.querySelector(".contact-note");
  const toast = note && note.querySelector(".contact-toast");
  if (!link || !toast) return;

  const address = link.dataset.copy || link.textContent.trim();

  // navigator.clipboard exists only in a secure context, so a plain http://
  // preview (or an older browser) falls back to the selection + execCommand
  // route before the page gives up on copying at all.
  const copy = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(address);
        return true;
      } catch (err) {
        // Blocked by permissions policy or a denied gesture — try the fallback.
      }
    }

    const scratch = document.createElement("textarea");
    scratch.value = address;
    scratch.setAttribute("readonly", "");
    // Off-screen but still in the layout: execCommand("copy") needs a real
    // selection, and a display:none element can't hold one.
    scratch.style.position = "fixed";
    scratch.style.top = "-1000px";
    document.body.appendChild(scratch);
    scratch.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (err) {
      copied = false;
    }
    scratch.remove();
    return copied;
  };

  let hideTimer;

  link.addEventListener("click", async (event) => {
    event.preventDefault();
    const copied = await copy();

    // Nothing reached the clipboard: select the address in place so the
    // visitor's own copy shortcut works, and say so rather than claiming a copy
    // that never happened.
    if (!copied) {
      const range = document.createRange();
      range.selectNodeContents(link.querySelector(".contact-address") || link);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }

    toast.textContent = copied ? "Copied to clipboard" : "Copy blocked — address selected";
    note.classList.add("is-copied");

    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      note.classList.remove("is-copied");
      // Cleared only after the fade, so the chip doesn't empty mid-transition.
      setTimeout(() => {
        if (!note.classList.contains("is-copied")) toast.textContent = "";
      }, 250);
    }, 2200);
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
