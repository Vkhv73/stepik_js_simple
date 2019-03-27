//Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a.
//
// Sample Input 1:
// 5 6
// Sample Output 1:
// 5 6
// Sample Input 2:
// 6 24
// Sample Output 2:
// 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24


function testCycle(a, b) {
    var x='';
    for (i=a; i<=b; i++){
        x = x + i + ' ';
    }

    return x;
}// Тут нужно написать решение

console.log(testCycle(6, 24));
