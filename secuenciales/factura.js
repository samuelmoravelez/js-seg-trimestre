// 1. Pedimos el precio y la cantidad del Artículo 1
let precio1 = Number(prompt("Ingresa el precio del Artículo 1:"));
let cant1 = Number(prompt("Ingresa la cantidad que llevas del Artículo 1:"));

// 2. Pedimos el precio y la cantidad del Artículo 2
let precio2 = Number(prompt("Ingresa el precio del Artículo 2:"));
let cant2 = Number(prompt("Ingresa la cantidad que llevas del Artículo 2:"));

// 3. Pedimos el precio y la cantidad del Artículo 3
let precio3 = Number(prompt("Ingresa el precio del Artículo 3:"));
let cant3 = Number(prompt("Ingresa la cantidad que llevas del Artículo 3:"));

// 4. Pedimos el precio y la cantidad del Artículo 4
let precio4 = Number(prompt("Ingresa el precio del Artículo 4:"));
let cant4 = Number(prompt("Ingresa la cantidad que llevas del Artículo 4:"));

// 5. Calculamos cuánto se gasta en cada artículo (Precio x Cantidad)
let totalArt1 = precio1 * cant1;
let totalArt2 = precio2 * cant2;
let totalArt3 = precio3 * cant3;
let totalArt4 = precio4 * cant4;

// 6. Sumamos todo para obtener el Subtotal (lo que cuesta todo antes de impuestos)
let subtotal = totalArt1 + totalArt2 + totalArt3 + totalArt4;

// 7. Calculamos el IVA (19% del subtotal)
let iva = subtotal * 0.19;

// 8. Calculamos el Total Final a pagar
let totalPagar = subtotal + iva;

// 9. Imprimimos la factura en la consola de forma ordenada
console.log("========== FACTURA DE COMPRA ==========");
console.log("Total Artículo 1: $" + totalArt1);
console.log("Total Artículo 2: $" + totalArt2);
console.log("Total Artículo 3: $" + totalArt3);
console.log("Total Artículo 4: $" + totalArt4);
console.log("---------------------------------------");
console.log("Subtotal (Sin IVA): $" + subtotal);
console.log("IVA (19%): $" + iva);
console.log("TOTAL A PAGAR: $" + totalPagar);
console.log("=======================================");