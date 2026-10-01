// 1. Pedimos los datos de texto (usamos solo prompt porque son letras/palabras)
let nombre = prompt("Ingresa el nombre del aprendiz:");
let direccion = prompt("Ingresa la dirección del aprendiz:");

// 2. Pedimos el año de nacimiento (usamos Number porque haremos una resta matemática)
let anioNacimiento = Number(prompt("Ingresa el año de nacimiento:"));

// 3. Definimos el año actual para poder hacer el cálculo
// Nota: En programación se acostumbra no usar la letra "ñ" en las variables (por eso usamos "anio")
let anioActual = 2026; 

// 4. Calculamos la edad restando el año actual menos el año de nacimiento
let edad = anioActual - anioNacimiento;

// 5. Mostramos la información completa ingresada y la edad calculada
console.log("=== DATOS DEL APRENDIZ ===");
console.log("Nombre completo: " + nombre);
console.log("Dirección: " + direccion);
console.log("Año de nacimiento: " + anioNacimiento);
console.log("--------------------------");
console.log("Edad calculada: " + edad + " años");
console.log("==========================");