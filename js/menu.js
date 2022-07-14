 (() => {
  const refs = {
    openMenuBtn: document.querySelector(".button-mob"),
    closeMenuBtn: document.querySelector(".madal-mob-button"),
    menu: document.querySelector(".mob"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();