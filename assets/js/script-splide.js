new Splide( '#card-carousel', {
  heightRatio: 0.5,
  perPage    : 5,
  gap:  '3rem',
  type   : 'loop',
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
} ).mount();

