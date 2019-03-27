//В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции строку,
// которая будет включать в себя обе этих строки, преобразовав в первой строке все буквы в заглавные,
// а во второй - в строчные.
//
// Sample Input:
//
// Hello World!
// Sample Output:
//
// HELLOworld!

function testStr(a, b) {
    return a.toUpperCase()+b.toLowerCase();// Тут нужно написать решение
}

console.log(testStr('Hello','World!'));

function testStr2(a, b) {
    return a.toUpperCase().concat(b.toLowerCase());// Тут нужно написать решение
}

console.log(testStr2('ЖоПа','мИрА!'));