// Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное
// число в указанную степень. Указать число и степень пользователь должен через
// команду prompt. Результат выполнения функции вывести в консоль.
// Работать с целыми числами, большими, меньшими, и равными нулю.
// Бесконечности можно не обрабатывать

var number = prompt('Enter number');
var power = prompt('Enter power');

function abs(number){
  if (number < 0){
    return -number;
  }
  return number;
}

function pow(number, power) {
  var result = 1;
  if (isNaN(number) || isNaN(power)){
    return NaN;
  }
  if (power === 0){
    return 1;
  }
  for(var i=0;i < abs(power);i++){
  result = result*number;
  }
  if (power < 0 && result != 0){
    return 1 / result;
  }

  return result;
}

console.log(pow(number,power));
console.log(Math.pow(number,power));
