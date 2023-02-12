var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  speed:2000,
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
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3
    }
  },
});
