document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  navToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      nav.classList.remove("active");
    }
  });
});
