// Carusel
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
// Carusel END
// Select
$(function(){
  $('.select').styler()
});


// checkbox
$(function(){
$('.jqr').on('click', function () {
   if ($(this).find('input:checked').length) {
     $(this).addClass('active');
   } else {
     $(this).removeClass('active');
   }
 });
 });
 // Menu
 $(function(){
  var $dropList = $('.drop-list');
  $dropList.hover(function(){
    console.log('It\'s ok')
    $(this).children('.submenu').slideToggle(800).animate({
      backgroundColor: '#0000ff'
    }, 400);
    $(this).children('.submenu').css({'backgroundColor': '#000077'});

  });
 });
