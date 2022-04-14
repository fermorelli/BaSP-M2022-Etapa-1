console.log('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var stringA = 'Estupefacto';

console.log('Variable original:', stringA,',', 'Variable nueva:', stringA.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var stringB = 'otorrinolaringologo';
var stringC = stringB.substring(0,5);

console.log('Variable original:', stringB,',', 'Variable nueva:', stringC);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');

var stringD = 'pluscuanperfecto';
var stringE = stringD.substring(13,16);

console.log('Variable original:', stringD,',', 'Variable nueva:', stringE);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var stringF = 'longitudinal';
var stringG = (stringF.substring(0, 1)).toUpperCase() + stringF.substring(1,12);

console.log('Variable original:', stringF,',', 'Variable nueva:', stringG);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');

var stringH = 'provincias unidas';
var indexBlank = stringH.indexOf(' ');

console.log('Variable original:', stringH,',', 'Posición espacio en blanco:', indexBlank);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var stringI = 'maravillas modernisimas';
var stringJ = (stringI.substring(0,1)).toUpperCase() + stringI.substring(1,11)
+ (stringI.substring(11,12)).toUpperCase() + stringI.substring(12,23);

console.log('Variable original:', stringI,',', 'Variable nueva:', stringJ);