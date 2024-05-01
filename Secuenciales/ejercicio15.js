// 15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último
// elemento entre sí
// Bosquejo
// Entrada: arreglo(ingresado)
// Proceso:
// Salida: "Arreglo modificado:"

/*Algoritmo IntercambiarElementos
	Dimension arreglo[5]
    Definir arreglo Como Entero
    Definir temp Como Entero
	
    arreglo[0] <- 12
    arreglo[1] <- 18
    arreglo[2] <- 20
    arreglo[3] <- 42
    arreglo[4] <- 50
	
    Escribir "Arreglo original:", arreglo[0], ", " arreglo[1], ", " arreglo[2], ", " arreglo[3], ", " arreglo[4]
	
    temp <- arreglo[0]
    arreglo[0] <- arreglo[4]
    arreglo[4] <- temp
	
    Escribir "Arreglo modificado:", arreglo[0], ", " arreglo[1], ", " arreglo[2], ", " arreglo[3], ", " arreglo[4]
FinAlgoritmo*/

let arreglo = [12, 18, 20, 42, 50];

console.log("Arreglo original:", arreglo.join(", "));

let temp = arreglo[0];
arreglo[0] = arreglo[arreglo.length - 1];
arreglo[arreglo.length - 1] = temp;

console.log("Arreglo modificado:", arreglo.join(", "));
