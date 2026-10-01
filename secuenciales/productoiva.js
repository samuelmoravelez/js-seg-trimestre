// 1. Pedimos los datos básicos de la compra
let precioUnitario = Number(prompt("Ingresa el precio unitario del producto:"));
let cantidad = Number(prompt("Ingresa la cantidad que deseas comprar:"));
let porcentajeDescuento = Number(prompt("Ingresa el porcentaje de descuento (ejemplo: 10 para 10%):"));

// 2. Calculamos el valor inicial (precio multiplicado por la cantidad)
let valorInicial = precioUnitario * cantidad;

// 3. Calculamos el valor del descuento en dinero
// Dividimos el porcentaje entre 100 para volverlo decimal (ej: 10 / 100 = 0.10)
let valorDescuento = valorInicial * (porcentajeDescuento / 100);

// 4. Calculamos el Subtotal (el valor inicial menos el descuento)
let subtotal = valorInicial - valorDescuento;

// 5. Calculamos el monto del IVA (19% del subtotal, como pide el ejercicio)
let iva = subtotal * 0.19;

// 6. Calculamos el Precio Neto (Subtotal más el IVA)
let precioNeto = subtotal + iva;

// 7. Mostramos los resultados ordenados en la consola
console.log("=== DETALLE DE LA FACTURA ===");
console.log("Valor inicial (sin descuento): $" + valorInicial);
console.log("Descuento aplicado (" + porcentajeDescuento + "%): -$" + valorDescuento);
console.log("Subtotal: $" + subtotal);
console.log("Monto del IVA (19%): $" + iva);
console.log("-----------------------------");
console.log("PRECIO NETO A PAGAR: $" + precioNeto);
console.log("=============================");