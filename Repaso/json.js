const estudiante = {
"nombre": "Carlos",
"edad": 22,
"programa": "Desarrollo de Software",
"activo": true
};
// Convertir objeto JavaScript a JSON
const datosJSON = JSON.stringify(estudiante);
console.log(datosJSON);
// Convertir JSON a objeto JavaScript
const nuevoEstudiante = JSON.parse(datosJSON);
console.log(nuevoEstudiante.nombre);

