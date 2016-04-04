// alert("Hello World!!!");
var mSec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var clean = false;
var timerId;

// Logika for botton start/pause
var buttonStart = document.querySelector('.start');
buttonStart.addEventListener('click', function () {
    var timerId = setInterval(function tick(){trackTime()}, 1);
} );

var buttonStop = document.querySelector('.stop');
buttonStop.addEventListener('click', function () {
    console.log('click button Stop');
  clearInterval(timerId);

} );

var buttonClean = document.querySelector('.clean');
buttonClean.addEventListener('click', function() {
  console.log('click button Clean');
  var mSec = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;
})

var domMsec = document.querySelector('.msecands');
var domSec = document.querySelector('.secunds');
var domMin = document.querySelector('.minuts');
var domHours = document.querySelector('.hours');

     function trackTime() {
           mSec++
           domMsec.innerHTML = mSec;
       if (mSec == 999){
         mSec = 0
         sec++
         domSec.innerHTML = sec;
      }if (sec == 60) {
        sec = 0
        min++
        domMin.innerHTML = min;
     }if (min == 60) {
        min = 0
        hour++
        domHours.innerHTML = hour;
     }
     if (domSec.innerHTML<10) {
       domSec.innerHTML = '0'+ sec;
     }
     if (domMin.innerHTML<10) {
         domMin.innerHTML = '0'+ min;
     }
     if (domHours.innerHTML<10) {
         domHours.innerHTMLL = '0'+ hour;
     }
   };
