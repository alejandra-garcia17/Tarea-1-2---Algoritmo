// Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el
// último elemento.
// Bosquejo
// Entrada: elememtos[5], i
// Proceso: Para i <- 0 Hasta 4
    //     Escribir "Elemento ", i, ": "
    //     Leer elementos[i]
    // FinPara
    // Si elementos[0] > elementos[4] Entonces
    //     Escribir "El primer elemento es mayor que el último."
    // Sino
    //     Escribir "El primer elemento NO es mayor que el último."
    // FinSi
// Salida: el mensaje

/*Algoritmo CompararElementos
    Definir elementos Como Real
    Definir i Como Entero
	Dimension elementos[5]
	
    Escribir "Ingrese los 5 elementos del arreglo:"
    Para i <- 0 Hasta 4
        Escribir "Elemento ", i, ": "
        Leer elementos[i]
    FinPara
	
    Si elementos[0] > elementos[4] Entonces
        Escribir "El primer elemento es mayor que el último."
    Sino
        Escribir "El primer elemento NO es mayor que el último."
    FinSi
FinAlgoritmo*/

function compararElementos() {
    let elementos = [];
    for (let i = 1; i <= 5; i++) {
        elementos.push(parseFloat(document.getElementById('elemento' + i).value));
    }

    if (elementos[0] > elementos[4]) {
        document.getElementById('resultado').textContent = "El primer elemento es mayor que el último.";
    } else {
        document.getElementById('resultado').textContent = "El primer elemento NO es mayor que el último.";
    }
}
