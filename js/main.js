const btnMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".wrapper");
const btnClose = document.querySelector(".btn-close-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

// swiper

window.addEventListener("resize", () => {
  if (innerWidth < 420) {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      mousewheel: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
    });
  } else if (innerWidth < 768) {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      mousewheel: true,
      loop: true,
      autoplay: {
        delay: 2500,
      },
    });
  }
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
});
