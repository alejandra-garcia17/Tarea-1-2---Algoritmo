// 16. Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo
// anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y
// mostrar el sueldo neto anual.
// BOsquejo
// Entrada:sueldoMensual=0(leer), sueldoAnual=0(leer), impuesto=0(leer), excedente=0(calculado)
// Proceso: sueldoAnual = sueldoMensual * 12
// si sueldoAnual > 30000 Entonces
//     excedente = sueldoAnual - 30000
//     impuesto = excedente * 0.15
//     sueldoAnual -= impuesto
// Salida: sueldoAnual

/*Algoritmo CalcularSueldo
    Definir sueldoMensual, sueldoAnual, impuesto Como Real
	
    Escribir "Ingrese sueldo mensual:"
    Leer sueldoMensual
	
    sueldoAnual <- sueldoMensual * 12
    impuesto <- 0
	
    Si sueldoAnual > 30000 Entonces
        Definir excedente Como Real
        excedente <- sueldoAnual - 30000
        impuesto <- excedente * 0.15
        sueldoAnual <- sueldoAnual - impuesto
    FinSi
	
    Escribir "Sueldo Anual: $",  + sueldoAnual,  + " - Impuesto: $",  + impuesto,  + " - Sueldo Neto Anual: $",  + (sueldoAnual - impuesto)
FinAlgoritmo*/

function calcularSueldo() {
    let sueldoMensual = parseFloat(document.getElementById('sueldoMensual').value);
    let sueldoAnual = sueldoMensual * 12;
    let impuesto = 0;

    if (sueldoAnual > 30000) {
        let excedente = sueldoAnual - 30000;
        impuesto = excedente * 0.15;
        sueldoAnual -= impuesto;
    }

    let resultado = document.getElementById('resultado');
    resultado.textContent = `Sueldo Anual: $${sueldoAnual.toFixed(2)} - Impuesto: $${impuesto.toFixed(2)} - Sueldo Neto Anual: $${(sueldoAnual - impuesto).toFixed(2)}`;
}
