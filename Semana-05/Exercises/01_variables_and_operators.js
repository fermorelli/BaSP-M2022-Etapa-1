console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

//a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números enuna 3er variable.

console.log('-Exercise 1.a:');

var numberOne = 40;
var numberTwo = 60;
var numberThree = numberOne + numberTwo;

console.log('Variable 1:', numberOne,',', 'Variable 2:', numberTwo,',', 'Variable 3:', numberThree);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b:');

var stringOne = 'Hello';
var stringTwo = 'World';
var stringThree = stringOne + ' ' + stringTwo;

console.log('Variable 1:', stringOne,',', 'Variable 2:', stringTwo,',', 'Variable 3:', stringThree);

//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

console.log('-Exercise 1.c:');

var stringFour = 'magistracy';
var stringFive = 'beautify';
var stringSix = stringFour.length + stringFive.length;

console.log('Variable 1:', stringFour,',', 'Variable 2:', stringFive,',', 'Variable 3:', stringSix);