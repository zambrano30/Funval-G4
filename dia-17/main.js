/* let boton = document.querySelector("#btn");
let fiona = document.querySelector("#fiona");
let body = document.querySelector("#body");
let isDia = true;

boton.addEventListener("click", function (event) {
  if (isDia) {
    // Cambiar a noche
    event.target.classList.remove("bg-green-700");
    event.target.classList.add("bg-blue-900");
    event.target.textContent = "🌙 Noche";
    
    // Cambiar Fiona a ogro
    fiona.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ufyvt6UDgjutwcGz9efSzDvqvfC0MmUKKQ&s");
    fiona.classList.add("hue-rotate-60", "brightness-75");
    
    // Cambiar el fondo del body a noche
    body.classList.remove("bg-sky-400");
    body.classList.add("bg-blue-950");
    
    console.log("Es de noche - Fiona es ogro");
    isDia = false;
  } else {
    // Cambiar a día
    event.target.classList.remove("bg-blue-900");
    event.target.classList.add("bg-green-700");
    event.target.textContent = "☀️ Día";
    
    // Cambiar Fiona a princesa
    fiona.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCu8IEQiUUlnyUWvgBeUJaaRunJ7JmMqXrw&s");
    fiona.classList.remove("hue-rotate-60", "brightness-75");
    
    // Cambiar el fondo del body a día
    body.classList.remove("bg-blue-950");
    body.classList.add("bg-sky-400");
    
    console.log("Es de día - Fiona es princesa");
    isDia = true;
  }
}); */


/* let datosFormulario = {};

// Ejemplo: Capturar datos de inputs en tiempo real
function inicializarFormulario() {
    // Obtener todos los inputs
    let inputs = document.querySelectorAll("input");
    
    inputs.forEach(function(input) {
        // Escuchar cambios en cada input
        input.addEventListener("input", function(event) {
            let nombreCampo = event.target.name || event.target.id;
            datosFormulario[nombreCampo] = event.target.value;
            
            console.log("Campo actualizado:", nombreCampo, "=", event.target.value);
            console.log("Objeto completo:", datosFormulario);
        });
    });
}

// Función para obtener todos los datos del formulario
function obtenerDatosFormulario() {
    let formulario = document.querySelector("form");
    if (formulario) {
        let inputs = formulario.querySelectorAll("input");
        
        inputs.forEach(function(input) {
            let nombreCampo = input.name || input.id;
            datosFormulario[nombreCampo] = input.value;
        });
    }
    
    return datosFormulario;
}


 */
/* let contador = 0;
let anterior = "";
let opcionColor = document.querySelector("#selectorColor");

opcionColor.addEventListener("change", function(e) {
  let parrafo = document.querySelector("#parrafo");
  if(contador === 0){
    parrafo.classList.add(`text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  }
  else{
    parrafo.classList.replace(anterior, `text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
  }
}); */
/* let inpusito = document.querySelector("#teclado");
let parrafo =document.querySelector("#mensajeUsuario");
inpusito.addEventListener("keydown", function(e) {
  parrafo.textContent = "tecla presionada " + e.key;
  
});

let cuadro = document.querySelector("#cuadro")
cuadro.addEventListener("mouseover",function(e) {
  
})
 */
estudiantes = [];

// MODAL Y FORMULARIO
let modal = document.querySelector("#modal");
let abrirModalBtn = document.querySelector("#abrirModal");
let cerrarModalBtn = document.querySelector("#cerrarModal");
let cancelarBtn = document.querySelector("#cancelar");
let formulario = document.querySelector("#formulario");

// Función para abrir modal
function abrirModal() {
    if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        setTimeout(() => {
            let modalContent = modal.querySelector(".modal-content");
            if (modalContent) {
                modalContent.classList.add("scale-100");
            }
        }, 10);
    }
}

// Función para cerrar modal
function cerrarModal() {
    if (modal) {
        let modalContent = modal.querySelector(".modal-content");
        if (modalContent) {
            modalContent.classList.remove("scale-100");
        }
        setTimeout(() => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }, 200);
    }
}

// Función para agregar estudiante
function agregarEstudiante(nombre, edad, nacionalidad) {
    let nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre: nombre,
        edad: edad,
        nacionalidad: nacionalidad
    };
    
    estudiantes.push(nuevoEstudiante);
    actualizarTabla();
}

// Función para actualizar la tabla
function actualizarTabla() {
    let tbody = document.querySelector("#tabla-body");
    if (tbody) {
        tbody.innerHTML = ""; // Limpiar tabla
        
        for (let i = 0; i < estudiantes.length; i++) {
            tbody.innerHTML += `
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${estudiantes[i].id}
                    </th>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                        ${estudiantes[i].nombre}
                    </td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                        ${estudiantes[i].edad}
                    </td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                        ${estudiantes[i].nacionalidad}
                    </td>
                    <td class="px-6 py-4">
                        <button onclick="eliminarEstudiante(${estudiantes[i].id})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                            Eliminar
                        </button>
                    </td>
                </tr>
            `;
        }
    }
}

// Event listener para el formulario dentro del modal
if (formulario) {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evitar que se recargue la página
        
        // Obtener valores directamente de los inputs del modal
        let nombre = document.querySelector("#nombre").value.trim();
        let edad = document.querySelector("#edad").value.trim();
        let nacionalidad = document.querySelector("#nacionalidad").value.trim();
        
        // Validar que no estén vacíos
        if (nombre === "" || edad === "" || nacionalidad === "") {
            alert("Por favor, llena todos los campos");
            return;
        }
        
        // Agregar estudiante
        agregarEstudiante(nombre, edad, nacionalidad);
        
        // Limpiar formulario
        formulario.reset();
        
        // Cerrar modal
        cerrarModal();
        
        console.log("Estudiante agregado:", { nombre, edad, nacionalidad });
    });
}

// Función para eliminar estudiante
function eliminarEstudiante(id) {
    if (confirm("¿Estás seguro de que quieres eliminar este estudiante?")) {
        estudiantes = estudiantes.filter(estudiante => estudiante.id !== id);
        actualizarTabla();
        console.log("Estudiante eliminado");
    }
}

// Event listeners para abrir/cerrar modal
if (abrirModalBtn) {
    abrirModalBtn.addEventListener("click", abrirModal);
}

if (cerrarModalBtn) {
    cerrarModalBtn.addEventListener("click", cerrarModal);
}

if (cancelarBtn) {
    cancelarBtn.addEventListener("click", cerrarModal);
}

// Cerrar modal al hacer click en el fondo
if (modal) {
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });
}

// Cerrar modal con tecla Escape
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
        cerrarModal();
    }
});