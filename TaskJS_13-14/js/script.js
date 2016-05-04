var QuestionsAndAnswers = ([
  {qustion: 'Вопрос №1',
   answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']},
  {qustion: 'Вопрос №2',
 answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']},{
   qustion: 'Вопрос №3',
  answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']
 }])
var progrmmingTest = {
  body: document.body,
// create <h1> tag
  addH1: function (nameTest) {
    var h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.innerHTML = nameTest || 'Тест по программированию';
    this.body.appendChild(h1);
  },
// create <form> tag
  addForm: function () {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.classList.add('form');
    this.body.appendChild(form);
  },

 addInputSubmit: function (buttonName) {
    var inputSub = document.createElement('input');
    inputSub.setAttribute('type', 'submit');
    inputSub.setAttribute('value', buttonName || 'Проверить мои результаты' );
    var form = document.querySelector('.form');
    form.appendChild(inputSub);
 },

 addQuestions: function (questions) {
   var BlockForQuestions= document.createElement("ol");
   var form = document.querySelector('.form');
   form.appendChild(BlockForQuestions);

   for (i=0; i<3; i++){
   var nameQuestions = document.createElement('li');
   nameQuestions.innerHTML = QuestionsAndAnswers[i].qustion;
   BlockForQuestions.appendChild(nameQuestions);

   var BlockForAnswer = document.createElement('ul');
   nameQuestions.appendChild(BlockForAnswer);

   for (j=0; j<3; j++){
   var nameAnswer = document.createElement('li');
   BlockForAnswer.appendChild(nameAnswer);

   var checkbox = document.createElement('input');
   checkbox.setAttribute('type', 'checkbox');

    var span = document.createElement('span');
    var label = document.createElement('label');

    span.innerHTML = QuestionsAndAnswers[i].answers[j];
    label.appendChild(checkbox);
    label.appendChild(span);
    nameAnswer.appendChild(label);
   }
  }
 }
}
progrmmingTest.addH1();
progrmmingTest.addForm();
progrmmingTest.addQuestions(QuestionsAndAnswers);
 progrmmingTest.addInputSubmit();
