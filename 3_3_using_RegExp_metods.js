//Методов у объекта RegExp всего два :

// exec(text) - выполнение поиска в строке, указанной в качестве параметра, возвращает массив найденных соответствий.
// test(text) - проверка соответствия регулярному выражению, возвращает true\false.
/*
//-------------- метод EXEC -----------------------
// Метод exec() выполняет регулярное выражение по отношению к строке-аргументу,
// результатом его работы является массив, в который попадают соответствия.
// Если соответствий не найдено, то результатом будет null. А если соответствие есть,
// то оно попадает в массив нулевым элементом, при этом свойство lastIndex объекта
// сместится на позицию, следующую непосредственно за найденной подстрокой.
// Давайте рассмотрим на примере :

var myString = "This is just a test text";  // Задаем строку для поиска
var myPattern = /te|is/g;                   // Задаем шаблон - либо "te" либо "is"

result = myPattern.exec(myString);
console.log(result);

//result будет равен "is" - первому совпадению шаблона, свойство lastIndex примет значение 4

result = myPattern.exec(myString); //result == "is" - второму совпадению шаблона, lastIndex == 7
console.log(result);
result = myPattern.exec(myString); //result == "te" - третьему совпадению шаблона, lastIndex == 17
console.log(result);
result = myPattern.exec(myString); //result == "te" - четвертому совпадению шаблона, lastIndex == 22
console.log(result);

//В этом примере мы четыре раза подряд вызываем метод exec(), каждый раз он сдвигает
//указатель начала поиска на позицию, следующую за найденным совпадением и присваивает
// переменной result само найденное совпадение.
*/
//-------------- метод TEST -----------------------
// Метод test() выполняет регулярное выражение по отношению к строке-аргументу,
// результатом его работы является логическое значение - true если совпадение есть,
// и false если нет. Свойство lastIndex объекта также как и у метода exec() сместится
// на позицию, следующую непосредственно за найденной подстрокой.
//
// Важный момент! Если совпадение не найдено, то lastIndex будет смещен
// на позицию 0 и поиск можно будет начинать сначала.
//
// Давайте рассмотрим на таком же примере :

var myString = "This is just a test text";  // Задаем строку для поиска
var myPattern = /te|is/g;                   // Задаем шаблон - либо "te" либо "is"

result = myPattern.test(myString) +' '+ myPattern.exec(myString);
console.log(result);

// result будет равен true, поскольку будет найдено первое совпадение, свойство lastIndex примет значение 4

 result = myPattern.test(myString); // result == true, lastIndex == 7
console.log(result);
 result = myPattern.test(myString); // result == true, lastIndex == 17
console.log(result);
 result = myPattern.test(myString); // result == true, lastIndex == 22
console.log(result);
 result = myPattern.test(myString); // result == false, lastIndex == 0
console.log(result);

// В этом примере мы четыре раза подряд вызываем метод test(), каждый
// раз он сдвигает указатель начала поиска на позицию, следующую за
// найденным совпадением и присваивает переменной result булево
// значение - true если совпадение найдено и false - если нет. В последнем
// запуске совпадение не найдено, поэтому указатель lastIndex получает значение 0.

