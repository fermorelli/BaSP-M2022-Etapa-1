console.log('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var stringA = 'thunderstruck';

console.log('Original variable:', stringA,',', 'New variable:', stringA.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var stringB = 'otorhinolaryngologist';
var stringC = stringB.substring(0,5);

console.log('Original variable:', stringB,',', 'New variable:', stringC);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');

var stringD = 'friendship';
var stringE = stringD.substring(7,10);

console.log('Original variable:', stringD,',', 'New variable:', stringE);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var stringF = 'everything';
var stringG = (stringF.substring(0, 1)).toUpperCase() + stringF.substring(1,10);

console.log('Original variable:', stringF,',', 'New variable:', stringG);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:'); 

var stringH = 'united states';
var indexBlank = stringH.indexOf(' ');

console.log('Original variable:', stringH,',', 'Blank position:', indexBlank);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var stringI = 'appreciate motivation';
var stringJ = (stringI.substring(0,1)).toUpperCase() + stringI.substring(1,11)
+ (stringI.substring(11,12)).toUpperCase() + stringI.substring(12,21);

console.log('Original variable:', stringI,',', 'New variable:', stringJ);