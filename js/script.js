// Sumariva Móveis — site script
// Signature motif: a "box joint" (finger joint) battlement path, used as section
// dividers and as a small emblem. Generated once in a fixed coordinate space
// (SVG viewBox), so no resize listener is needed — the browser scales the path.

function battlementPath(width, toothWidth, baseHeight, toothHeight) {
  const top = baseHeight - toothHeight;
  let d = `M0,${baseHeight}`;
  let x = 0;
  let atBase = true; // next move rises to top first

  while (x < width) {
    d += atBase ? ` L${x},${top}` : ` L${x},${baseHeight}`;
    x += toothWidth;
    d += atBase ? ` L${x},${top}` : ` L${x},${baseHeight}`;
    atBase = !atBase;
  }

  d += ` L${width},${baseHeight} Z`;
  return d;
}

document.addEventListener("DOMContentLoaded", () => {
  // Section dividers — full-height battlement across the 1200x40 viewBox.
  document.querySelectorAll(".joint-divider path").forEach((path) => {
    path.setAttribute("d", battlementPath(1200, 40, 40, 40));
  });

  // Small decorative emblem reused in "Sobre" and project cards.
  const emblemPath = battlementPath(200, 28, 130, 22);
  document.querySelectorAll(".joint-mark path").forEach((path) => {
    path.setAttribute("d", emblemPath);
  });

  // Scroll-reveal
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
