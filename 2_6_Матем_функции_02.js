// А тут вам нужно вычислить и вернуть из функции площадь треугольника.
// Передаваемые в функцию аргументы "a" и "b" - это длины сторон,
// а "c" - это угол между ними в градусах.

// Sample Input:
//
// 2 10 16
// Sample Output:
//
// 2.7563735581699915

function testMath(a, b, c,) {
   // var S = 0.5*a*b*Math.sin(c*Math.PI/180);
    return 0.5*a*b*Math.sin(c*Math.PI/180);
}


console.log(testMath(2, 10, 16));