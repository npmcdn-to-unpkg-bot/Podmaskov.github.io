$(function(){
  function callBack () {
    var value = $('.data').val();

    var request = $.ajax({
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
};
$('.search').on('click',callBack);

$('.data').keypress(function(e){
  if (e.which === 13 ){
    callBack();
  }
});

    });
// имя, возраст, пол, рост, вес
function Human() {
  this.name = 'Artem';
  this.age = '26';
  this.sex = 'man';
  this.height = '1.83';
  this.weight = '70';
};

var newHuman = new Human();
// места работы, зарплатой, методом "работать"
function Worker() {
  this.workLocation = 'Kiev';
  this.salary = '5000$'
  this.doWork = function () {
    alert('Работать');
  };
};

Worker.prototype = new Human();
// места учебы, стипендией, методом "смотреть сериалы"
function Student() {
  this.stadyLocation = 'GoIT';
  this.stipend = '400$'
  this.watch = function () {
    alert('смотреть сериалы');
  }
};

Student.prototype = new Human();

var newWorker1 = new Worker ();
var newWorker2 = new Worker ();
var newStudent1 = new Student ();
var newStudetn2 = new Student ();

console.log(newWorker1);
console.log(newWorker2);
console.log(newStudent1);
console.log(newStudetn2);
