// 14. Pedir al usuario su nota en un examen y determinar si ha aprobado o
// reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Bosquejo
// Eentrada: nota=0(leer)
// Proceso: Si nota >= 60 Entonces
//		      Escribir "¡Felicitaciones! Ha aprobado el examen con ", nota " puntos."
//          SiNo
//            Escribir "Lo sentimos, ha reprobado el examen con ", nota " puntos. Debe obtener al menos 60 puntos para aprobar."
//          Fin Si
// Salida: el mensaje

/*Algoritmo sin_titulo
	
	Definir nota Como Entero
	
	Escribir "ingrese su nota: "
	Leer nota
	
	Si nota >= 60 Entonces
		Escribir "¡Felicitaciones! Ha aprobado el examen con ", nota " puntos."
	SiNo
		Escribir "Lo sentimos, ha reprobado el examen con ", nota " puntos. Debe obtener al menos 60 puntos para aprobar."
	Fin Si
	
FinAlgoritmo*/

function determinarAprobacion() {
    let nota = parseFloat(document.getElementById('nota').value);
    let resultado = document.getElementById('resultado');

    if (nota >= 60) {
        resultado.textContent = `¡Felicitaciones! Ha aprobado el examen con ${nota} puntos.`;
    } else {
        resultado.textContent = `Lo sentimos, ha reprobado el examen con ${nota} puntos. Debe obtener al menos 60 puntos para aprobar.`;
    }
}
