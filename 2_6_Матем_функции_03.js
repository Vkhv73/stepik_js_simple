// В этом задании в нашу функцию передаются 4 числа.
// Вам необходимо вычислить результат деления большего из этих чисел на меньшее,
// и округлив до ближайшего меньшего целого вернуть из функции.

// Sample Input:
//
// 1 4 8 8
// Sample Output:
//
// 8

function testMath(a, b, c, d) {
   /* let ma = Math.max(a, b, c, d);
    let mi = Math.min(a, b, c, d);
    let x = ma / mi;
    return Math.floor(x); */

    return Math.floor(Math.max(a, b, c, d)/Math.min(a, b, c, d));
}


console.log (testMath(3, 4, 8, 8));