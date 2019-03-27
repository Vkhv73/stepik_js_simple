//Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат.
//
// Sample Input 1:
// 3
// Sample Output 1:
// 6
// Sample Input 2:
// 6
// Sample Output 2:
// 21

function testCycle(n) {
    var x=0;
    for (i=1; i<=n; i=i+1) {
        x=x+i;
    }
                                // Тут нужно написать решение
    return x;
}
console.log(testCycle(5));

// Ниже решение из примеров, выполненное другими:

function testCycle(n) {
    var x=0;
    for (i=1; i<=n; x+=i++);
    return x;
}
console.log(testCycle(6));

// и ещё вариант:
// Сумма арифметической прогрессии, 7-9 классы

function testCycle(n) {
    return (1+n)/2*n;
}
console.log(testCycle(5));