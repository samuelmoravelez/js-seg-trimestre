
let valorMatricula = Number(prompt("Ingresa el valor total de la matrícula:"));


let cuota1 = valorMatricula * 0.40; 
let cuota2 = valorMatricula * 0.25; 
let cuota3 = valorMatricula * 0.20; 
let cuota4 = valorMatricula * 0.15; 


console.log("=== PLAN DE PAGOS DE LA MATRÍCULA ===");
console.log("Valor total a pagar: $" + valorMatricula);
console.log("-------------------------------------");
console.log("Primera cuota (40%): $" + cuota1);
console.log("Segunda cuota (25%): $" + cuota2);
console.log("Tercera cuota (20%): $" + cuota3);
console.log("Cuarta cuota (15%): $" + cuota4);
console.log("=====================================");