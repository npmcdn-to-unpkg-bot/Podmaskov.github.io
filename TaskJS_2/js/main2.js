// Создать объект с методами, которые будут динамически генерировать DOM вот такой
// страницы. Это будет тест, который мы будем разрабатывать в следующих заданиях.
// Сейчас вам нужно только динамически создать html, методы должны храниться в
// одном объекте. Для того чтоб страница выглядела красиво можете использовать
// Bootstrap и создавать DOM-элементы с готовыми бутстраповскими классами.
// Изначально на странице должен быть только <body>, вызывая методы объекта нужно
// создать dom-элементыvar

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
   var ol= document.createElement("ol");
   var form = document.querySelector('.form');
   form.appendChild(ol);

   for (i=0; i<3; i++){
   var li = document.createElement('li');
   li.innerHTML = questions[i].qustion;
   ol.appendChild(li);
   var ul = document.createElement('ul');
   li.appendChild(ul);
   for (j=0; j<3; j++){
   var answer = document.createElement('li');
   ul.appendChild(answer);
   checkbox = document.createElement('input');
   checkbox.setAttribute('type', 'checkbox');
    var span = document.createElement('span');
    var label = document.createElement('label');
    span.innerHTML = questions[i].answers[j];
    label.appendChild(checkbox);
    label.appendChild(span);
    answer.appendChild(label);

   }
  }

 }

}
progrmmingTest.addH1();
progrmmingTest.addForm();
progrmmingTest.addQuestions([
  {qustion: 'Вопрос №1',
   answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']},
  {qustion: 'Вопрос №2',
 answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']},{
   qustion: 'Вопрос №3',
  answers: ['вариант ответа №1','вариант ответа №2','вариант ответа №3']
 }]);
 progrmmingTest.addInputSubmit();
