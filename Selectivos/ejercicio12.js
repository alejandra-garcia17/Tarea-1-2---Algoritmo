// 12. Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado.
// Luego, calcular y mostrar el monto total a pagar incluyendo el IVA
// Bosquejo
// Entrada: monto=0(leer), iva=0(leer)
// Proceso: montoConIva = monto + (monto * (iva / 100))
// Salida: montoConIva

/*Algoritmo sin_titulo
	
	Definir monto, iva Como Entero
	Definir montoConIva Como Real
	
	Escribir "ingrese el monto: "
	Leer monto
	Escribir "ingrese el iva: "
	Leer iva
	
	montoConIva = monto + (monto * (iva / 100))
	
	Escribir "El monto total con el iva incluido es: ", montoConIva
	
FinAlgoritmo*/

function calcularTotal() {
    let monto = parseFloat(document.getElementById('monto').value);
    let iva = parseFloat(document.getElementById('iva').value);

    let montoConIva = monto + (monto * (iva / 100));
    let resultado = document.getElementById('resultado');

    resultado.textContent = `El monto total a pagar incluyendo el IVA es: $${montoConIva.toFixed(2)}`;
}


