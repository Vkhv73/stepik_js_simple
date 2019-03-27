// В этом задании в нашу функцию передаются два параметра:
// целочисленная переменная ("а") и некоторая функция ("func").
// Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента.
// Но вот проблема - в функции, похоже, оказалась ошибка.
// Вам нужно возвратить имя (свойство "name") возникающей ошибки.

// Sample Input:
//
// 9
// Sample Output:
//
// EvalError

function func(a) {
    throw new EvalError;
}


function testErrorFunc(a, func) {
    try {
        let x = func(a);
    }
    catch (ex) {
        return ex.name;

    }

    return x;
}



console.log(testErrorFunc(11, func));














