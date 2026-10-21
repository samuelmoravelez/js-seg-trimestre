// 1. PROTECCIÓN DE RUTA: Validar si hay una sesión activa
const loggedUser = localStorage.getItem('loggedUser');
if (!loggedUser) {
    window.location.href = 'index.html'; // Si no hay usuario, lo devolvemos al login
}

// Mostrar mensaje de bienvenida
document.getElementById('welcomeMessage').innerText = `Bienvenido, ${loggedUser}`;

// Lógica de Cerrar Sesión
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedUser'); // Borramos la sesión
    window.location.href = 'index.html';
});

// 2. CONFIGURACIÓN DEL CRUD
const crudForm = document.getElementById('crudForm');
const recordList = document.getElementById('recordList');
const recordIdInput = document.getElementById('recordId');
const itemNameInput = document.getElementById('itemName');

// READ: Función para leer y mostrar los datos en pantalla
function renderRecords() {
    // Traemos los registros del localStorage
    const records = JSON.parse(localStorage.getItem('records')) || [];
    
    // Limpiamos la lista en el HTML antes de volver a pintarla
    recordList.innerHTML = '';

    // Filtramos solo los registros que pertenecen al usuario logueado (buena práctica)
    const userRecords = records.filter(record => record.owner === loggedUser);

    userRecords.forEach(record => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${record.name} 
            <button onclick="editRecord(${record.id})">Editar</button>
            <button onclick="deleteRecord(${record.id})">Eliminar</button>
        `;
        recordList.appendChild(li);
    });
}

// CREATE & UPDATE: Guardar o modificar un registro
crudForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const itemName = itemNameInput.value;
    const recordId = recordIdInput.value; // Si tiene un ID, estamos editando. Si está vacío, estamos creando.
    let records = JSON.parse(localStorage.getItem('records')) || [];

    if (recordId) {
        // UPDATE: Buscar el registro y actualizar su nombre
        const index = records.findIndex(r => r.id == recordId);
        if(index !== -1) {
            records[index].name = itemName;
        }
    } else {
        // CREATE: Crear un nuevo objeto y empujarlo al array
        const newRecord = {
            id: Date.now(), // Usamos la fecha actual en milisegundos como ID único
            name: itemName,
            owner: loggedUser // Asociamos el registro al usuario actual
        };
        records.push(newRecord);
    }

    // Guardamos el array actualizado en localStorage
    localStorage.setItem('records', JSON.stringify(records));
    
    // Limpiamos el formulario y volvemos a pintar la lista
    crudForm.reset();
    recordIdInput.value = '';
    renderRecords();
});

// UPDATE (Preparación): Cargar los datos en el formulario
window.editRecord = function(id) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const recordToEdit = records.find(r => r.id === id);
    
    if (recordToEdit) {
        // Llenamos los inputs con los datos del registro
        itemNameInput.value = recordToEdit.name;
        recordIdInput.value = recordToEdit.id;
    }
};

// DELETE: Borrar un registro
window.deleteRecord = function(id) {
    if(confirm('¿Estás seguro de eliminar este registro?')) {
        let records = JSON.parse(localStorage.getItem('records')) || [];
        
        // Filtramos dejando todos los registros que NO tengan el ID que queremos borrar
        records = records.filter(record => record.id !== id);
        
        localStorage.setItem('records', JSON.stringify(records));
        renderRecords(); // Actualizamos la vista
    }
};

// Ejecutamos renderRecords al cargar la página para mostrar lo guardado
renderRecords();