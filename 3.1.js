function testFactorial(inputData) {

    if (inputData == 0){
        return 1;
    }
    if (inputData < 0){
        throw "Число не должно быть меньше нуля";
    }
    return (inputData - 1) ? (inputData * testFactorial(inputData - 1)) : inputData;
}


var myNumber = -5;

// console.log(myNumber);

try {
    console.log(testFactorial(myNumber));
} catch(lalala) {
    console.log(lalala);
}

// console.log('хороший день');
