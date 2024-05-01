
// Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Bosquejo
// Entrada: nombre=""
// Proceso: nombre
// Salida: nombre - tres veces xd

/*Algoritmo nombreTresVeces
	
	Definir nombre Como Caracter
	
    Escribir "Ingrese su nombre: "
    Leer nombre
	
    Escribir nombre, ", " nombre, ", "  nombre
	
FinAlgoritmo*/


function mostrarNombre() {
    let nombre = document.getElementById('nombre').value;
    let resultado = document.getElementById('resultado');
    resultado.textContent = `${nombre}, ${nombre}, ${nombre}`;
}
