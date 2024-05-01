// 5. Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años 
// tendrá en el próximo año.
// Bosquejo
// Entrada, edad=0(Leer), proximoAnioo=0 (calcular)
// Proceso: proximoAnio = edad + 1
// Salida: proximoAnio

/*Algoritmo edadProximamente
	
	Definir edad, proximoAnio Como Entero
	
	Escribir "Ingrese su edad actual: "
	Leer edad
	
	proximoAnio = edad + 1
	
	Escribir "El proximo año tendras ", proximoAnio, " años "
	
FinAlgoritmo*/


function edadProximamente() {
	let edad = parseInt(document.getElementById('edad').value);
	let proximoAnio = edad + 1;
	let resultado = document.getElementById('resultado');
	resultado.textContent = `El próximo año tendrás ${proximoAnio} años.`;
}

