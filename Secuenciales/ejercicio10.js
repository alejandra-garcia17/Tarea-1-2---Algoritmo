// 10. Pedir al usuario dos números y mostrar el mayor.
// Bosquejo
// Entrada: num1=0(leer); num2=0(leer)
// Proceso:Si num1 > num2 Entonces
//		     Escribir num1, " es mayor que ", num2
//        SiNo
//           Escribir num2, " es mayor que el ", num1
//        Fin Si
// Salida: Escribir num1, " es mayor que ", num2 o Escribir num2, " es mayor que el ", 
// num1 o "Ambos números son iguales"

/*Algoritmo MostrarMayor

    Definir num1, num2 Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Si num1 > num2 Entonces
        Escribir num1, " es mayor que ", num2
    Sino Si num2 > num1 Entonces
			Escribir num2, " es mayor que ", num1
		Sino
			Escribir "Ambos números son iguales"
		Fin Si
	Fin Si

FinAlgoritmo*/
 

function mostrarMayor() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado');

    if (num1 > num2) {
        resultado.textContent = `El número ${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
        resultado.textContent = `El número ${num2} es mayor que ${num1}`;
    } else {
        resultado.textContent = "Ambos números son iguales";
    }
}

