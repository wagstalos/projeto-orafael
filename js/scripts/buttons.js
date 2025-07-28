function menuMobile() {
  const dotsButton = document.querySelector(".dots");
  const menuMobile = document.querySelector(".menu-mobile");
  const closeIcon = document.querySelector(".icon-tabler-x");
  const overlay = document.querySelector(".menu-overlay");
  const links = document.querySelectorAll(".menu-mobile__links a");

  function openMenu() {
    menuMobile.classList.add("active");
    overlay.classList.add("active");
  }

  function closeMenu() {
    menuMobile.classList.remove("active");
    overlay.classList.remove("active");
  }

  dotsButton.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  links.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
}

menuMobile();
