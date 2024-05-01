// 11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Bosquejo
// Entrada: metros=0; centimetros=0
// Proceso: centimetros <- metros * 100
// Salida: centimetros

/*Algoritmo metrosACentimetros
	
    Definir metros, centimetros Como Real
	
    Escribir "Ingrese la distancia en metros:"
    Leer metros
	
    centimetros <- metros * 100
	
    Escribir "La distancia en centímetros es: ", centimetros, " cm"
FinAlgoritmo*/


function convertirACentimetros() {
    let metros = parseFloat(document.getElementById('metros').value);
    let centimetros = metros * 100;
    let resultado = document.getElementById('resultado');
    resultado.textContent = `La distancia en centímetros es: ${centimetros} cm`;
}
