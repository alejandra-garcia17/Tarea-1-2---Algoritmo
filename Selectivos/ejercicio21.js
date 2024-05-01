// 21. Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// Bosquejo
// Entrada: arreglo[](leer), i, mayor(calcular)
// Proceso: Para i <- 1 Hasta 2 Con Paso 1 Hacer
//         Si arreglo[i] > mayor Entonces
//         mayor <- arreglo[i]
//     FinSi
// FinPara
// Salida: mayor

/*Algoritmo MayorDeTresElementosArreglo
   
    Definir arreglo, i Como Entero
    Definir mayor Como Entero
	Dimension arreglo[3]
    
    Para i <- 0 Hasta 2 Con Paso 1 Hacer
        Escribir "Ingrese el elemento ", i, " del arreglo:"
        Leer arreglo[i]
    FinPara
    
    mayor <- arreglo[0]
    Para i <- 1 Hasta 2 Con Paso 1 Hacer
        Si arreglo[i] > mayor Entonces
            mayor <- arreglo[i]
        FinSi
    FinPara
    
    Escribir "El mayor elemento del arreglo es:", mayor
FinAlgoritmo*/

function calcularMayor() {
    let elementos = [];
    for (let i = 1; i <= 3; i++) {
        elementos.push(parseInt(document.getElementById('elemento' + i).value));
    }

    let mayor = Math.max(...elementos);
    document.getElementById('resultado').textContent = `El mayor elemento es: ${mayor}`;
}
