var domElements = {
buttonStart: document.querySelector('.start'),
buttonStop:  document.querySelector('.stop'),
buttonClean:  document.querySelector('.clean'),
Msec: document.querySelector('.msecands'),
Sec: document.querySelector('.secunds'),
Min: document.querySelector('.minuts'),
Hours: document.querySelector('.hours')
};
var mSec;
var sec = 0;
var min = 0;
var hour = 0;
var timerId;
var timeNow;
domElements.buttonStart.addEventListener('click', function(){
  domElements.buttonStart.classList.add('display-none');
  domElements.buttonStop.classList.remove('display-none');
    timeNow = Date.now();
   timerId = setInterval(function (){
     var a = Date.now();
     mSec = a - timeNow ;
     trackTime();
   },10)
  });
  domElements.buttonStop.addEventListener('click', function(){
    domElements.buttonStop.classList.add('display-none');
    domElements.buttonStart.classList.remove('display-none');
    clearInterval(timerId);
  });
  domElements.buttonClean.addEventListener('click', function(){
     mSec = 0;
     sec = 0;
     min = 0;
     hour = 0;
     domElements.Msec.innerHTML = '000';
     domElements.Sec.innerHTML = '00';
     domElements.Min.innerHTML = '00';
     domElements.Hours.innerHTML = '00';

  });




  function trackTime() {
    domElements.Msec.innerHTML = mSec;
    if (mSec >= 999){
       mSec = 0;
       sec++;
       timeNow= Date.now();
      domElements.Sec.innerHTML = sec;
   }if (sec == 60) {
     sec = 0;
     min++;
     domElements.Min.innerHTML = min;
  }if (min == 60) {
     min = 0;
     hour++;
     domElements.Hours.innerHTML = hour;
  }
  if (  domElements.Sec.innerHTML<10) {
    domElements.Sec.innerHTML = '0'+ sec;
  }
  if (domElements.Min.innerHTML<10) {
      domElements.Min.innerHTML = '0'+ min;
  }
  if (domElements.Hours.innerHTML<10) {
      domElements.Hours.innerHTMLL = '0'+ hour;
  }
};
