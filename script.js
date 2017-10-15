$(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 }
        },
      ]
    });

})
