// 1. Pedimos los datos de texto 
// Nota que NO usamos Number() aquí, porque queremos guardar palabras o letras
let nombre = prompt("Ingresa el nombre del estudiante:");
let programa = prompt("Ingresa el programa de formación:");
let ficha = prompt("Ingresa el número de ficha:");

// 2. Pedimos las 5 notas 
// Aquí SÍ usamos Number() porque necesitamos hacer operaciones matemáticas con ellas
let nota1 = Number(prompt("Ingresa la primera nota:"));
let nota2 = Number(prompt("Ingresa la segunda nota:"));
let nota3 = Number(prompt("Ingresa la tercera nota:"));
let nota4 = Number(prompt("Ingresa la cuarta nota:"));
let nota5 = Number(prompt("Ingresa la quinta nota:"));

// 3. Calculamos el promedio
// Usamos paréntesis para asegurar que primero se sumen todas las notas y al final se divida entre 5
let promedioFinal = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

// 4. Mostramos los resultados exactos que pide el ejercicio
console.log("=== REPORTE DEL ESTUDIANTE ===");
console.log("Nombre: " + nombre);
console.log("Programa de formación: " + programa);
console.log("Ficha: " + ficha);
console.log("------------------------------");
console.log("Promedio Final: " + promedioFinal);
console.log("==============================");