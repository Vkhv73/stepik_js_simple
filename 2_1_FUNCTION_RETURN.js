// Для возврата результата работы функции используется ключевое слово return.
/*
// Оно помещается в теле функции в том месте, где нужно вернуть результат и
// выйти из функции обратно к месту в коде, откуда она была вызвана.

var x = 2;
    function mySquare(x) {
    return x*x;
}
console.log(mySquare(x));
// В приведенном примере функция возвращает переданное ей значение, возведенное в квадрат.
*/
//Ключевое слово return может использоваться в функции не один раз, а сколько необходимо.
// В приведенном ниже примере можно видеть что выход из функции может осуществляться в разных
// местах функции в зависимости, например, от значения входного параметра:
//
var x = 0.27;
 function divideOneTo(x) {
   if (x != 0) {
     return 1/x;
   } else {
     return "А на ноль делить нельзя!";
   }
 }
 console.log(divideOneTo(x));
// В данном случае мы сделали функцию, возвращающую результат деления единицы на входной параметр,
// если он отличен от нуля, или фразы "А на ноль делить нельзя!" - если мы передаем в функцию ноль.
//
// Однако, использование ключевого слова return не является обязательным. Если в теле функции его нет,
// то после выполнения всех команд интерпретатор закончит выполнение функции.
// Значение, которое возвращает эта функция будет "undefined".