// alert("Hello World!!!");
var mSec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var clean = false;


// Logika for botton start/pause
buttonStart = document.querySelector('.start');
buttonStart.addEventListener('click', function () {
    if (timerId !== typeof number) {
    var timerId = setInterval(function tick(){trackTime()}, 1);
  }else if (timerId == typeof number) {
    clearInterval(timerId);
  }
} );

domMsec = document.querySelector('.msecands');

     function trackTime() {
           mSec++
           domMsec.innerHTML = mSec;
           console.log(mSec)
       if (mSec == 999){
         mSec = 0
         sec++
      }else if (sec == 60) {
        sec = 0
        min++
     }else if (min == 60) {
        min = 0
        hour++
     }
   };
