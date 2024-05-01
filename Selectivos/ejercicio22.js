// 22. Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Bosquejo
// Entrada: elementos [](ingresar), suma=0(calcular), i 
// Proceso: 
// Salida: suma

/*Función sumarElementos()
    elementos = []
    Para i = 1 hasta 5 hacer
        Leer valor desde 'elemento' + i
        Convertir valor a entero
        Agregar valor a elementos[]
    Fin Para

    suma = sumar(elementos)
    Mostrar "La suma de los elementos es: " + suma
Fin Función

Función sumar(lista)
    total = 0
    Para cada elemento en lista hacer
        total = total + elemento
    Fin Para
    Devolver total
Fin Función*/

function sumarElementos() {
    let elementos = [];
    for (let i = 1; i <= 5; i++) {
        elementos.push(parseInt(document.getElementById('elemento' + i).value));
    }

    let suma = elementos.reduce((total, elemento) => total + elemento, 0);
    document.getElementById('resultado').textContent = `La suma de los elementos es: ${suma}`;
}
