

myString = new String("Hello world");
console.log(myString.valueOf());

// toString()

myString = new String("Hello world");
console.log(myString.toString());

myString = new String("Hello world");
console.log(myString.toString());

// ЗАДАНИЕ 4
/* В этом задании в нашу функцию testStr передаются две строки.
Вам нужно вернуть индекс позиции, с которой начинается вхождение второй строки в первую.
 */

/*Sample Input 1:

This is a test string
test
Sample Output 1:

10
Sample Input 2:

This is a test string for testing
test
Sample Output 2:

10
*/

function testStr(a, b) {
    var myString = a;
    return myString.indexOf(b);// Тут нужно написать решение
}




console.log(testStr('This is a test string','tri'));