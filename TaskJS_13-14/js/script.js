$(function () {
'use strict'
var QuestionsAndAnswers = { data: [
  {qustion: 'Столица Украины',
   answers: [{  text:'Киев',
                trueOrFolse: 'correct' },
              { text:'Харьков',
                trueOrFolse: 'uncorrect'},
              { text:'Львов',
                trueOrFolse: 'uncorrect'},]},
  {qustion: 'Столица Белоруссии',
 answers: [{  text:'Минск',
              trueOrFolse: 'correct' },
            { text:'Брест',
              trueOrFolse: 'uncorrect'},
            { text:'Гомель',
              trueOrFolse: 'uncorrect'},]},
  {qustion: 'Столица Польши',
  answers: [{  text:'Варшава',
               trueOrFolse: 'correct' },
             { text:'Краков',
               trueOrFolse: 'uncorrect'},
             { text:'Люблин',
               trueOrFolse: 'uncorrect'},]
}]};


 localStorage.setItem("cash",JSON.stringify(QuestionsAndAnswers));
var objWithQuestionsAndAnswers = JSON.parse(localStorage.getItem('cash'));

var $shablon = $('#test').html();
var content = tmpl( $shablon,QuestionsAndAnswers);
$('body').append(content);

// checkin
$('button').on('click', function(){
  $('button').css('display','none');
  $('body').append('<div class="modal"></div>')
  var reset = $('.modal').append('<button class=reset> Пройти еще раз </button>')
   if( $('.correct:checked ').length=== 3 && $('.uncorrect:checked').length===0){
     $('.modal').append('<h1 class="message">Тест сдан!!!</h1>')
   }else{
     $('.modal').append('<h1 class="message">Тест не сдан!!!</h1>')
   }

reset.on('click', function(){
  $('button').css('display','block');
 $('.modal').remove();
 $('input').removeAttr('checked');
});
  });
    });
