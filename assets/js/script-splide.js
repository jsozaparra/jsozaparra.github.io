new Splide( '#card-carousel', {
  perPage    : 3,
  gap:  '3rem',
  type   : 'loop',
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
} ).mount();

