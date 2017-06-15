function genericFunc(argument) {
    var arrayOfArgs = [];
    arrayOfArgs.push(argument);
    return arrayOfArgs;
}
var stringGenericArray = genericFunc('beep');
console.log(stringGenericArray[0]);
console.log(typeof stringGenericArray[0]);
var intGenericArray = genericFunc(18);
console.log(intGenericArray[0]);
console.log(typeof intGenericArray[0]);
