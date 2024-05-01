//  Solicitar al usuario el precio de venta de un vehículo nuevo y su año de
// fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del
// 10% sobre el precio de venta y mostrar el precio final.

// Entrada: precioVneta=0,0 (leer); anioFrabicacion=0(leer); descuento=0(calculado); precioFinal=0(calcular) 
// Proceso: Si anioFabricacion < 2010 entonces
//             descuento = precioVenta * 0.10
//          Sino
//             descuento = 0
//          FinSi
//           
//          precioFinal = precioVenta - descuento   

// Salida:  precioFinal

// Algoritmo ventaVehiculo

// Declarar precioVneta=0.0, anioFrabicacion=0, descuento=0, precioFinal=0 
// Escribit "Ingrese precio de venta"
// Leer precioVenta
// Escribir "Ingrese año de fabricacion"
// Leer anioFabricacion

// Si anioFabricacion < 2010 entonces
//      descuento = precioVenta * 0.10
// Sino
//      descuento = 0
// FinSi

// precioFinal = precioVenta - descuento   
// Escribir precioFinal

// FinAlgoritmo

function calcularPrecioFinal() {
            let precioVenta = parseFloat(document.getElementById('precioVenta').value);
            let anioFabricacion = parseInt(document.getElementById('anioFabricacion').value);
            let descuento = 0, precioFinal = 0;

            if (anioFabricacion < 2010) {
                descuento = precioVenta * 0.10;
            }

            precioFinal = precioVenta - descuento;

            let resultado = document.getElementById('resultado');
            resultado.textContent = `Precio de venta: $${precioVenta} - Descuento: $${descuento} - Precio Final: $${precioFinal}`;
        }
