var domElements = {
buttonStart: document.querySelector('.start'),
buttonStop:  document.querySelector('.stop'),
buttonClean:  document.querySelector('.clean'),
Msec: document.querySelector('.msecands'),
Sec: document.querySelector('.secunds'),
Min: document.querySelector('.minuts'),
Hours: document.querySelector('.hours')
};
var test;
domElements.buttonStart.addEventListener('click', function(){
  var timeNow = Date.now();
  var timerId = setInterval(function showMsec(){
    var a = Date.now();
     test = a - timeNow ;
     console.log(test);
    },1)
  })
