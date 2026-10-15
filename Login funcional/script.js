document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTOS PESTAÑAS ---
  const tabLoginBtn = document.getElementById("tabLoginBtn");
  const tabRegistroBtn = document.getElementById("tabRegistroBtn");
  const vistaLogin = document.getElementById("vistaLogin");
  const vistaRegistro = document.getElementById("vistaRegistro");

  // --- ELEMENTOS FORMULARIOS Y CRUD ---
  const formRegistro = document.getElementById("formRegistro");
  const formLogin = document.getElementById("formLogin");
  const tablaUsuarios = document.getElementById("tablaUsuarios");
  const totalUsuarios = document.getElementById("totalUsuarios");
  const modalExito = document.getElementById("modalExito");
  const btnCerrarModal = document.getElementById("btnCerrarModal");
  const loginMensaje = document.getElementById("loginMensaje");
  const panelSesion = document.getElementById("panelSesion");
  const nombreUsuarioActivo = document.getElementById("nombreUsuarioActivo");
  const btnCerrarSesion = document.getElementById("btnCerrarSesion");
  const tituloRegistro = document.getElementById("tituloRegistro");
  const btnSubmitRegistro = document.getElementById("btnSubmitRegistro");
  const btnCancelarEdicion = document.getElementById("btnCancelarEdicion");

  let idEdicion = null;

  // --- NAVEGACIÓN ENTRE PESTAÑAS ---
  const activarPestana = (pestaña) => {
    if (pestaña === "login") {
      vistaLogin.classList.remove("hidden");
      vistaRegistro.classList.add("hidden");
      tabLoginBtn.className = "w-1/2 py-3 text-center text-sm font-semibold text-blue-600 border-b-2 border-blue-600 focus:outline-none transition";
      tabRegistroBtn.className = "w-1/2 py-3 text-center text-sm font-semibold text-gray-500 hover:text-gray-700 focus:outline-none transition";
    } else {
      vistaRegistro.classList.remove("hidden");
      vistaLogin.classList.add("hidden");
      tabRegistroBtn.className = "w-1/2 py-3 text-center text-sm font-semibold text-blue-600 border-b-2 border-blue-600 focus:outline-none transition";
      tabLoginBtn.className = "w-1/2 py-3 text-center text-sm font-semibold text-gray-500 hover:text-gray-700 focus:outline-none transition";
    }
  };

  tabLoginBtn.addEventListener("click", () => activarPestana("login"));
  tabRegistroBtn.addEventListener("click", () => activarPestana("registro"));

  // --- OBTENER / GUARDAR EN LOCALSTORAGE ---
  const obtenerUsuarios = () => JSON.parse(localStorage.getItem("usuarios")) || [];
  const guardarUsuarios = (usuarios) => localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // --- VALIDACIONES DE FORMULARIO ---
  const expresiones = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
  };

  const validarCampo = (condicion, elementId, errorId) => {
    const input = document.getElementById(elementId);
    const errorSpan = document.getElementById(errorId);
    
    if (!condicion) {
      if (input) input.classList.add("border-red-500");
      if (errorSpan) errorSpan.classList.remove("hidden");
      return false;
    } else {
      if (input) input.classList.remove("border-red-500");
      if (errorSpan) errorSpan.classList.add("hidden");
      return true;
    }
  };

  const validarFormulario = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const email = document.getElementById("email").value.trim();
    const sexoElement = document.querySelector('input[name="sexo"]:checked');
    const sexo = sexoElement ? sexoElement.value : "";
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let esValido = true;

    if (!validarCampo(nombre.length >= 6 && nombre.length <= 15, "nombre", "err-nombre")) esValido = false;
    if (!validarCampo(apellido.length >= 6 && apellido.length <= 15, "apellido", "err-apellido")) esValido = false;
    if (!validarCampo(!isNaN(edad) && edad >= 18 && edad <= 50, "edad", "err-edad")) esValido = false;
    if (!validarCampo(expresiones.email.test(email), "email", "err-email")) esValido = false;
    if (!validarCampo(sexo !== "", "", "err-sexo")) esValido = false;
    
    const passAlfanumerica = expresiones.alphanumeric.test(password);
    if (!validarCampo(password.length >= 10 && passAlfanumerica, "password", "err-password")) esValido = false;
    if (!validarCampo(confirmPassword !== "" && confirmPassword === password, "confirmPassword", "err-confirmPassword")) esValido = false;

    return esValido ? { nombre, apellido, edad, email, sexo, password } : null;
  };

  // --- REGISTRO / EDICIÓN ---
  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    const datosValidos = validarFormulario();

    if (datosValidos) {
      let usuarios = obtenerUsuarios();

      if (idEdicion !== null) {
        // Editar
        usuarios = usuarios.map(u => u.id === idEdicion ? { ...datosValidos, id: idEdicion } : u);
        resetearFormularioEdicion();
      } else {
        // Crear
        const emailExiste = usuarios.some(u => u.email === datosValidos.email);
        if (emailExiste) {
          alert("El correo electrónico ya está registrado.");
          return;
        }
        usuarios.push({ id: Date.now(), ...datosValidos });
      }

      guardarUsuarios(usuarios);
      renderizarTabla();
      formRegistro.reset();

      // Alerta requerida y cambiar a la pestaña de Login
      modalExito.classList.remove("hidden");
    }
  });

  btnCerrarModal.addEventListener("click", () => {
    modalExito.classList.add("hidden");
    activarPestana("login"); // Pasa automáticamente al Login para ingresar
  });

  // --- LOGIN ---
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value;

    const usuarios = obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === pass);

    if (usuarioEncontrado) {
      loginMensaje.textContent = "¡Inicio de sesión exitoso!";
      loginMensaje.className = "text-center text-sm font-semibold text-green-600 mt-2";
      sessionStorage.setItem("usuarioSesion", JSON.stringify(usuarioEncontrado));
      verificarSesion();
      formLogin.reset();
    } else {
      loginMensaje.textContent = "Credenciales incorrectas o usuario no registrado.";
      loginMensaje.className = "text-center text-sm font-semibold text-red-600 mt-2";
    }
  });

  const verificarSesion = () => {
    const sesion = JSON.parse(sessionStorage.getItem("usuarioSesion"));
    if (sesion) {
      nombreUsuarioActivo.textContent = `${sesion.nombre} ${sesion.apellido}`;
      panelSesion.classList.remove("hidden");
    } else {
      panelSesion.classList.add("hidden");
    }
  };

  btnCerrarSesion.addEventListener("click", () => {
    sessionStorage.removeItem("usuarioSesion");
    verificarSesion();
    loginMensaje.textContent = "";
  });

  // --- CRUD (READ, DELETE, EDIT) ---
  const renderizarTabla = () => {
    const usuarios = obtenerUsuarios();
    tablaUsuarios.innerHTML = "";
    totalUsuarios.textContent = `${usuarios.length} usuario(s)`;

    if (usuarios.length === 0) {
      tablaUsuarios.innerHTML = `
        <tr>
          <td colspan="5" class="px-4 py-4 text-center text-gray-400">No hay usuarios registrados.</td>
        </tr>`;
      return;
    }

    usuarios.forEach((u) => {
      const tr = document.createElement("tr");
      tr.className = "bg-white border-b hover:bg-gray-50";
      tr.innerHTML = `
        <td class="px-4 py-3 font-medium text-gray-900">${u.nombre} ${u.apellido}</td>
        <td class="px-4 py-3">${u.email}</td>
        <td class="px-4 py-3">${u.edad}</td>
        <td class="px-4 py-3">${u.sexo}</td>
        <td class="px-4 py-3 text-center space-x-2">
          <button onclick="prepararEdicion(${u.id})" class="text-blue-600 hover:text-blue-900 text-xs font-semibold">Editar</button>
          <button onclick="eliminarUsuario(${u.id})" class="text-red-600 hover:text-red-900 text-xs font-semibold">Eliminar</button>
        </td>
      `;
      tablaUsuarios.appendChild(tr);
    });
  };

  window.eliminarUsuario = (id) => {
    if (confirm("¿Está seguro de eliminar este usuario?")) {
      const usuarios = obtenerUsuarios().filter(u => u.id !== id);
      guardarUsuarios(usuarios);
      renderizarTabla();
    }
  };

  window.prepararEdicion = (id) => {
    const usuario = obtenerUsuarios().find(u => u.id === id);
    if (!usuario) return;

    activarPestana("registro");

    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("apellido").value = usuario.apellido;
    document.getElementById("edad").value = usuario.edad;
    document.getElementById("email").value = usuario.email;
    document.getElementById("password").value = usuario.password;
    document.getElementById("confirmPassword").value = usuario.password;

    const radioSexo = document.querySelector(`input[name="sexo"][value="${usuario.sexo}"]`);
    if (radioSexo) radioSexo.checked = true;

    idEdicion = id;
    tituloRegistro.textContent = "Editar Usuario";
    btnSubmitRegistro.textContent = "Actualizar Usuario";
    btnCancelarEdicion.classList.remove("hidden");
  };

  const resetearFormularioEdicion = () => {
    idEdicion = null;
    tituloRegistro.textContent = "Crear nueva cuenta";
    btnSubmitRegistro.textContent = "Registrar Usuario";
    btnCancelarEdicion.classList.add("hidden");
  };

  btnCancelarEdicion.addEventListener("click", () => {
    formRegistro.reset();
    resetearFormularioEdicion();
  });

  // Inicialización
  renderizarTabla();
  verificarSesion();
});