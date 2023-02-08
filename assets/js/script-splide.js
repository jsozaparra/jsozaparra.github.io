new Splide( '#card-carousel', {
  perPage    : 3,
  autoHeight: false,
  gap:  '3rem',
  type   : 'loop',
  autoplay : true,
  interval: 5000,
  speed:2000,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
} ).mount();

