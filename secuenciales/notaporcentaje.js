let nota1 = parseFloat(prompt("ingrese la primera nota"))

let nota2 = parseFloat(prompt("ingrese la segunda  nota"))

let nota3 = parseFloat(prompt("ingrese la tercera nota"))

let porcentaje1 = nota1 * 0.20; 
let porcentaje2 = nota2 * 0.30; // 30%
let porcentaje3 = nota3 * 0.50; // 50%

let notaDefinitiva = porcentaje1 + porcentaje2 + porcentaje3;

console.log("La nota definitiva de la asignatura es: " + notaDefinitiva);