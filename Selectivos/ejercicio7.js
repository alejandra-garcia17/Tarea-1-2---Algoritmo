function compararNombres() {
        
    let nombre1 = document.getElementById('nombre1').value;
    let nombre2 = document.getElementById('nombre2').value;
    let resultado = document.getElementById('resultado');

    if (nombre1 === nombre2) {
        resultado.textContent = "Los nombres son iguales.";
    } else if (nombre1 > nombre2) {
        resultado.textContent = `${nombre1} es mayor que ${nombre2}.`;
    } else {
        resultado.textContent = `${nombre1} es menor que ${nombre2}.`;
    }
}