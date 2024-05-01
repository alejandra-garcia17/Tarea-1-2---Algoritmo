// 11. Solicitar al usuario un número y mostrar si es un número de un solo dígito
// Entrada: num=0
// Proceso: Si num >= 0 Y num <= 9 Entonces
//		      Escribir num " es un numero de una cifra"
//          SiNo
//            Escribir num " no es un numero de una cifra"
//          Fin Si
// Salida: El mensaje

/*Algoritmo sin_titulo
	
	Definir num Como Entero
	
	Escribir "ingrese un numero: "
	Leer num
	
	Si num >= 0 Y num <= 9 Entonces
		Escribir num " es un numero de una cifra"
	SiNo
		Escribir num " no es un numero de una cifra"
	Fin Si
	
FinAlgoritmo*/

function verificarDigito() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (numero >= 0 && numero <= 9) {
        resultado.textContent = `${numero} es un número de un solo dígito.`;
    } else {
        resultado.textContent = `${numero} no es un número de un solo dígito.`;
    }
}
