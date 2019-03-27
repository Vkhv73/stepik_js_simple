//В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
// Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
//
// Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".

// Sample Input 1:
//
// 19 October 1909 10:27
// 28 March 1909 00:59
// Sample Output 1:
//
// Вторник
// Sample Input 2:
//
// 04 August 1909 00:24
// 03 November 1909 06:54
// Sample Output 2:
//
// Среда

function testDateTime(a, b) {
    var days =['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var dat1 = new Date(a);
    var dat2 = new Date(b);
    var x;
    //console.log(dat1, dat1.getDay());
    //console.log(dat2, dat2.getDay());
    //if (dat1 == dat2){
        //console.log(dat1.getDay());
        /*else*/
    if (dat1<dat2){
        x = dat2.getDay();
        //return x;
        //console.log(x);
    } else {
        x = dat1.getDay();
        //return x;
        //console.log(x);
    }
    return days[x];
}
console.log(testDateTime('19 October 1909 10:27','28 March 1909 00:59'));


/*a = 10;
b = 20;
if(a == b) {
    console.log(a);
}else if(a > b){
    console.log(a);
} else {
    console.log(b);
}
*/