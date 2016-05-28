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

$('.Box1Pictur, .Box2Pictur, .Box3Pictur, .Box4Pictur').hover( handlerIn, handlerout );

 function handlerIn() {
  $(this).find('.Box1Pictur__hover').css({
                opacity: '1',
                cursor: 'pointer'
              });
  var $parent = $(this).parent()
  $parent.find('.BoxLink').css('color','#f4b60d')
 }
 function handlerout () {
   $(this).find('.Box1Pictur__hover').css({
                 opacity: '0',
                 cursor: 'pointer'
               });
   var $parent = $(this).parent()
   $parent.find('.BoxLink').css('color','#fff')
 }
})
// accordion
$(function (){
  $('.bannersPlace__bottom').on('click', function(){
    $(this).toggleClass('bannersPlace__bottom--activ bannersPlace__bottom');
    $(this).find('i').toggleClass('icon-plus icon-minus');
    $(this).parent().find('p.bannersPlace__content').toggleClass('displayNone');
  })
})
