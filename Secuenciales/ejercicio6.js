// 6. Pedir al usuario dos números y mostrar el resultado de multiplicarlos
// Bosquejo
// Entrada: num1=0(leer), num2=0(leer), mul=0(calcular)
// Proceso: mul = num1 * num2
// Salida: mul

/*Algoritmo multiplicacion
	
	Definir num1, num2, mul Como Entero
	
	Escribir "Ingrese el primer numero"
	Leer num1
	Escribir "Ingrese el segundo numero"
	Leer num2
	
	mul = num1 * num2
	
	Escribir "El resultado de la multiplicacion es: ", mul
	
FinAlgoritmo*/


function Multiplicacion() {
	let num1 = parseFloat(document.getElementById('numero1').value);
	let num2 = parseFloat(document.getElementById('numero2').value);
	let resultado = document.getElementById('resultado');
	let multiplicacion = num1 * num2;
	resultado.textContent = `El resultado de la multiplicación es: ${multiplicacion}`;
}
