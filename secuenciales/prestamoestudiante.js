// 1. Pedimos el monto del préstamo al estudiante
let montoPrestamo = Number(prompt("Ingresa el monto total del préstamo:"));

// 2. Calculamos el interés de un año completo (5% anual)
// El 5% se escribe como 0.05
let interesUnAno = montoPrestamo * 0.05;

// 3. Calculamos el interés de un solo mes
// Como un año tiene 12 meses, dividimos el interés anual entre 12
let interesPrimerMes = interesUnAno / 12;

// 4. Calculamos el interés del tercer trimestre
// Un trimestre son 3 meses. Un año tiene 4 trimestres.
// Dividimos el interés anual entre 4 para saber cuánto se paga en un solo trimestre.
let interesTrimestre = interesUnAno / 4;

// 5. Calculamos el total a pagar después de los 5 años
// Multiplicamos el interés de un año por 5 para obtener los intereses totales
let interesesTotales = interesUnAno * 5;
// Sumamos el dinero que le prestaron más todos los intereses de los 5 años
let totalAPagar = montoPrestamo + interesesTotales;

// 6. Mostramos los resultados en la consola
console.log("=== RESUMEN FINANCIERO DEL PRÉSTAMO ===");
console.log("Monto solicitado: $" + montoPrestamo);
console.log("Plazo: 5 años | Tasa de interés: 5% anual");
console.log("---------------------------------------");
console.log("• Dinero pagado de intereses en un año: $" + interesUnAno);
console.log("• Dinero pagado de intereses en el tercer trimestre: $" + interesTrimestre);
console.log("• Dinero pagado de intereses en el primer mes: $" + interesPrimerMes);
console.log("• Total a pagar del préstamo (Capital + Intereses 5 años): $" + totalAPagar);
console.log("=======================================");