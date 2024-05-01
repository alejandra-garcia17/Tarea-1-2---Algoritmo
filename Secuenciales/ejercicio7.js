
// 7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados
// Fahrenheit.
// Bosquejo
// Entrada: celsius=0(leer), fahrenhe=0(calcular)
// Proceso: fahrenheit = celsius * (9 / 5) + 32;
// Salida: fahrenheit

/*Algoritmo celsiusAFahrenhei
	
	Definir fahrenheit, celsius Como Real
	
	Escribir "Ingrese la temperatura en grados Celsius: "
	Leer celsius
	
	fahrenheit = celsius * (9 / 5) + 32
	
	Escribir "La temperatura en grados Fahrenheit es: ", fahrenheit
	
FinAlgoritmo*/

c
function convertirACelsius() {
	let celsius = parseFloat(document.getElementById('celsius').value);
	let fahrenheit = celsius * (9 / 5) + 32;
	let resultado = document.getElementById('resultado');
	resultado.textContent = `La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}`;
}


// La función toFixed(2) es un método que se usa en JavaScript para formatear un número 
// decimal con un número específico de decimales después del punto. 
// Ejemplo
// Por ejemplo, si tenemos un número como 77.12345 y aplicamos toFixed(2) a este número, 
// el resultado será 77.12, 