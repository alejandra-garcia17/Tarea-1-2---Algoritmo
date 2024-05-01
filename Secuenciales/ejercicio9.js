
// 9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Bosquejo
// Entrada: num=0 contador=1
// Proceso: for (let contador = 1; contador <= 12; contador++) {
//              let resultado = num * contador;
//              write(`${num} x ${contador} = ${resultado}`);
 //         }
// Salida: write(`${num} x ${contador} = ${resultado}`);

/*Algoritmo TablaMultiplicar
	
    Definir num, resultado, contador Como Entero
	
    Escribir "Ingrese un número para ver su tabla de multiplicar:"
    Leer num
	
    Para contador <- 1 Hasta 12 Con Paso 1 Hacer
        resultado <- num * contador
        Escribir num, " x ", contador, " = ", resultado
    FinPara
	
FinAlgoritmo*/


function tablaMultiplicar() {
    let numero = parseInt(document.getElementById("numero").value);
    let tablaMultiplicar = document.getElementById("tablaMultiplicar");
    
    tablaMultiplicar.innerHTML = "";

    if (isNaN(numero)) {
        tablaMultiplicar.innerHTML = "Por favor, ingrese un número válido.";
        return;
    }
    let tabla = "<table border='1'>";
    tabla += "<tr><th>Factor</th><th>Resultado</th></tr>";

    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        tabla += `<tr><td>${numero} x ${i}</td><td>${resultado}</td></tr>`;
    }
    tabla += "</table>";

    // Mostrar la tabla
    tablaMultiplicar.innerHTML = tabla;
}


