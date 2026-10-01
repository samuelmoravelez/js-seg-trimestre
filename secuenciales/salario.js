// 1. Pedimos la cantidad de horas trabajadas y el valor de cada hora
let horasTrabajadas = Number(prompt("Ingresa la cantidad de horas trabajadas:"));
let valorHora = Number(prompt("Ingresa el valor a pagar por cada hora:"));

// 2. Calculamos el salario multiplicando las horas por el valor de cada una
let salario = horasTrabajadas * valorHora;

// 3. Mostramos el resultado en la consola
console.log("Las horas trabajadas fueron: " + horasTrabajadas);
console.log("El valor por hora es: $" + valorHora);
console.log("El salario total a pagar es de: $" + salario);