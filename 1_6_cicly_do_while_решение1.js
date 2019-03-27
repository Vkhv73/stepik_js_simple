//В этом задании вам нужно вычислить сумму всех четных чисел, встречающихся в ряду от 1 до числа (включительно),
// передаваемого в нашу функцию (переменная "а").
//
// Sample Input:
//
// 3
// Sample Output:
//
// 2


function testWhile(a) {
    var x = 0;
    // Тут нужно написать решение
    var i = 1; // переменная i - счётчик
    while (i <= a) {
        console.log('i = ' + i);
        if ((i % 2) == 0) { // проверка условия если i делится на 2, остаток равен 0 то
            x += i; // к переменной x прибавляется i
            console.log('x = ' + x);
        }
        i++; // i увеличивается и снова проверяется условие
    }
    return x;
}
console.log(testWhile(6));

/*function testWhile(a) {
    var x=0;
    do {
        if
        console.log(x);

    } while (x<=a); // Тут нужно написать решение
    return x;
}
console.log(testWhile(5));*/