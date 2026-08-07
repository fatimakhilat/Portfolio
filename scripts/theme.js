/*=========================================================
=                      DARK MODE                          =
=========================================================*/

function initTheme() {

  const themeBtn = document.querySelector(".js-moon-item");
  const themeIcon = document.querySelector(".js-moon-item img");

  function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    updateTheme();

  }

  function loadTheme() {

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    }

    updateTheme();

  }

  function updateTheme() {

    if (!themeIcon) {
      return;
    }

    const darkMode =
      document.body.classList.contains("dark-mode");

    themeIcon.src = darkMode
      ? "icons/sun.svg"
      : "icons/moon.svg";

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

  }

  if (themeBtn && themeIcon) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  loadTheme();

}

export { initTheme };