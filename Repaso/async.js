function obtenerEstudiante() {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Carlos - Desarrollo de Software");
}, 2000);
});
}
async function mostrarEstudiante() {
console.log("Consultando estudiante...");
const resultado = await obtenerEstudiante();
console.log(resultado);
}
mostrarEstudiante();

