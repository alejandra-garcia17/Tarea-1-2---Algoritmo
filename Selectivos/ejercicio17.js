// 17. La asociación de vinicultores tiene como política fijar un precio inicial al kilo de
// banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando
// se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere
// determinar cuánto recibirá un productor por el banano que entrega en un
// embarque, considerando lo siguiente:
// Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es
// de tamaño 2.
// Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño
// 2.
// Realice un algoritmo para determinar la ganancia obtenida.
// B
// Entrada: tipo=""(leer), tamaño=""(leer), precioInicial=0(leer), ganancia=0(calcular)
// Proceso: Si tipo = "A" Entonces
//             Si tamano = "1" Entonces
//                ganancia <- precioInicial + 2
//             Sino
//                ganancia <- precioInicial + 3
//             FinSi
//          Sino
//             Si tamano = "1" Entonces
//                ganancia <- precioInicial - 3
//             Sino
//                ganancia <- precioInicial - 5
//             FinSi
//          FinSi
// Salida: ganancia

/*Algoritmo CalculadoraGanancia
	
    Definir tipo, tamano Como Caracter
    Definir precioInicial, ganancia Como Real
	
    Escribir "Seleccione el tipo de banano (A o B):"
    Leer tipo
    Escribir "Seleccione el tamaño (1 o 2):"
    Leer tamano
    Escribir "Ingrese el precio inicial por kilo:"
    Leer precioInicial
	
    Si tipo = "A" Entonces
        Si tamano = "1" Entonces
            ganancia <- precioInicial + 2
        Sino
            ganancia <- precioInicial + 3
        FinSi
    Sino
        Si tamano = "1" Entonces
            ganancia <- precioInicial - 3
        Sino
            ganancia <- precioInicial - 5
        FinSi
    FinSi
	
    Escribir "Ganancia por kilo de banano: $", + ganancia
FinAlgoritmo*/

function calcularGanancia() {
    let tipo = document.getElementById('tipo').value;
    let tamano = document.getElementById('tamano').value;
    let precioInicial = parseFloat(document.getElementById('precioInicial').value);
    let ganancia = 0;

    if (tipo === 'A') {
        if (tamano === '1') {
            ganancia = precioInicial + 2;
        } else if (tamano === '2') {
            ganancia = precioInicial + 3;
        }
    } else if (tipo === 'B') {
        if (tamano === '1') {
            ganancia = precioInicial - 3;
        } else if (tamano === '2') {
            ganancia = precioInicial - 5;
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.textContent = `Ganancia por kilo de banano: $${ganancia.toFixed(2)}`;
}
