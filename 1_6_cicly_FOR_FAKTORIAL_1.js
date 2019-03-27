// В этом задании вам нужно вычислить факториал для числа, передаваемого в нашу функцию.
// На всякий случай напоминаем, что факториал числа a это произведение всех целых чисел от 1 до a,
// например, если а = 5, то факториал a будет равен
// 1 * 2 * 3 * 4 * 5

var a=5;

function testFactorial(a) {
        var x = 1;
        for (var i=1; i<=a; i++ ) {
            console.log(i+'\n');
            x = x* i;
        }
        console.log(x);
    console.log('test');
    return x;
}
console.log(testFactorial(a));