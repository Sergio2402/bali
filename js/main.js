$(function () {
 $('.menu__btn').on('click', function() {
  $('.menu__list').slideToggle();
 })

 $(".program-slider").slick({
  arrows: true,
  dots: true,
  dotsClass:"program-dots",
  responsive: [
    {
      breakpoint: 516,
      settings: {
        arrows: false
      }
    }
  ]
 })


$(".photo-slider__up").slick({
  arrows: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1501,
      settings: {
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ]
 })

 $(".photo-slider__down").slick({
  arrows: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1501,
      settings: {
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ]
 })

//  Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

})