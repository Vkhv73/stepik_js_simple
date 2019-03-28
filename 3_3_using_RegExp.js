//Первый и самый простой это метод search()
// В качестве аргумента мы передаем ему регулярное выражение,
// а он нам в ответ возвращает номер позиции, с которой найдено
// соответствие шаблону, либо "-1" если соответствие не найдено.

var myString = "This is just test string";
result = myString.search(/Th/);
console.log(result);
// В указанном примере в переменной result окажется число 2 ("Th[IS] is just test string"
// - отсчет позиций начинается с 0).

//__________________________________________________________________//

//Следующий метод, с которым мы познакомимся, это replace()
//
// С его помощью можно выполнить операцию поиска с заменой.
// В качестве аргументов он принимает регулярное выражение и строку замены.

 var myString = "This is just test string";
result = myString.replace(/is/,"AS");
console.log(result);

// Данный пример заменит первое найденное соответствие шаблону ("is") на подстроку "as",
// в результате в переменной result окажется строка  "ThAS is just test string".

//Нужно отметить, что этот метод поддерживает глобальный поиск и
// при использовании флага "g" поменяет все найденные соответствия.

var myString = "This is just test string";
result = myString.replace(/is/g,"US");
console.log(result);
// В этом примере в переменной result окажется строка  "ThUS US just test string".

//__________________________________________________________________//

//Следующий интересующий нас метод это match().
//
// Он принимает в качестве аргумента регулярное выражение (или преобразовывает
// в него аргумент подобно предыдущим методам), а в качестве результата возвращает
// массив всех найденных соответствий.

var myString = "У дедушки в деревне было 12 яблонь, 5 кустов смородины, 10 кур и 33 коровы";
result = myString.match(/\d{1}/g);
console.log(result);
// В данном примере мы записали в регулярное выражение обозначение цифры "\d", указали что
// ищем её двойное повторение "{2}" и включили флаг глобального поиска "g". В результате
// в переменной result окажется массив [12, 10, 33].
//
// Однако если флаг глобального поиска не будет указан, то в массив попадет только первое
// совпадение, оно запишется нулевым элементом. Остальными элементами массива будут подстроки,
// соответствующие всем подвыражениям, если таковые имеются.

//__________________________________________________________________//

//И последний из методов объекта String, позволяющих работать с регулярными выражениями, является split()
//
// Он разбивает строку на массив подстрок, используя в качестве разделителя содержимое аргумента,
// которое в том числе может быть и регулярным выражением. Например, использовав в качестве
// разделителя два слэша можно отделить в веб-адресе протокол от собственно наименования сайта:

var myString = "http://www.example.com/download/pictures";
result = myString.split(/\/{2}/g);
console.log(result);
//Результатом данного выражения станет массив из
// двух элементов: "http:" и  "www.example.com/download/pictures"

//Таким же образом, например, можно разбить на массив строку состоящую из цифр:
var myString = "1234567890987654321"
result = myString.split(/\B/g);
console.log(result);
//Используя в качестве разделителя определение символа, не являющегося границей
// слова (странное решение, но почему нет) получим в переменной result массив
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1].

//__________________________________________________________________//
