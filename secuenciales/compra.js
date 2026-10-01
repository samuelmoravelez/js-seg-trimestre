// 1. Pedimos el valor inicial de la compra
let compraInicial = Number(prompt("Ingresa el valor de la compra:"));

// 2. Calculamos el descuento del 10% y se lo restamos al valor inicial
let descuento = compraInicial * 0.10;
let valorConDescuento = compraInicial - descuento;

// 3. Calculamos el IVA (19%) sobre el valor al que ya se le aplicó el descuento
let iva = valorConDescuento * 0.19;

// 4. Sumamos el valor con descuento y el IVA para obtener el total de la factura
let totalFactura = valorConDescuento + iva;

// 5. Mostramos el desglose completo en la consola
console.log("Valor inicial de la compra: $" + compraInicial);
console.log("Descuento (10%): -$" + descuento);
console.log("Valor después del descuento: $" + valorConDescuento);
console.log("Valor del IVA (19%): +$" + iva);
console.log("Total a pagar en la factura: $" + totalFactura);