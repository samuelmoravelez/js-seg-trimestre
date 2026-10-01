// 1. Pedimos el sueldo base y el valor de las tres ventas
let sueldoBase = Number(prompt("Ingresa el sueldo base del vendedor:"));
let venta1 = Number(prompt("Ingresa el valor de la primera venta:"));
let venta2 = Number(prompt("Ingresa el valor de la segunda venta:"));
let venta3 = Number(prompt("Ingresa el valor de la tercera venta:"));

// 2. Sumamos las tres ventas para saber el total vendido en el mes
let totalVentas = venta1 + venta2 + venta3;

// 3. Calculamos la comisión (10% del total de las ventas)
// Multiplicamos por 0.10 para sacar el 10%
let comisiones = totalVentas * 0.10;

// 4. Calculamos el sueldo total sumando el sueldo base más lo ganado en comisiones
let sueldoTotal = sueldoBase + comisiones;

// 5. Mostramos los resultados que pide el ejercicio
console.log("El dinero obtenido por concepto de comisiones es: $" + comisiones);
console.log("El total que recibirá en el mes (sueldo base + comisiones) es: $" + sueldoTotal);