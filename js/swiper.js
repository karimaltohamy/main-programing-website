if (innerWidth < 768) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
} else {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

window.addEventListener("resize", () => {
  if (innerWidth < 768) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
});

// change text
