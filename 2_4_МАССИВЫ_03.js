//В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания.
// Вам нужно составить из символов этих строк один массив (каждый символ строки становится
// отдельным элементом массива), затем добавить первым элементом  массива текстовое значение "Иванов",
// и вернуть из функции все элементы в обратном порядке, преобразовав в строку. Обратите внимание,
// что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!
//
// Sample Input:
//
// 4326 297515
// Sample Output:
//
// 5157926234Иванов

/* НИЖЕ ЭТО МНЕ САНЯ ВСЁ РАЗЖЕВАЛ
function testArray(a, b) {
    let my_mass =[];
    let x = a.concat(b);
    console.log(x);
    let result = '';

    for(let i=0; i<x.length; i++){
        my_mass.push(x[i]);
        console.log('x[' + i + '] = ' + x[i]);
        console.log(my_mass);
    }

    my_mass.unshift('Иванов');
    my_mass = my_mass.reverse();  //

    for(let i=0; i<my_mass.length; i++){
        result = result + my_mass[i];
        console.log(result);
    }

    return result;
}
console.log(testArray('4326', '297515'));
*/
// ТЕПЕРЬ САМ ПОПРОБУЮ:

function testArray(a, b) {
    let my_arr = [];
    let x = a.concat(b);

    for (let i = 0; i < x.length; i++) {
        //my_arr.split(x[i]);
        my_arr.push(x[i]);
        //console.log('x[' + i + '] = ' + x[i]);
        //console.log(my_arr);
    }
    //console.log(my_arr);

    my_arr.unshift('Иванов');
    //my_arr = my_arr.reverse();
    //my_arr = my_arr.join('');
    //console.log(my_str);
    return my_arr.reverse().join('');
    /*for (let i = 0; i < my_arr.length; i++) {
        result = result + my_arr[i];
        console.log(result);

    }*/

}

console.log(testArray('4326', '297515'));