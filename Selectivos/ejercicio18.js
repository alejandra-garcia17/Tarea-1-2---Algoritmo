// 18. “Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las
// siguientes:
// El costo de platillo por persona es de $20.00, pero si el número de personas es
// mayor a 100 pero menor o igual a 200, el costo es de $15.00. Para más de 200
// personas el costo por platillo es de $10.00.
// Se requiere un algoritmo que ayude a determinar el presupuesto que se debe
// presentar a los clientes que deseen realizar un evento, considerando que al
// total hay que agregarle el 15% del iva
// bosquejo
// Entrada: numpersonas=0.0(leer), costoPorPersona=0(calcular), costoTotal=0.0(calcular), iva=0.15(calcular), presupuestoTotal=0.0(calcular)
// Proceso: Si numPersonas <= 100 Entonces
        // costoPorPersona <- 20
        // Sino
        //     Si numPersonas <= 200 Entonces
        //         costoPorPersona <- 15
        //     Sino
        //         costoPorPersona <- 10
        //     FinSi
        // FinSi
// Salida: factura

/*Algoritmo CalculadoraPresupuestoEvento
    Definir numPersonas, costoPorPersona, costoTotal, iva, presupuestoTotal Como Real
	
    Escribir "Ingrese el número de personas:"
    Leer numPersonas
	
    Si numPersonas <= 100 Entonces
        costoPorPersona <- 20
    Sino
        Si numPersonas <= 200 Entonces
            costoPorPersona <- 15
        Sino
            costoPorPersona <- 10
        FinSi
    FinSi
	
    costoTotal <- numPersonas * costoPorPersona
    iva <- costoTotal * 0.15
    presupuestoTotal <- costoTotal + iva

    // factura
    Escribir "Costo por persona: $",  + costoPorPersona
    Escribir "Costo total sin IVA: $",  + costoTotal
    Escribir "IVA (15%): $", + iva
    Escribir "Presupuesto Total: $", + presupuestoTotal

FinAlgoritmo*/

function calcularPresupuesto() {
    let numPersonas = parseInt(document.getElementById('numPersonas').value);
    let costoPorPersona = 0;

    if (numPersonas <= 100) {
        costoPorPersona = 20;
    } else if (numPersonas <= 200) {
        costoPorPersona = 15;
    } else {
        costoPorPersona = 10;
    }

    let costoTotal = numPersonas * costoPorPersona;
    let iva = costoTotal * 0.15;
    let presupuestoTotal = costoTotal + iva;

    document.getElementById('resultado').innerHTML = `
        <p> Costo por persona: $${costoPorPersona}</p><br>
        <p> Costo total sin IVA: $${costoTotal}</p><br>
        <p> IVA (15%): $${iva}</p><br>
        <p> Presupuesto Total: $${presupuestoTotal}</p>
    `;
}
