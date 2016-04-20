$(function(){
  $('.jcarousel').jcarousel();
  $('.jcarousel').jcarousel({
    wrap: 'circular',
}, 0);
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});
