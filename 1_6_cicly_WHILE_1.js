//Теперь рассмотрим цикл while. В нем происходит выполнение блока кода пока заданное условие истинно.
// Синтаксис выглядит следующим образом :
//
// while (переменная == конечное значение) {
// //конечно в цикле может использоваться не только оператор сравнения,
// а любое выражение, возвращающее логическое значение   исполняемый код
// }
// Например :

var x = 1;
//объявляем и инициализируем переменную, которую
//мы будем использовать как условие цикла
while (x <= 5) {
    console.log(" x= " +x);
    x = x + 1;
}
// В результате выполнения данного кода произойдет пятикратный вывод значения переменной х.

// console.log "факториал (a)"(testFactorial(5));