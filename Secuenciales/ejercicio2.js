// Pedir dos palabras y presentarlas concatenadas
// BOSQUEJO:
// entrada: palabra1=""; palabra2="" (LEER); concatenar (proceso)
// proceso: concatenar = palabra1 + palabra2
// salida; concatenar

// psedeucodigo
// Algoritmo unir

//   Declarar palabra1="", palabra2="", concatenar=""
//   Escribir "Ingrese la palabra 1"
//   Leer palabra1
//   Escribir "Ingrese la palabra 2"
//   Leer palabra2
   
//   concatenar = palabra1 + palabra2
//   Escribir concatenar

// FinAlgoritmo

function unir() {
    let palabra1 = document.getElementById('palabra1').value;
    let palabra2 = document.getElementById('palabra2').value;
    let resultado = document.getElementById('resultado');
    resultado.textContent = palabra1 + " " + palabra2;
}

    