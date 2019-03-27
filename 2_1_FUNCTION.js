//Создание, т.е. определение функции начинается с ключевого слова function, после которого указываются следующие данные:
//
// Имя функции, которое будет использовано при создании переменной, которой будет присвоен объект нашей новой функции.
// Список входных параметров в круглых скобках (может отсутствовать).
// Тело функции в фигурных скобках - собственно список исполняемых команд (также может отсутствовать) .
//
// Давайте рассмотрим пример создания функции, которая будет выводить слова "Hello World!"

function printText() {                   //Определение функции
    document.write("Hello World!");        //Тело функции - вывод текста в документ
};
printText();
// Теперь для того, чтобы напечатать на экране  слова "Hello World!" нам достаточно в коде просто вызвать эту функцию:

//А если мы хотим создать функцию, в которую будет передаваться произвольное значение, которое нужно вывести,
// то нам нужно создать функцию с параметром:

 function printText(a) {           //Определение функции
   document.write(a);              //Тело функции - вывод содержимого переменной "а" в документ
 };
// Теперь мы можем вызывать нашу функцию с параметром:
//
 printText("Hello World!");
