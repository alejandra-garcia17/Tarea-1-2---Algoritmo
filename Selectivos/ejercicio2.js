
// 2. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Bosquejo
// Entrada: num(leer)
// Proceso: Si edad >= 18 Entonces
//             Escribir "Usted es mayor de edad"
//          SiNo
//            Escribir "Usted no es mayor de edad"
//          Fin Si
// Salida: El mensaje

/*Algoritmo edad_votar
	
	Definir edad Como Entero
	
	Escribir "Ingrese su edad"
	Leer edad
	
	Si edad >= 18 Entonces
		Escribir "Usted es mayor de edad"
	SiNo
		Escribir "Usted no es mayor de edad"
	Fin Si
	
FinAlgoritmo*/

function edad_votar() {
	let edad = parseFloat(document.getElementById('edad').value);
	let resultado = document.getElementById('resultado');

	if (edad >= 18) {
		resultado.textContent = `Usted es mayor de edad`;
	} else {
		resultado.textContent = `Usted no es mayor de edad`;
	}
}