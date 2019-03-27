//У цикла while есть разновидность : конструкция do ... while
// Данная конструкция отличается от предыдущей тем, что оператор проверки условия расположен
// ПОСЛЕ основного тела исполняемого кода, что обеспечивает как минимум однократное выполнение блока кода.
//
// Синтаксис выглядит следующим образом:
//
// do {
//   исполняемый код
// } while (переменная == проверочное значение);
// Приведем пример использования этой конструкции:

var x = 5;                //установка начального значения
do {                      //начало выполнения цикла
    console.log(x);         //вывод данных в консоль
    x = x - 1;              //уменьшение значения на 1
} while (x >= 1);         //проверка условия
// В данном случае программа будет выводить в консоль значение переменной "х" в диапазоне от 5 до 1, результат будет "54321"