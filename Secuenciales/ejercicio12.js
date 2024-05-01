
// 12. Pedir 5 números y asignarlos en un arreglo
// Bosquejo
// Entrada: numeros[](calcular); numero(leer)
// Proceso: for (let i = 0; i < 5; i++) {
//               let numero = parseFloat(read(`Ingrese el número ${i + 1}: `));
//               numeros.push(numero);
//    }
// Salida: numeros

/*Algoritmo Ejercicio1
    Definir cantidad, num, i Como Entero
    cantidad = 5
    Dimension num[cantidad]
    
    Para i <- 1 Hasta cantidad Con Paso 1 Hacer
        Escribir "Ingrese un número para la posición ", i
        Leer num[i]
    FinPara
    
    Escribir "Los números ingresados son : "
    Para i <- 1 Hasta cantidad Con Paso 1 Hacer
        Escribir num[i]
    FinPara
FinAlgoritmo*/


function pedirNumeros() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
        numeros.push(numero);
    }

    let numerosDiv = document.getElementById('numeros');
    numerosDiv.textContent = "Los números ingresados son: " + numeros.join(', ');
}
