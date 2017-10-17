var typed2 = new Typed('#typedText', {
    strings: ["Self-taught programmers...","","Noders...","Reactive...","Perfectionalists...","Indians...","Jobless...","Gamers...","Geeks..."],
    typeSpeed: 50,
    backSpeed: 50,
    fadeOut: false,
    smartBackspace: true,
    loop: true
  });
$('.slider').glide({
  autoplay: false,
  arrowsWrapperClass: 'slider-arrows',
  arrowRightText: '',
  arrowLeftText: ''
});
$("#myCarousel").on('click',function() {
    $('html,body').animate({
    scrollTop: $("#blogContainerToScroll").offset().top},
    'slow');
});