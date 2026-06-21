/* ============================================================
   BreezyBuddy — minimal JavaScript
   Only does two small, optional things:
   1. Gently fades in sections as you scroll.
   2. (Smooth scrolling is handled by CSS, no JS needed.)
   The page works perfectly even if JS is disabled.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // Add the ".reveal" class to each section so it can fade in.
  var sections = document.querySelectorAll(".section, .hero");
  sections.forEach(function (el) {
    el.classList.add("reveal");
  });

  // Use IntersectionObserver to reveal sections when they scroll into view.
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: if the browser is very old, just show everything.
    sections.forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
