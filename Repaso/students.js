// 1. Crear un objeto
const estudiante = {
nombre: "Laura",
edad: 21,
programa: "Desarrollo de Software"
};
// 2. Función de flecha
const mostrarNombre = (nombre) => {
console.log("Estudiante: " + nombre);
};
// 3. Convertir objeto a JSON
const datos = JSON.stringify(estudiante);
// 4. Crear una promesa
function consultarEstudiante() {
return new Promise((resolve) => {
setTimeout(() => {
resolve(datos);
}, 2000);
});
}
// 5. Utilizar Async/Await
async function ejecutarConsulta() {
console.log("Consultando información...");
const respuesta = await consultarEstudiante();
// 6. Convertir JSON a objeto
const resultado = JSON.parse(respuesta);
mostrarNombre(resultado.nombre);
console.log("Edad: " + resultado.edad);
console.log("Programa: " + resultado.programa);
}
// Ejecutar programa
ejecutarConsulta();