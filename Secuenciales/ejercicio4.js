// 4. Pedir al usuario un número y mostrar su doble
// Bosquejo
// Entrada: num=0 (Leer); doble=0 (calculable)
// Proceso: doble = num * 2
// Salida: doble

/*Algoritmo numeroDoble
	
	Definir num, doble Como Entero
	num = 0
	
	Escribir "Ingrese un número por favor"
	Leer num
	
	doble = num * 2
	
	Escribir "EL doble de ", num " es ", doble
	
FinAlgoritmo*/ 


function numeroDoble() {
	let num = parseFloat(document.getElementById('numero').value);
	let doble = num * 2;
	let resultado = document.getElementById('resultado');
	resultado.textContent = `El doble de ${num} es: ${doble}`;
}

