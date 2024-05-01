// 2. Pedir al usuario el subtotal de una factura, el porcentaje del IVA aplicar y el porcentaje de descuento siempre y 
// cuando el subtotal de la factura exceda de $100. Luego, calcular y mostrar el subtotal, el descuento, el IVA y el 
// monto total (descuento=20(resta), iva=15(suma))

// Bosquejo
// Entrada: subTotal=0(leer), iva=0.15(aplicar), descuento=0.20(depende)
// Proceso: si subTotal > 100 entonces
//             iva = 0.15
//             descuento = subTotal * 0.20
//          Sino
//             descuento = 0
//          FinSi
//          subTotal = subTotal - descuento + iva
// Salida: subTotal

function CalcularSubTotal() {
    let subTotal = parseFloat(document.getElementById('subTotal').value);
    let descuento = 0;
    let iva, montoTotal

    if (subTotal >= 100) {
        iva = subTotal * 0.15
        descuento = subTotal * 0.20;
    } else {
        descuento = 0
    }

    
    montoTotal = subTotal - descuento + iva;
    

    let resultado = document.getElementById('resultado');
    resultado.textContent = `Sub total: $${subTotal} Descuento:$${descuento} IVA:$${iva} Monto Total: $${montoTotal}`;
}