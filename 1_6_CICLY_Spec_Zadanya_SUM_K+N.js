//Даны два целых числа k и n. Верните из функции строку, которая состоит из чисел n,
// повторяющихся k раз, разделенных пробелом. Известно, что и k и n больше либо равно 1.
//
// Sample Input 1:
// 2 4
// Sample Output 1:
// 4 4
// Sample Input 2:
// 6 5
// Sample Output 2:
// 5 5 5 5 5 5

function testCycle(k, n) {
    var x = '';
    for (let i=1; i<=k; i++){
        x = x + n + ' ';
    }
    // Тут нужно написать решение
    return x
}
console.log(testCycle(6, 5));


/*x = ''
i = 1
1(i) <= 6(k)
x = ''(x) + 5(n) + ' ' == '5 '
x = '5 '
i++ == 2
*******************
2(i) <= 6(k)
x = '5 '(x) + 5(n) + ' ' == '5 '(x) + '5 ' == '5 5 '
i++ == 3
*****************
3(i) <= 6(k)
x = '5 '(x) + 5(n) + ' ' == '5 '(x) + '5 ' == '5 5 5 '
i++ == 3
*/

function testCycle2(k, n) {
    var x = '';
    for (let i=1; i<=k; i++){
        x = x + n.toString() + ' ';
    }
    // Тут нужно написать решение
    return x
}
console.log(testCycle2(6, 'b'));


for (let i=1; i<=5; i++){
    console.log(i);
}