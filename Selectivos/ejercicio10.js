// 10. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100
// Bosquejo
// Entrada: num=0(leer)
// Proceso: Si num > 100 Entonces
//        	  Escribir num " es mayor que 100"
//          SiNo
//            Escribir num " es menor que 100"
//          Fin Si
// Salida: el mensaje

/*Algoritmo sin_titulo
	
	Definir num Como Entero
	
	Escribir "ingrese un numero: "
	Leer num
	
	Si num > 100 Entonces
		Escribir num " es mayor que 100"
	SiNo
		Escribir num " es menor que 100"
	Fin Si
	
FinAlgoritmo*/


function compararNumero() {
    let num = parseFloat(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (num > 100) {
        resultado.textContent = `${num} es mayor que 100.`;
    } else {
        resultado.textContent = `${num} es menor que 100.`;
    } 

}
