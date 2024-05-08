
// 1. dado un arreglo de 10 numeros presentar el primero y el ultimo numero

// function arregloNumeros(){

//     let arreglo = [15, 20, 25, 30, 35, 40, 34, 1, 56, 10];

//     console.log("El primer elemento del arreglo es:", arreglo[0]);
//     console.log("El último elemento del arreglo es:", arreglo[9]);
// }

// arregloNumeros()

// 2. crear una funcion que permita generar 5 numeros aleatoreos en un arreglo y presente el valor del centro del arreglo siempre 
// y cuando sea par.

// function arregloAleatorio(){

//     let arreglo = [];
//     valor = parseInt(Math.random()*100)
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     console.log(arreglo)
//     // console.log(valor)

//     if (arreglo[2] % 2 == 0) {
//         console.log(arreglo[2])
//     } else {
//         console.log("El numero del centro del arreglo es impar")
//     }
    
// }

// arregloAleatorio()

// 3. genere una funcio que presente 5 numeros random, presente el primer numero siempre y cuando el primero sea multiplo de tres y 
// el ultimo multiplo de 5

// function arregloMultiplo(){

//     let arreglo = [];
//     valor = parseInt(Math.random()*100)
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     arreglo.push(parseInt(Math.random()*100))
//     console.log(arreglo)
//     // console.log(valor)

//     if (arreglo[0] % 3 == 0 && arreglo[4] % 5 == 0) {
//         console.log(arreglo[0], arreglo[4])
//     } else {
//         console.log("No cumple el requisito")
//     }
    
// }

// arregloMultiplo()

// 4. dado un arreglo de tres numeros presentar los tres numeros siempre y cuando el valor del medio sea mayor que el primero o 
// menor que el tercero

function numeroMayoroMenor() {
    let arreglo = [];
    arreglo.push(parseInt(Math.random()*100))
    arreglo.push(parseInt(Math.random()*100))
    arreglo.push(parseInt(Math.random()*100))
    console.log(arreglo)

    if (arreglo[1] > arreglo[0] || arreglo[0] < arreglo[2]  ){
         console.log(arreglo[0], arreglo[1], arreglo[2])
    } else {
        console.log("no cumple el requisito")
    }
}

numeroMayoroMenor()

MartinBarba12