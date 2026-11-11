// --- 1. Callbacks ---
// Función que recibe el nombre de un aprendiz y una función callback para saludar
function saludarAprendiz(nombre, callback) {
    callback(nombre);
}

const mostrarBienvenida = (nombre) => {
    console.log(`¡Bienvenido al SENA, aprendiz ${nombre}!`);
};

saludarAprendiz("Samuel", mostrarBienvenida);
// Resultado en consola: ¡Bienvenido al SENA, aprendiz Samuel!


// --- 2. Promesas ---
// Promesa que simula la validación de credenciales de inicio de sesión
const validarCredenciales = (usuario, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin" && password === "1234") {
                resolve("Inicio de sesión exitoso. Acceso concedido.");
            } else {
                reject("Error: Credenciales incorrectas.");
            }
        }, 1000);
    });
};

validarCredenciales("admin", "1234")
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
// Resultado en consola (1 segundo después): Inicio de sesión exitoso. Acceso concedido.


// --- 3. JSON ---
// Objeto con datos de un vehículo
const vehiculo = {
    marca: "TVS",
    modelo: "Raider 125",
    tipo: "Motocicleta",
    anio: 2026
};

// Convertir el objeto a formato JSON (cadena de texto)
const vehiculoJSON = JSON.stringify(vehiculo);
console.log("Objeto convertido a JSON:", vehiculoJSON);

// Recuperar y transformar la información de vuelta a un objeto con JSON.parse()
const vehiculoObjeto = JSON.parse(vehiculoJSON);
console.log("Información recuperada:", vehiculoObjeto.marca, vehiculoObjeto.modelo);


// --- 4. Objetos ---
// Objeto que representa un parqueadero con un método interno
const parqueadero = {
    nombre: "Parqueadero Central",
    direccion: "Calle 50 #45-12",
    capacidad: 50,
    mostrarCaracteristicas: function() {
        console.log(`Parqueadero: ${this.nombre} | Dirección: ${this.direccion} | Capacidad: ${this.capacidad} vehículos`);
    }
};

parqueadero.mostrarCaracteristicas();
// Resultado en consola: Parqueadero: Parqueadero Central | Dirección: Calle 50 #45-12 | Capacidad: 50 vehículos


// --- 5. Async/Await ---
// Función que simula una consulta asíncrona con una espera de 3 segundos
const consultarEspaciosDisponibles = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const espaciosLibres = 14;
            resolve(espaciosLibres);
        }, 3000);
    });
};

async function verificarEspaciosParqueadero() {
    console.log("Consultando espacios disponibles en el parqueadero...");
    const espacios = await consultarEspaciosDisponibles();
    console.log(`¡Consulta exitosa! Espacios disponibles: ${espacios}`);
}

verificarEspaciosParqueadero();
// Resultado en consola:
// 1. Consultando espacios disponibles en el parqueadero...
// 2. (Espera 3 segundos)... ¡Consulta exitosa! Espacios disponibles: 14


// --- 6. Funciones de flecha ---
// Cuatro funciones de flecha para operaciones aritméticas básicas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

console.log("Suma (10 + 5):", sumar(10, 5));             // 15
console.log("Resta (10 - 5):", restar(10, 5));             // 5
console.log("Multiplicación (10 * 5):", multiplicar(10, 5)); // 50
console.log("División (10 / 5):", dividir(10, 5));         // 2