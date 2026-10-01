// 1. Pedimos la cantidad de hombres y de mujeres en el grupo
let cantidadHombres = Number(prompt("Ingresa la cantidad de hombres:"));
let cantidadMujeres = Number(prompt("Ingresa la cantidad de mujeres:"));

// 2. Sumamos ambos valores para saber el total de alumnos
let totalAlumnos = cantidadHombres + cantidadMujeres;

// 3. Calculamos los porcentajes
// La fórmula es: dividir la cantidad de cada grupo entre el total, y multiplicarlo por 100
let porcentajeHombres = (cantidadHombres / totalAlumnos) * 100;
let porcentajeMujeres = (cantidadMujeres / totalAlumnos) * 100;

// 4. Mostramos los resultados añadiendo el símbolo "%" al final
console.log("El total de alumnos en el grupo es: " + totalAlumnos);
console.log("El porcentaje de hombres es: " + porcentajeHombres + "%");
console.log("El porcentaje de mujeres es: " + porcentajeMujeres + "%");