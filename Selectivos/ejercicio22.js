// 22. Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Bosquejo
// Entrada: elementos [](ingresar), suma=0(calcular), i 
// Proceso: 
// Salida: suma

/*Algoritmo SumaElementosArreglo
    Definir elementos, suma, i Como Entero
	Dimension elementos[5]
	
    // Leer los elementos del arreglo
    Para i <- 0 Hasta 4 Hacer
        Escribir "Ingrese el elemento ", i, ": "
        Leer elementos[i]
    FinPara
	
    // Calcular la suma de los elementos
    suma <- 0
    Para i <- 0 Hasta 4 Hacer
        suma <- suma + elementos[i]
    FinPara
	
    // Mostrar el resultado
    Escribir "La suma de los elementos es: ", suma
FinAlgoritmo*/

function sumarElementos() {
    let elementos = [];
    for (let i = 1; i <= 5; i++) {
        elementos.push(parseInt(document.getElementById('elemento' + i).value));
    }

    let suma = elementos.reduce((total, elemento) => total + elemento, 0);
    document.getElementById('resultado').textContent = `La suma de los elementos es: ${suma}`;
}
