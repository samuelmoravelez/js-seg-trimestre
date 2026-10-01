// 1. Pedimos el monto de la venta
let montoVenta = Number(prompt("Ingresa el monto de la venta (sin IVA):"));

// 2. Calculamos el IVA (multiplicando por 0.19)
let iva = montoVenta * 0.19;

// 3. Calculamos el total a pagar
let totalPagar = montoVenta + iva;

// 4. Mostramos el IVA y el total en pantalla
console.log("--- RESUMEN DE COMPRA ---");
console.log("Monto de la venta: $" + montoVenta);
console.log("IVA (19%): $" + iva);
console.log("Total a pagar: $" + totalPagar);
console.log("-------------------------");

// 5. Le pedimos al cajero que ingrese con cuánto dinero paga el cliente
let pagoCliente = Number(prompt("El total es $" + totalPagar + ". ¿Con cuánto dinero en efectivo paga el cliente?"));

// 6. Calculamos el cambio que se debe devolver
let cambio = pagoCliente - totalPagar;

// 7. Mostramos el cambio en la consola
console.log("Dinero recibido: $" + pagoCliente);
console.log("El cambio a entregar es: $" + cambio);