// 1. Pedimos la capacidad del primer balde (el de referencia) y su tiempo de llenado
let capacidadBalde1 = Number(prompt("Ingresa la capacidad del primer balde (en litros):"));
let tiempoBalde1 = Number(prompt("Ingresa el tiempo que tarda en llenarse este primer balde (en horas):"));

// 2. Pedimos la capacidad de los otros dos baldes que queremos calcular
let capacidadBalde2 = Number(prompt("Ingresa la capacidad del segundo balde (en litros):"));
let capacidadBalde3 = Number(prompt("Ingresa la capacidad del tercer balde (en litros):"));

// 3. Calculamos la constante: cuánto tiempo tarda en llenarse exactamente 1 litro
let tiempoPorLitro = tiempoBalde1 / capacidadBalde1;

// 4. Calculamos el tiempo de los otros baldes multiplicando su capacidad por el tiempo de 1 litro
let tiempoBalde2 = capacidadBalde2 * tiempoPorLitro;
let tiempoBalde3 = capacidadBalde3 * tiempoPorLitro;

// 5. Mostramos los resultados en la consola
console.log("=== TIEMPOS DE LLENADO ===");
console.log("El balde de " + capacidadBalde1 + " litros tarda " + tiempoBalde1 + " horas.");
console.log("El balde de " + capacidadBalde2 + " litros tardará " + tiempoBalde2 + " horas.");
console.log("El balde de " + capacidadBalde3 + " litros tardará " + tiempoBalde3 + " horas.");