function saludar(nombre, callback) {
console.log("Hola, " + nombre);
callback();
}
function despedir() {
console.log("Bienvenido al curso de JavaScript");
}
// Ejecutar la función
saludar("Carlos", despedir);

