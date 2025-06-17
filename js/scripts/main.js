function tiltAnimation() {
  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 0.5,
    scale: 1,
    maxTilt: 8,
    perspective: 100, // Transform perspective, the lower the more extreme the tilt gets.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    speed: 300, // Speed of the enter/exit transition.
    transition: true, // Set a transition on enter/exit.
    disableAxis: true, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    maxGlare: 1,
    scale: 1.1,
  });
}

function scrollHeader() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  tiltAnimation();
  scrollHeader();
});
