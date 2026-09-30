// 1. Datos básicos
const nombre = prompt("Ingrese su nombre:");
const edad = prompt("Ingrese su edad:");
const trimestre = prompt("Ingrese el trimestre que cursa:");

// 2. Competencia 1
const comp1 = prompt("Ingrese el nombre de la primera competencia:");
const n1_c1 = parseFloat(prompt(`[${comp1}] Nota 1:`));
const n2_c1 = parseFloat(prompt(`[${comp1}] Nota 2:`));
const n3_c1 = parseFloat(prompt(`[${comp1}] Nota 3:`));
const promComp1 = (n1_c1 + n2_c1 + n3_c1) / 3;

// 3. Competencia 2
const comp2 = prompt("Ingrese el nombre de la segunda competencia:");
const n1_c2 = parseFloat(prompt(`[${comp2}] Nota 1:`));
const n2_c2 = parseFloat(prompt(`[${comp2}] Nota 2:`));
const n3_c2 = parseFloat(prompt(`[${comp2}] Nota 3:`));
const promComp2 = (n1_c2 + n2_c2 + n3_c2) / 3;

// 4. Promedio General
const promTrimestre = (promComp1 + promComp2) / 2;

// 5. Resultados en Consola
console.log("==========================================");
console.log(`Aprendiz: ${nombre} (${edad} años) - Trimestre: ${trimestre}`);
console.log("------------------------------------------");
console.log(`Competencia 1 [${comp1}]: ${promComp1.toFixed(2)} -> ${promComp1 >= 3.5 ? 'APROBÓ' : 'NO APROBÓ'}`);
console.log(`Competencia 2 [${comp2}]: ${promComp2.toFixed(2)} -> ${promComp2 >= 3.5 ? 'APROBÓ' : 'NO APROBÓ'}`);
console.log("------------------------------------------");
console.log(`PROMEDIO TRIMESTRE: ${promTrimestre.toFixed(2)} -> ${promTrimestre >= 3.5 ? 'TRIMESTRE APROBADO' : 'TRIMESTRE NO APROBADO'}`);
console.log("==========================================");