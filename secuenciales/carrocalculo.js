// 1. Pedimos los datos al usuario (distancia y tiempo)
let distancia = Number(prompt("Ingresa la distancia recorrida (en kilómetros):"));
let tiempo = Number(prompt("Ingresa el tiempo del recorrido (en horas):"));

// 2. Aplicamos la fórmula matemática: Velocidad = Distancia dividida entre el Tiempo (V = D / T)
let velocidad = distancia / tiempo;

// 3. Mostramos el resultado añadiendo "km/h" al final para que se entienda mejor
console.log("El auto se desplazaba a una velocidad de: " + velocidad + " km/h");

