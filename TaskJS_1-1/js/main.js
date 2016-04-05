// Создать программу, которая будет выполнять следующие действия:
//
// Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
// Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
// Введенное имя, циклом сравнивать с именами в массиве
// Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке
// Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя

// Create array
var userNames = [];
// add elements to array
for (var i=0; i<5; i++){
  userNames.push(prompt('Enter '+ (i+1) + ' name'));
}
//add user name and look for it in array
var loginName = prompt('Enter your name');
function userExsits (login){
  for(var i=0; i<userNames.length; i++){
    if((userNames[i]===login) && (userNames[i] !== null)){
    return true;
    }
  }
   return false;
}

// show message
if (userExsits(loginName)) {
  alert(loginName + ' ,вы успешно вошли');
}else{
  alert('пользователя '+loginName+' не существует' );
}
