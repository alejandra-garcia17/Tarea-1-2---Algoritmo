
// 1. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Bosquejo
// Entrada: num=0 (leer)
// Proceso: Si num > 10 Entonces
//		       Escribir num " es mayor que 10"
//          SiNo
//            Escribir num " es menor de 10"
//          Fin Si
// Salida: El mensaje

/*Algoritmo mayor_menor10
	
	Definir num Como Entero
	
	Escribir "Ingrese un número; "
	Leer num
	
	Si num > 10 Entonces
		Escribir num " es mayor que 10"
	SiNo
		Escribir num " es menor de 10"
	Fin Si
	
FinAlgoritmo*/

function mayor_menor10() {
    let numero = parseFloat(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (numero > 10) {
        resultado.textContent = `${numero} es mayor que 10`;
    } else {
        resultado.textContent = `${numero} es menor que 10`;
    }
}

