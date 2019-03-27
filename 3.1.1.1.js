//Например, для использования объекта Error в функции из предыдущего примера, нам нужно было бы написать вот так:


// Объявление функции
    function testFactorial(inputData) {
        if (inputData < 0)                                    // Проверяем - положительное ли число
            throw new Error("Число не должно быть меньше нуля");   // Создаем и бросаем экземпляр объекта Error
        return (inputData - 1) ? (inputData * testFactorial(inputData - 1)) : inputData;
    }

var myNumber = -5;

try {
    console.log(testFactorial(myNumber));    //  попытка вызова функции
} catch(ex) {
    console.log(ex.message);                 // вывод сообщения об ошибке
}

//В данном случае мы перехватили исключение и вывели в документ его свойство message, в которое ранее поместили
//текст - "Число не должно быть меньше нуля".
