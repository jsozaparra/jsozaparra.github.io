var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
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
    delay: 8000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});
