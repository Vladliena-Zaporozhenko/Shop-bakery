document.querySelector(".menu-btn-open").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("is-open");
});
document
  .querySelectorAll(".menu-btn-close, .mobile-nav-btn")
  .forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".mobile-menu").classList.toggle("is-open");
    });
  });
