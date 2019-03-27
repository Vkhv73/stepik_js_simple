//В этом задании в нашу функцию testStr передаются две строки.
//Вам нужно вернуть из функции их суммарную длину.
//Sample Input:
//
// 5794675 181683
// Sample Output:
//
// 13

function testStr(a, b, is_string=false) {
    var my_STRING = String(a+b);
   //my_STRING = a+b;
    if (is_string)
        return my_STRING;
    return my_STRING.length;// Тут нужно написать решение
}
console.log(testStr('5794675', '181683'));

/*

function testStr2() {
    var a = String(5794675);
    var b = String(1816836666);
    my_STRING = a+b;
    return my_STRING.length;
    //console.log(my_STRING.length); // Тут нужно написать решение
}

console.log(testStr2())
*/