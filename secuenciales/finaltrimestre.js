// 1. Pedimos las tres calificaciones parciales
let parcial1 = Number(prompt("Ingresa la calificación del primer parcial:"));
let parcial2 = Number(prompt("Ingresa la calificación del segundo parcial:"));
let parcial3 = Number(prompt("Ingresa la calificación del tercer parcial:"));

// 2. Pedimos las calificaciones del examen y del trabajo final
let examenFinal = Number(prompt("Ingresa la calificación del examen final:"));
let trabajoFinal = Number(prompt("Ingresa la calificación del trabajo final:"));

// 3. Calculamos el promedio de los tres parciales
// IMPORTANTE: Se usan paréntesis para obligar a que primero se haga la suma y luego la división
let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

// 4. Calculamos el valor real (porcentaje) de cada nota
let porcentajeParciales = promedioParciales * 0.55; // Equivale al 55%
let porcentajeExamen = examenFinal * 0.30;          // Equivale al 30%
let porcentajeTrabajo = trabajoFinal * 0.15;        // Equivale al 15%

// 5. Sumamos los porcentajes para obtener la nota final
let calificacionFinal = porcentajeParciales + porcentajeExamen + porcentajeTrabajo;

// 6. Mostramos los resultados
console.log("Tu promedio en los parciales fue de: " + promedioParciales);
console.log("Tu calificación final en Algoritmos es: " + calificacionFinal);