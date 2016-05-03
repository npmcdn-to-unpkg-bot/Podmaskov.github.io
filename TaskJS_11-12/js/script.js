$(function(){
var $left = $('.carousel-arrow-left');
var $right = $('.carousel-arrow-right');
var $elementsList = $('.carousel-list');

var pixelsOffset = 125;
var currentLeftValue = 0;
var $elementsCount = $elementsList.find('li').length;
var $minimumOffset = - (($elementsCount - 5) * pixelsOffset);
var maximumOffset = 0;
console.log($minimumOffset);

$left.on('click', function(){
  if (currentLeftValue != maximumOffset) {
  currentLeftValue += 125;
  $elementsList.animate({left: currentLeftValue + 'px'},500);
};
});
$right.on('click', function(){
  if (currentLeftValue != $minimumOffset){
  currentLeftValue -= 125;
  $elementsList.animate({left: currentLeftValue + 'px'},500);
};
});
});

$(function(){
 var $button = $('#button');

 $button.on('click', function(){

  var $html = $('#test').html();

  data = {
    title: 'Подмасков Артем Александрович',
    photo: ' src="img/Podmaskov.jpg"',
    position: 'Менеджер компании Holly Industrial LLC',
    motivate: 'Хочу учить фронтенд потому что:',
    answer: ['Мне это интересно', 'Я получаю удовольствие от работы','Хочетс создовать, что то своими руками'],
    myNumberTitle: 'Мой контактный телефон',
    number: '+380958801321',
    profil: 'Мой профиль вконтакте',
    feedback: 'Мой фидбек:',
    slogan: 'Если нужно, могу все &#9786;'
  };
  content = tmpl($html,data);
  $('body').append(content);
});
})
