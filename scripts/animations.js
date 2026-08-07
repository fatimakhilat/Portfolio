/*=========================================================
=                  SCROLL ANIMATIONS                      =
=========================================================*/

export function initAnimations() {

  const animatedElements = document.querySelectorAll(
    "section, footer, .skill-item, .project-card"
  );

  if (!animatedElements.length) {
    return;
  }

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("show1");

      observer.unobserve(entry.target);

    });

  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });

}

export { initAnimations };