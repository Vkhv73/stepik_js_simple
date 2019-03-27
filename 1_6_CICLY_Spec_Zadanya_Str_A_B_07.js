// Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно.
// Неизвестно, какое из чисел a или b больше.

//
// Sample Input 1:
//
// 9 4
// Sample Output 1:
//
// 271
// Sample Input 2:
//
// 2 7
// Sample Output 2:
//
// 139


function testCycle(a, b) {
    var x = 0;

    if (a <= b) {
        for (i = a; i <= b; i++) {
            //x = x + i * i;
            x = x + Math.pow(i, 2);
        }
    } else if (a >= b) {
        for (i = a; i >= b; i--) {
            x = x + Math.pow(i,2);
        }
    }

     // Тут нужно написать решение
    return x;
}
console.log(testCycle(1,3));


/*function testCycle(a, b) {
    var x = 0;
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (a <= b) {
        for (i = a; i <= b; i++) {
            x = x + i * i;
            //x = x + Math.pow(i, 2);
        }
    } else if (a >= b) {
        for (i = a; i >= b; i--) {
            x = x + i + ' ';
        }
    }

    for (i = min; i <= max; i++) {
        x = x + Math.pow(i, 2);
    }

    // Тут нужно написать решение
    return x;
}
console.log(testCycle(9,4));

*/