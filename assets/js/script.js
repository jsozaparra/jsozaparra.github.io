var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
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
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});
