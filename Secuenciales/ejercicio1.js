// 1. Pedir al usuario su nombre y saludarlo.

// Bosquejo
// Entrada: nom="" (Leer)
// Proceso: nom + mensaje
// Salida: nombre "Bienvenido" 

/*Algoritmo nombre
	
	Definir nom Como Caracter
	Escribir "Escriba su nombre por favor: "
	Leer nom
	
	Escribir "Bienvenid@ a este programa ", nom
	
FinAlgoritmo*/

function nombre1() {
	let nombre = document.getElementById('nombre').value;
	let mensaje = document.getElementById('mensaje');
	mensaje.textContent = `Bienvenid@ a este programa, ${nombre}`;
}
