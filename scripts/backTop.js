/*=========================================================
=                    BACK TO TOP                          =
=========================================================*/

export function initBackTop() {

  const backTopBtn = document.querySelector(".js-back-top");

  if (!backTopBtn) {
    return;
  }

  function toggleBackTopButton() {

    backTopBtn.classList.toggle(
      "show",
      window.scrollY > 300
    );

  }

  function scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  window.addEventListener(
    "scroll",
    toggleBackTopButton
  );

  backTopBtn.addEventListener(
    "click",
    scrollToTop
  );

}

export { initBackTop };