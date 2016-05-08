$(function () {
'use strict'
var QuestionsAndAnswers = { data: [
  {qustion: 'Вопрос №1',
   answers: [{  text:'вариант ответа №1',
                trueOrFolse: 'correct' },
              { text:'вариант ответа №2',
                trueOrFolse: 'uncorrect'},
              { text:'вариант ответа №2',
                trueOrFolse: 'uncorrect'},]},
  {qustion: 'Вопрос №2',
 answers: [{  text:'вариант ответа №1',
              trueOrFolse: 'correct' },
            { text:'вариант ответа №2',
              trueOrFolse: 'uncorrect'},
            { text:'вариант ответа №2',
              trueOrFolse: 'uncorrect'},]},
  {qustion: 'Вопрос №3',
  answers: [{  text:'вариант ответа №1',
               trueOrFolse: 'correct' },
             { text:'вариант ответа №2',
               trueOrFolse: 'uncorrect'},
             { text:'вариант ответа №2',
               trueOrFolse: 'uncorrect'},]
}]};


 localStorage.setItem("cash",JSON.stringify(QuestionsAndAnswers));
var objWithQuestionsAndAnswers = JSON.parse(localStorage.getItem('cash'));

var $shablon = $('#test').html();
var content = tmpl( $shablon,QuestionsAndAnswers);
$('body').append(content);

// checkin
$('button').on('click', function(){
  $('body').append('<div class="modal"></div>')
  var reset = $('.modal').append('<button class=reset> Пройти еще раз </button>')
   if( $('.correct:checked ').length=== 3 && $('.uncorrect:checked').length===0){
     $('.modal').append('<h1 class="message">Тест сдан!!!</h1>')
   }else{
     $('.modal').append('<h1 class="message">Тест не сдан!!!</h1>')
   }

reset.on('click', function(){
 $('.modal').remove();
 $('input').removeAttr('checked');
});
  });
    });
