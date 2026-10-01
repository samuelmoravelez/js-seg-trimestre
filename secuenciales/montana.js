// 1. Datos iniciales que nos da el problema
let tiempoReferencia = 5; // horas
let alturaReferencia = 7; // metros

// 2. Calculamos la constante: tiempo necesario para subir exactamente 1 metro
// Dividimos 5 horas entre 7 metros (esto da aprox 0.714 horas por cada metro)
let tiempoPorMetro = tiempoReferencia / alturaReferencia;

// 3. Le pedimos al usuario que ingrese la nueva altura a escalar (puede ser más o menos de 7m)
let nuevaAltura = Number(prompt("Ingresa la cantidad de metros que el escalador desea subir:"));

// 4. Calculamos el nuevo tiempo multiplicando la altura deseada por el tiempo de 1 metro
let nuevoTiempo = nuevaAltura * tiempoPorMetro;

// 5. Mostramos el resultado en la consola
console.log("=== CÁLCULO DE ESCALADA ===");
console.log("Velocidad base: 5 horas por cada 7 metros.");
console.log("Altura deseada: " + nuevaAltura + " metros.");
console.log("---------------------------");
console.log("El escalador tardará " + nuevoTiempo + " horas en subir esa distancia.");
console.log("===========================");