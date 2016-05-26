// carousel
$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    .jcarouselPagination();

  });
// hover
$(function (){

$('.Box1Pictur__hover').hover( handlerIn, handlerout );

 function handlerIn() {
  $(this).css('opacity','1')
  $('this', 'a').css('color', '#f4b60d')
 }
 function handlerout (e) {
   $(this).css('opacity','0')
 }
})
