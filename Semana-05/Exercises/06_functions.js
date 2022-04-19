console.log('--EXERCISE 6: FUNCTIONS');

//a.Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function suma(num1, num2){
    return num2+num1;
};

var resultado = suma(4,6);

console.log('Resultado:', resultado);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function suma(num1, num2){
    if (typeof num1 && typeof num2 === 'number'){
        return num1+num2;
    } else{
        alert('One of the parameters has an error')
        return NaN;
    }  
};

var resultado1 = suma(10, 'dos');

console.log('Resultado:', resultado1);

//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');

function validateInteger(number){
    return (number === Math.floor(number));
}

console.log('Resultado:', validateInteger(8), validateInteger(3.141516));

//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function sumaDos(num1, num2){
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        alert('One of the parameters is not a number')
        return NaN
    } if(!validateInteger(num1) || !validateInteger(num2)){
        alert('One of the numbers is not an integer')
        num1 = Math.round(num1);
        num2 = Math.round(num2);
    }
    return num1+num2;
};

console.log('Resultado:', sumaDos(100.456,20.4567));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:')

function validacion(num){
    if (!validateInteger(num)){
        alert('Number is not an integer')
        num = Math.round(num);
    }
    return num;
};

function sumaTres(num1, num2){
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        alert('One of the parameters is not a number')
        return NaN;
    }
    num1 = validacion(num1);
    num2 = validacion(num2);
    return num1+num2;
}

console.log('Resultado:', sumaTres(80,90.657));