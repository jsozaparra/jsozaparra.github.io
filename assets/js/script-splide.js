new Splide( '#card-carousel', {
  perPage    : 1,
  gap:  '3rem',
  type   : 'loop',
  autoplay : true,
  interval: 3000,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
} ).mount();

