const btnMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".wrapper");
const btnClose = document.querySelector(".btn-close-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("active");
});
