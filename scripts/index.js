
/*=========================================================
=                     DOM ELEMENTS                        =
=========================================================*/

const menuBtn = document.querySelector(".js-menu-btn");
const menu = document.querySelector(".js-right-item");

const themeBtn = document.querySelector(".js-moon-item");
const themeIcon = document.querySelector(".js-moon-item img");

const backTopBtn = document.querySelector(".js-back-top");

const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll("nav a");
const animatedElements = document.querySelectorAll(
  "section, footer, .skill-item, .project-card"
);

/*=========================================================
=                    INITIALIZATION                       =
=========================================================*/

loadTheme();
initAnimations();


/*=========================================================
=                       MENU                             =
=========================================================*/

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");

  const isOpen = menu.classList.contains("active");

  localStorage.setItem("menu", isOpen ? "open" : "close");
}


navLinks.forEach(link => {

  link.addEventListener("click", () => {

    // Fermer le menu
    menu.classList.remove("active");
    localStorage.setItem("menu", "close");

  });

});

/*=========================================================
=                     DARK MODE                          =
=========================================================*/

themeBtn.addEventListener("click", toggleTheme);

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
  const darkMode = document.body.classList.contains("dark-mode");

  themeIcon.src = darkMode
    ? "icons/sun.svg"
    : "icons/moon.svg";

  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}
