// 3. Solicitar al usuario dos números y mostrar su suma.
// Bosquejo
// Entrada: num1=0 (leer); num2=0 (leer); suma=0 (calcular)
// Proceso: suma = num1 + num2 
// Salida: suma 

/*Algoritmo sumar
	
	Definir num1, num2, suma Como Entero
	num1 = 0
	num2 = 0
	
	Escribir "Ingrese el primer numero: "
	Leer num1
	Escribir "Ingreese el segundo numeor: "
	Leer num2
	
	suma = num1 + num2
	
	Escribir "El total es: ", suma
	
FinAlgoritmo*/


function sumar() {
	let num1 = parseFloat(document.getElementById('numero1').value);
	let num2 = parseFloat(document.getElementById('numero2').value);
	let resultado = document.getElementById('resultado');
	let suma = num1 + num2;
	resultado.textContent = `La suma es: ${suma}`;
}

