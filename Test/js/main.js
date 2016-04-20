var start = document.querySelector('.start');

start.addEventListener('click', function () {

 var objDate = new Date()
 milSecNow = objDate.getMilliseconds()
 setInterval(calculateTime,1)
});

function calculateTime(){
  time = objDate.getMilliseconds - milSecNow
  console.log(time);
};
