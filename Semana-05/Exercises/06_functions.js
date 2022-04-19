console.log('--EXERCISE 6: FUNCTIONS');

//a.Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function sum(num1, num2){
    return num2+num1;
};

console.log('Result:', sum(4,6));

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function sum(num1, num2){
    if (typeof num1 && typeof num2 === 'number'){
        return num1+num2;
    } else{
        alert('One of the parameters has an error')
        return NaN;
    }  
};

console.log('Result:', sum(10, 'dos'));

//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');

function validateInteger(number){
    return (number === Math.floor(number));
}

console.log('Result:', validateInteger(8), validateInteger(3.141516));

//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function sumTwo(num1, num2){
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

console.log('Result:', sumTwo(100.456,20.4567));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:')

function validation(num){
    if (!validateInteger(num)){
        alert('Number is not an integer')
        num = Math.round(num);
    }
    return num;
};

function sumThree(num1, num2){
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        alert('One of the parameters is not a number')
        return NaN;
    }
    num1 = validation(num1);
    num2 = validation(num2);
    return num1+num2;
}

console.log('Result A:', sumThree(80,90.657),', Result B: ', sumThree(50.4, 'sick'),', Result C: ', sumThree(1.5,6.9));