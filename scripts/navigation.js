/*=========================================================
=                    ACTIVE NAVIGATION                    =
=========================================================*/

function initNavigation() {

  const sections = document.querySelectorAll("section, footer");
  const navLinks = document.querySelectorAll("nav a");

  if (!sections.length || !navLinks.length) {
    return;
  }

  function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (
        window.scrollY >= top - 200 &&
        window.scrollY < top + height - 200
      ) {
        currentSection = section.id;
      }

    });

    // Si l'utilisateur est arrivé tout en bas
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 5
    ) {
      currentSection = "footer";
    }

    navLinks.forEach(link => {

      link.classList.remove("red");

      if (
        link.getAttribute("href") ===
        "#" + currentSection
      ) {
        link.classList.add("red");
      }

    });

  }

  window.addEventListener(
    "scroll",
    updateActiveLink
  );

}

export { initNavigation };