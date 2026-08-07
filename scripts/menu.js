/*=========================================================
=                         MENU                            =
=========================================================*/

function initMenu() {

  const menuBtn = document.querySelector(".js-menu-btn");
  const menu = document.querySelector(".js-right-item");
  const navLinks = document.querySelectorAll("nav a");

  if (!menuBtn || !menu) {
    return;
  }

  menuBtn.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });


  function toggleMenu() {

    menu.classList.toggle("active");

    const isOpen = menu.classList.contains("active");

    localStorage.setItem(
      "menu",
      isOpen ? "open" : "close"
    );

  }


  function closeMenu() {

    menu.classList.remove("active");

    localStorage.setItem("menu", "close");

  }

}

export { initMenu };