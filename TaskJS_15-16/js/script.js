$(function(){
  var data;
$('.search').on('click',function(){
   value = $('.data').val();

request = $.ajax({
  url:'https://pixabay.com/api/',
  data: { key: '2573416-853329f61ff5a3b6beba25569',
          q: value,
        },
  success: function(data){
          var html = $('#template').html();
          var content = tmpl(html,data);
          $('body').append(content);
        }
});

  });
    });
