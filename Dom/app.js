// Obtener referencias a elementos del DOM
const form = document.getElementById('formNotas');
const btnLimpiar = document.getElementById('btnLimpiar');
const contenedorResultado = document.getElementById('resultado');

// Escuchar el envío del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir recarga de la página

  // 1. Lectura de campos personales
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const trimestre = document.getElementById('trimestre').value;

  // 2. Lectura de nombres de competencias
  const comp1Nombre = document.getElementById('comp1').value;
  const comp2Nombre = document.getElementById('comp2').value;

  // 3. Conversión de notas a números flotantes
  const c1n1 = parseFloat(document.getElementById('c1n1').value);
  const c1n2 = parseFloat(document.getElementById('c1n2').value);
  const c1n3 = parseFloat(document.getElementById('c1n3').value);

  const c2n1 = parseFloat(document.getElementById('c2n1').value);
  const c2n2 = parseFloat(document.getElementById('c2n2').value);
  const c2n3 = parseFloat(document.getElementById('c2n3').value);

  // 4. Validar que las notas estén dentro del rango 1.0 a 5.0
  const todasLasNotas = [c1n1, c1n2, c1n3, c2n1, c2n2, c2n3];
  const notaInvalida = todasLasNotas.some(nota => isNaN(nota) || nota < 1.0 || nota > 5.0);

  if (notaInvalida) {
    alert('Todas las notas deben estar en el rango de 1.0 a 5.0');
    return;
  }

  // 5. Cálculo de promedios
  const promComp1 = (c1n1 + c1n2 + c1n3) / 3;
  const promComp2 = (c2n1 + c2n2 + c2n3) / 3;
  const promTrimestre = (promComp1 + promComp2) / 2;

  // Evaluaciones de aprobación (>= 3.5)
  const apComp1 = promComp1 >= 3.5;
  const apComp2 = promComp2 >= 3.5;
  const apTrimestre = promTrimestre >= 3.5;

  // 6. Inyección dinámica de HTML en el DOM
  contenedorResultado.innerHTML = `
    <h3>Resumen del Trimestre</h3>
    <p><strong>Estudiante:</strong> ${nombre} (${edad} años) | <strong>Trimestre:</strong> ${trimestre}</p>
    <hr style="margin: 10px 0; border: none; border-top: 1px solid #ddd;">
    
    <p>
      <strong>${comp1Nombre}:</strong> Promedio = ${promComp1.toFixed(2)} 
      <span class="badge ${apComp1 ? 'aprobado' : 'reprobado'}">
        ${apComp1 ? 'Aprobó' : 'No Aprobó'}
      </span>
    </p>
    
    <p style="margin-top: 8px;">
      <strong>${comp2Nombre}:</strong> Promedio = ${promComp2.toFixed(2)} 
      <span class="badge ${apComp2 ? 'aprobado' : 'reprobado'}">
        ${apComp2 ? 'Aprobó' : 'No Aprobó'}
      </span>
    </p>

    <div class="resumen-trimestre">
      <p>
        <strong>Promedio Final del Trimestre:</strong> ${promTrimestre.toFixed(2)}
      </p>
      <p style="margin-top: 6px;">
        <strong>Estado Final:</strong> 
        <span class="badge ${apTrimestre ? 'aprobado' : 'reprobado'}">
          ${apTrimestre ? 'TRIMESTRE APROBADO' : 'TRIMESTRE NO APROBADO'}
        </span>
      </p>
    </div>
  `;

  // Mostrar el contenedor de resultados
  contenedorResultado.classList.remove('hidden');
});

// Botón para limpiar el formulario y ocultar resultados
btnLimpiar.addEventListener('click', function () {
  form.reset();
  contenedorResultado.innerHTML = '';
  contenedorResultado.classList.add('hidden');
});