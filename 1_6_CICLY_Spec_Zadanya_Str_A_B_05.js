//Даны числа a и b. Выведите строку с числами между а и b включая границы,
// отсортированными по возрастанию. Неизвестно, какое из чисел больше,
// но известно, что и a и b больше 0.

// Sample Input 1:
//
// 8 1
//
// Sample Output 1:
//
// 1 2 3 4 5 6 7 8
//
// Sample Input 2:
//
// 6 6
//
// Sample Output 2:
//
// 6
//
// Sample Input 3:
//
// 3 5
//
// Sample Output 3:
//
// 3 4 5


function testCycle(a, b) {
    var x='';
    if (a <= b) {
        for (i = a; i <= b; i++) {
            x = x + i + ' ';
        }
    } else if (a >= b) {
        for (i = b; i <= a; i++) {
            x = x + i + ' ';
        }
    }

    return x;

}
// Тут нужно написать решение

console.log(testCycle(6, 6));


