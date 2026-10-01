// 1. Pedimos los dos únicos datos que necesita el programa
let salario = Number(prompt("Ingresa el salario base del empleado:"));
let ahorro = Number(prompt("Ingresa el valor del ahorro mensual programado:"));

// 2. Calculamos las deducciones de ley (EPS y Pensión)
// El 12.5% se escribe como 0.125 en decimal
let descuentoEps = salario * 0.125; 

// El 16% se escribe como 0.16 en decimal
let descuentoPension = salario * 0.16; 

// 3. Calculamos el total de dinero que se le va a descontar al empleado
let totalDescuentos = ahorro + descuentoEps + descuentoPension;

// 4. Calculamos el total a recibir (Salario menos todos los descuentos)
let totalRecibir = salario - totalDescuentos;

// 5. Imprimimos la colilla de pago completa en la consola
console.log("========== COLILLA DE PAGO ==========");
console.log("Salario base: $" + salario);
console.log("Ahorro mensual programado: -$" + ahorro);
console.log("Aporte a Salud (EPS - 12.5%): -$" + descuentoEps);
console.log("Aporte a Pensión (16%): -$" + descuentoPension);
console.log("-------------------------------------");
console.log("TOTAL A RECIBIR: $" + totalRecibir);
console.log("=====================================");

