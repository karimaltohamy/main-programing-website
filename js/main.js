const btnMenu = document.querySelector(".menu-btn");
const menu = document.querySelector(".wrapper");
const btnClose = document.querySelector(".btn-close-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
});

// dark and light mode
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  console.log(true);
  document.body.classList.toggle("light");
  if (document.body.classList.length > 0) {
    (async () => {
      await loadPolygonPath(tsParticles);

      await tsParticles.load({
        particles: {
          color: {
            value: "#722ffb",
            animation: {
              enable: true,
              speed: 10,
            },
          },
          move: {
            attract: {
              enable: false,
              distance: 100,
              rotate: {
                x: 2000,
                y: 2000,
              },
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0,
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30,
              },
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#fff",
              length: 20,
              enable: true,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 0,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        background: {
          color: "#fff",
        },
        fullScreen: {
          zIndex: -1,
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      });
    })();
  } else {
    (async () => {
      await loadPolygonPath(tsParticles);

      await tsParticles.load({
        particles: {
          color: {
            value: "#722ffb",
            animation: {
              enable: true,
              speed: 10,
            },
          },
          move: {
            attract: {
              enable: false,
              distance: 100,
              rotate: {
                x: 2000,
                y: 2000,
              },
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0,
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30,
              },
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 0,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        background: {
          color: "#000",
        },
        fullScreen: {
          zIndex: -1,
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      });
    })();
  }
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

if (innerWidth < 420) {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    loop: true,
    autoplay: {
      delay: 2500,
    },
  });
}

// openTab

function openTab(link, id) {
  const tabLinks = document.querySelectorAll(".tabcontent");
  const links = document.querySelectorAll(".tablink");
  const tabLink = document.getElementById(id);
  const linkItem = document.getElementById(link);

  tabLinks.forEach((item) => item.classList.remove("active"));
  links.forEach((item) => item.classList.remove("active"));
  tabLink.classList.add("active");
  linkItem.classList.add("active");
}
