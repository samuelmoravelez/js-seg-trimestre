// 1. Pedimos el total de dinero que el conductor recaudó en el día
let totalRecaudado = Number(prompt("Ingresa el total de dinero recaudado en el día:"));

// 2. Calculamos cuánto le corresponde al conductor (el 19%)
// Multiplicamos el total por 0.19 para obtener su ganancia
let pagoConductor = totalRecaudado * 0.19;

// 3. (Opcional) Calculamos cuánto dinero debe entregarle al dueño del vehículo
let entregaDueno = totalRecaudado - pagoConductor;

// 4. Mostramos los resultados en la consola
console.log("--- CIERRE DEL DÍA ---");
console.log("Total recaudado: $" + totalRecaudado);
console.log("Ganancia del conductor (19%): $" + pagoConductor);
console.log("Dinero a entregar al dueño: $" + entregaDueno);
console.log("----------------------");