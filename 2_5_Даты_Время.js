//Для работы с датами и временем в JavaScript используется объект Date.
//
// Объект Date создается с помощью конструктора Date(). Есть несколько способов создания объекта такого типа:
//
// var x = new Date() //В объект попадут текущие дата и время
// var x = new Date(миллисекунды) //Количество миллисекунд отсчитывая с 1 января 1970г
// var x = new Date(строкаДаты)
// var x = new Date(год, месяц, день[, часы, минуты, секунды, миллисекунды])

/*
var x = new Date();

console.log(x);

var myDate = new Date(); //Mon May 15 2017 19:20:25 GMT+0300 (RTZ 2 (зима))
var myDate = new Date("December 14, 1975 12:10:00"); //Sun Dec 14 1975 12:10:00 GMT+0300 (RTZ 2 (зима))
var myDate = new Date(1989, 6, 14);  //Fri Jul 14 1989 00:00:00 GMT+0400 (RTZ 2 (лето))
var myDate = new Date(1998, 6, 14, 11, 20, 00); //Tue Jul 14 1998 11:20:00 GMT+0400 (RTZ 2 (лето))
console.log(myDate);

var myDate = new Date();               // Создаем объект типа Date, в нем оказывается текущая дата
myDate.setFullYear(2017, 4, 22);       // Присваиваем ему значение даты - 22 мая 2017
console.log(myDate);
myDate.setDate(myDate.getDate() + 10); // Устанавливаем новое значение даты, получив прежнее и прибавив 10.
console.log(myDate);

// В примере ниже мы сравниваем текущую дату с датой 1 Января 2018 и если она совпадает - печатаем поздравление.
*/

var currentDate = new Date();             // Объявляем переменную для текущей даты
var nextNewYear = new Date();             // Объявляем переменную для даты Нового Года
nextNewYear.setFullYear(2019, 2, 24);   // Записываем значение даты для Нового Года - 1 января 2018
console.log(currentDate.toString());
console.log(nextNewYear);



if (currentDate.toDateString() == nextNewYear.toDateString()) {
    console.log("Поздравляем с Новым, 2018-м Годом! Ура!!!");
}
else {
    console.log('Идите на хуй!!!');
}
