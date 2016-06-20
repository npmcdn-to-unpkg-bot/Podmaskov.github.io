// Carousel
$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
});
// request
var collectionOfPictures = [];
var collectionOfTags = [];
$(function () {
  var value;
  $('.nav_button').on('click', function() {
    $('.grid').remove();
    value = $('.nav__value').val();
    images ();
  });

  $('.nav__value').keypress(function(e){
    if (e.which === 13 ){
      $('.grid').remove();
      value = $('.nav__value').val();
      images ();
    }
      });
  function images () {
    $.ajax({
            url:'https://pixabay.com/api/',
            data: { key: '2573416-853329f61ff5a3b6beba25569',
                    q: value
                  },
                  success: function (data) {
                    console.log(data);
                      for(var i=0; i<7; i++) {
                      var arr = data.hits;
                      collectionOfPictures[i] = arr[i].webformatURL;
                      collectionOfTags[i] = arr[i].tags;
                    }
                    var html = $('#template').html();
                    var content = tmpl(html,collectionOfPictures,collectionOfTags);
                    $('.wrapForTemplate').append(content);
                  }
            });
          }
  images();
});
console.log(typeof images)
// masonry
$(function () {
  console.log($('.grid'));
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer'
  });
});
