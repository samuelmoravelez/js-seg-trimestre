// Seleccionamos los formularios del DOM
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

// LÓGICA DE REGISTRO
registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Obtenemos los usuarios que ya existen (o un array vacío si no hay ninguno)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificamos si el usuario ya existe
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        alert('El usuario ya existe');
        return;
    }

    // Agregamos el nuevo usuario y lo guardamos en localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    registerForm.reset(); // Limpia los campos
});

// LÓGICA DE LOGIN
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('logUsername').value;
    const password = document.getElementById('logPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscamos si las credenciales coinciden
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // Guardamos quién inició sesión
        localStorage.setItem('loggedUser', username);
        alert('Bienvenido ' + username);
        window.location.href = 'dashboard.html'; // Redirigimos al CRUD
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});