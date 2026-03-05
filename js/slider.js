document.addEventListener("DOMContentLoaded", function () {
  const swiperElement = document.querySelector(".swiper");
  if (swiperElement) {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const swiperElement = document.querySelector(".swiper");
  if (swiperElement) {
    new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
});