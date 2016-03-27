// Создать объект с методами, которые будут динамически генерировать DOM вот такой
// страницы. Это будет тест, который мы будем разрабатывать в следующих заданиях.
// Сейчас вам нужно только динамически создать html, методы должны храниться в
// одном объекте. Для того чтоб страница выглядела красиво можете использовать
// Bootstrap и создавать DOM-элементы с готовыми бутстраповскими классами.
// Изначально на странице должен быть только <body>, вызывая методы объекта нужно
// создать dom-элементыvar

var programmingTest = {
  // create tags
  h1: document.createElement('h1'),
  p: document.createElement('p'),
  label: document.createElement('label'),
  input: document.createElement('input'),
  button: document.createElement('button'),

  // add create elements in DOM
  body: document.body,
  addForm: function () {
    form = document.createElement('form');
    document.body.appendChild(form);
  },

  addH1: function() {
    this.h1.innerHTML = 'Тест по программированию';
    this.body.appendChild(this.h1);
  },
  addFigure: function() {
      for(i=0; i<3; i++) {
        var figure = document.createElement('figure');
        figure.innerHTML = 'Test';
        this.body.appendChild(figure);
      }
  }

}
programmingTest.addForm();
console.log(programmingTest.addH1());
programmingTest.addFigure();
