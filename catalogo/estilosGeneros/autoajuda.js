$(document).ready(function(){
  $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: '<button type="button" class="prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
      nextArrow: '<button type="button" class="next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
  });
});
