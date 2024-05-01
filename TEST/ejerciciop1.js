// FILA 1
// 1. Pida al usuario que ingrese un número y determina si es un número especial o no. Un número es especial cuando solo 
// es divisible por 3, 7 y 11.

// bosquejo
// entrada: num=0(leer)
// proceso: si num mod 3 Y num mod 7 y num mod 11 Entonces
//             escribir "el numero es un numero especial
//          sino 
//             escribir "no es un numero especial" 
// salida: el mensaje

/*Algoritmo numEspecial

Definir num Como Entero

Escribir "ingrese un numero"
leer num

    si num mod 3 = 0 Y num mod 7 = 0 y num mod 11 = 0 Entonces
        escribir "el numero es un numero especial
    sino 
        escribir "no es un numero especial"

FinAlgortino*/

function numEspecial(){

    let num = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');

    if (num % 3 === 0 || num % 7 === 0 || num % 11 === 0) {
        resultado.textContent = `${num} es un numero especial`;
    } else {
        resultado.textContent = `${num} no es un numero especial`;
    }
}

