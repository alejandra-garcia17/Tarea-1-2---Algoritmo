// esto va al inicio del programa y permite ingresar datos por consola
const read = require('prompt-sync')();
const write = console.log // darle otro nombre a console.log

// alternativa de read
let nombress = "ana"
valor = parseInt(Math.random()*100)
//

// elemntos de un seupdocodigo o lenguaje
// 1) variables. toda la programacion se basa en variables
// la computara conoce e interpreta las variables
// las variables guardan un valor que puede cambiar en el programa
let edad=50,edad2=0 // entero
let sueldo=500.50,sueldo2=0.00 // decimal,real, float, double
let nombre = "Daniel Vera",nombre2=""//cadena,alfanumerica, string
//            012345678910 cada caracter esta en una posicion
let estado = true,estado2=false // booleana o logica
let numeros=[50,10,60,80,100]//arreglo.conjunto de elementos(variables)
//           0   1  2  3  4cada valor esta en una posicion desde cero
let nombres = ["ana","jose","juan"]
console.log(edad)
edad=54
console.log(edad)
console.log(nombre)
console.log(nombre[0])
console.log(nombre[10])
console.log(numeros)
console.log(numeros[0])
console.log(numeros[2])
console.log(numeros[4])
nombre = nombre + " " + "Paredes"
console.log(nombre)
numeros[0]=200
numeros[4]=800
console.log(numeros)
console.log(nombres)
let calculo=0,num1=20,num2=10
calculo = num1+num2
console.log(num1,num2,calculo)
calculo = num1-num2
console.log(num1, num2, calculo)
calculo = num1*num2
console.log(num1, num2, calculo)
calculo = num1/num2
console.log(num1, num2, calculo)
calculo = num1%num2
console.log(num1, num2, calculo)
calculo = num1**2
console.log(num1, 2, calculo)
// condicionales
// operadores relacionales > < >= <= !=
let n1=5,n2=10,nombre1="daniel",nombre3="dan"
console.log(n1>n2)
console.log(n2>n1)
console.log(n2==n1)
console.log(n2!=n1)
console.log(!(n2!=n1))
if (n1 > n2){
  console.log(n1)
}
else{
  console.log(n2,"es mayor",n1)
}
// operadores logicos
let a=10,b=20,x="ana"
if (a == x){ // no puede comparar variables de diferentes tipos
  console.log("no se puede comparar numeros con caracteres")
}
// and = y:tiene que cumplir todas las condiciones para verdadero
if (a < b && x == "ana"){ //
  console.log("se cumple",a,b,x)
}else{
  console.log("no se cumple la condicion")
}
// || = o:tiene que cumplir minimo una condicion para verdadero
if (a > b || x == "ana") { //
  console.log("se cumple", a, b, x)
} else {
  console.log("no se cumple la condicion")
}
//         falso                 verdadero 
if ( (a < b && x == "ani") || (a == 10) ) { //
  console.log("se cumple", a, b, x)
} else {
  console.log("no se cumple la condicion")
}
// multiplos
// uso de mod=%
// 4 % 2 = se divide y obtiene como respuesta: reciduo 0
// 5 % 2 = se divide y obtiene como respuesta: reciduo 1
// uso de div=parseInt()
// parseInt(4/2) = obtiene como respuesta cociente entero 2
// parseInt(8/3) = obtiene como respuesta cociente entero 2
// parseInt(3.7) = obtiene como respuesta 3
// 
let nombreCompleto="",valor=0
// nombreCompleto = read("Igrese nombre completo: ")
// write("Su nombre es: ",nombreCompleto)
// nombreCompleto = "Ana Ortiz"
// write("Su nombre es: ",nombreCompleto)
//valor = read("Ingrese numero: ")
// funciones de conversiom
// parseint() entero y parseFoat() decimal
//valor = parseInt(valor)
// valor = parseFloat(valor)
// valor = valor +10
// write(valor)
valor = parseInt(Math.random()*100) // genera numero aleatorio
console.log(valor)