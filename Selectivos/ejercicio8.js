// 8.	Pedir al usuario un número y mostrar si es múltiplo de 3
// analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 3
//      si reciduo==0 entonces
//         escribir "El numero es multiplo 3"
//      sino
//         escribir "El numero no es multiplo 3"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// algoritmo
// Algoritmo mutiplo3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 3
//   si reciduo==0 entonces
//     escribir "El numero es multiplo 3"
//   sino
//     escribir "El numero no es multiplo 3"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo
// lenjuage javascript

function multiplo3() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    let residuo = numero % 3;

    if (residuo === 0) {
        resultado.textContent = `${numero} es múltiplo de 3`;
    } else {
        resultado.textContent = `${numero} no es múltiplo de 3`;
    }
}
