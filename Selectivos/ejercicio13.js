// 13. Solicitar al usuario el precio de un producto y el porcentaje de descuento
// aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// B
// Entrada: precio=0(leer), descuento=0 (leer), precioFinal(calcular)
// Proceso: precioFinal = precio - (precio * (descuento / 100));
// Salida: precioFinal
/*Algoritmo sin_titulo
	
	Definir precio, descuento Como Entero
	Definir precioFinal Como Real
	
	Escribir "ingrese el precio: "
	Leer precio
	Escribir "ingrese el descuento: "
	Leer descuento
	
	precioFinal = precio - (precio * (descuento / 100))
	
	Escribir "El monto total con el iva incluido es: ", precioFinal
	
FinAlgoritmo*/

function calcularFinal() {
    let precio = parseFloat(document.getElementById('precio').value);
    let descuento = parseFloat(document.getElementById('descuento').value);

    let precioFinal = precio - (precio * (descuento / 100));
    let resultado = document.getElementById('resultado');

    resultado.textContent = `El precio final después de aplicar el descuento es: $${precioFinal.toFixed(2)}`;
}

