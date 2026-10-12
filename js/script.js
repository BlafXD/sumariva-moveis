// Sumariva Móveis — site script
// Scroll-reveal for elements marked .reveal, plus mouse-drag + arrow
// navigation for the testimonials track (desktop mouse users can't
// drag a native overflow:auto element by default — only touch/wheel).

function setupDepoTrack() {
  const track = document.querySelector(".depo-track");
  if (!track) return;

  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let moved = false;

  const endDrag = () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("is-dragging");
  };

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    moved = false;
    track.classList.add("is-dragging");
    startX = e.pageX;
    startScroll = track.scrollLeft;
  });
  track.addEventListener("mouseleave", endDrag);
  track.addEventListener("mouseup", endDrag);
  window.addEventListener("mouseup", endDrag);
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const delta = e.pageX - startX;
    if (Math.abs(delta) > 3) moved = true;
    track.scrollLeft = startScroll - delta;
  });
  // Prevent the click-through to a card link/selection right after a drag.
  track.addEventListener(
    "click",
    (e) => {
      if (moved) e.preventDefault();
    },
    true
  );

  document.querySelectorAll(".depo-arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = track.querySelector(".depo-card");
      const step = card ? card.getBoundingClientRect().width + 18 : 320;
      const dir = Number(btn.dataset.dir) || 1;
      track.scrollBy({ left: step * dir, behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupDepoTrack();
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
});
