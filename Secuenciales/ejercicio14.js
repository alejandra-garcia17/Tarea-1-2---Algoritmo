// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// Bosquejo
// Entrada: arreglo(ingresados)
// Proceso: se designan los numeros en el arreglo y vamos llamando a los elementos que queremos
// Salida: se imprimen el primer, el del medio y tercer numeor

/*Algoritmo ElementosArreglo

    Definir arreglo Como Entero
	Dimension arreglo[5]
	
    arreglo[0] <- 10
    arreglo[1] <- 20
    arreglo[2] <- 30
    arreglo[3] <- 40
    arreglo[4] <- 50
	
    Escribir "El primer elemento del arreglo es:", arreglo[0]
    Escribir "El elemento del medio es:", arreglo[2]
    Escribir "El último elemento del arreglo es:", arreglo[4]
	
FinAlgoritmo*/

const arreglo = [15, 20, 25, 30, 35];

console.log("El primer elemento del arreglo es:", arreglo[0]);
console.log("El elemento del medio es:", arreglo[Math.floor(arreglo.length / 2)]);
console.log("El último elemento del arreglo es:", arreglo[arreglo.length - 1]);
