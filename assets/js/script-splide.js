new Splide( '#image-carousel', {
  heightRatio: 0.5,
  perPage    : 2,
  padding:  '0rem',
  type   : 'loop',
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
} ).mount();

