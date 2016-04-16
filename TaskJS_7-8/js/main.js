// TABS
$(function(){
  var $link1 = $('.link_1');
  var $link2 = $('.link_2');
  var $link3 = $('.link_3');
  var $tabs_1 = $('.tabs-1');
  var $tabs_2 = $('.tabs-2');
  var $tabs_3 = $('.tabs-3');

  $link1.on('click', function(){
    $link1.parent('li').removeClass('unactiv').addClass('activ');
    $link2.parent('li').removeClass('activ').addClass('unactiv');
    $link3.parent('li').removeClass('activ').addClass('unactiv');

    $tabs_1.removeClass('display_none');
    $tabs_2.addClass('display_none');
    $tabs_3.addClass('display_none');
  });

  $link2.on('click', function(){
    $link2.parent('li').removeClass('unactiv').addClass('activ');
    $link1.parent('li').removeClass('activ').addClass('unactiv');
    $link3.parent('li').removeClass('activ').addClass('unactiv');

    $tabs_2.removeClass('display_none');
    $tabs_1.addClass('display_none');
    $tabs_3.addClass('display_none');
  });

  $link3.on('click', function(){
    $link3.parent('li').removeClass('unactiv').addClass('activ');
    $link1.parent('li').removeClass('activ').addClass('unactiv');
    $link2.parent('li').removeClass('activ').addClass('unactiv');

    $tabs_3.removeClass('display_none');
    $tabs_1.addClass('display_none');
    $tabs_2.addClass('display_none');
  });
});
// TABS END
// FORMS
$(function(){
  var $input1 = $('#firstname');
  var $input2 = $('#lastname');
  var $input3 = $('#address');
  var $button = $('button');

  $input1.hover(function(){
    $('.title1').animate({
      opacity:1},800);
  },function(){
    $('.title1').animate({
      opacity:0},500);
  });

  $input2.hover(function(){
    $('.title2').animate({
      opacity:1},800);
  },function(){
    $('.title2').animate({
      opacity:0},500);
  });

  $input3.hover(function(){
    $('.title3').animate({
      opacity:1},800);
  },function(){
    $('.title3').animate({
      opacity:0},500);
  });
  $button.on('click',function(){
    console.log($button);
    $('.title1').animate({opacity:1},800);
    $('.title2').animate({opacity:1},800);
    $('.title3').animate({opacity:1},800);
  })

});
