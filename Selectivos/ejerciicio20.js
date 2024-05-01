// 20. Dado un arreglo de 5 elementos indicar si el primero elemento es par y el
// último elemento es impar
// Bosquejo
// Eentrada: elementos=0.0(leer)
// Proceso: Para i <- 0 Hasta 4
    //     Escribir "Elemento ", i, ": "
    //     Leer elementos[i]
    // FinPara
	
    // Si elementos[0] mod 2 = 0 Y elementos[4] mod 2 <> 0 Entonces
    //     Escribir "El primer elemento es par y el último elemento es impar."
    // Sino
    //     Escribir "El primer elemento NO es par o el último elemento NO es impar."
    // FinSi
// Salida: El MENSAJE

/*Algoritmo CompararElementos
    Definir elementos Como Real
    Definir i Como Entero
	Dimension elementos[5]
	
    Escribir "Ingrese los 5 elementos del arreglo:"
    Para i <- 0 Hasta 4
        Escribir "Elemento ", i, ": "
        Leer elementos[i]
    FinPara
	
    Si elementos[0] mod 2 = 0 Y elementos[4] mod 2 <> 0 Entonces
        Escribir "El primer elemento es par y el último elemento es impar."
    Sino
        Escribir "El primer elemento NO es par o el último elemento NO es impar."
    FinSi
FinAlgoritmo*/

function verificarParImpar() {
    let elementos = [];
    for (let i = 1; i <= 5; i++) {
        elementos.push(parseInt(document.getElementById('elemento' + i).value));
    }

    if (elementos[0] % 2 === 0 && elementos[4] % 2 !== 0) {
        document.getElementById('resultado').textContent = "El primer elemento es par y el último elemento es impar.";
    } else {
        document.getElementById('resultado').textContent = "El primer elemento NO es par o el último elemento NO es impar.";
    }
}
