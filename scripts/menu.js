/*=========================================================
=                         MENU                            =
=========================================================*/

function initMenu() {

  const menuBtn = document.querySelector(".js-menu-btn");
  const menu = document.querySelector(".js-right-item");

  if (!menuBtn || !menu) {
    return;
  }

  const navLinks = menu.querySelectorAll("a");

  menuBtn.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });


  function toggleMenu() {

    menu.classList.toggle("active");

  }


  function closeMenu() {

    menu.classList.remove("active");

  }

}

export { initMenu };