// 13. Dado un arreglo de 5 nombres presentarlos todos
// Bosquejo
// Entrada: nombres(ingresados)
// Proceso:for (let i = 0; i < nombres.length; i++) {
//    console.log(nombres[i]);
// }
// Salida: nombres

/*Algoritmo MostrarNombres
	Dimension nombres[5]
    Definir nombres, i Como Caracter
	
    nombres[0] <- "Juan"
    nombres[1] <- "María"
    nombres[2] <- "Pedro"
    nombres[3] <- "Ana"
    nombres[4] <- "Carlos"
	
    Escribir "Los nombres son:"
    Para i <- 0 Hasta 5 Con Paso 1 Hacer
        Escribir nombres[i] 	
    FinPara
FinAlgoritmo*/


const nombres = ["Juan", "María", "Pedro", "Ana", "Carlos"];
let nombresDiv = document.getElementById('nombres');

nombresDiv.innerHTML = "<h2>Los nombres son: </h2>";
for (let i = 0; i < nombres.length; i++) {
    nombresDiv.innerHTML += `<p>${nombres[i]}</p>`;
}

