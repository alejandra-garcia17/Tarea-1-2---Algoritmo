// 22. Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Bosquejo
// Entrada:
// Proceso:
// Salida:

function sumarElementos() {
    let elementos = [];
    for (let i = 1; i <= 5; i++) {
        elementos.push(parseInt(document.getElementById('elemento' + i).value));
    }

    let suma = elementos.reduce((total, elemento) => total + elemento, 0);
    document.getElementById('resultado').textContent = `La suma de los elementos es: ${suma}`;
}
