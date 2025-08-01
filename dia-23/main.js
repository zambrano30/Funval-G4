/* console.log("Levantarme")
console.log("Cepillar mis dientes")
console.log("Bañarme")
console.log("Vestirme")
console.log("Peinarme")
console.log("Encender la computadora")
console.log("Conectarme a la clase") */





/*Asincronia*/

/* setTimeout(() => {console.log("Hervir agua")
    
}, 3000);
console.log("Preparar la yerba");
console.log("Encender la computadora")
setTimeout(() => {
    console.log("Abrir zoom")
    
},20);
 */


/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];
//CREANDO UNA PROMESA
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con inerHTML EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
    el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc 
*/


async function obtenerDatos(){
    try {
        let estudiantesFunval = await listaEstudiantes;
        let estudiantesAprobados = [];
        
        // Calcular promedio y filtrar aprobados
        for (let index = 0; index < estudiantesFunval.length; index++) {
            let estudiante = estudiantesFunval[index];
            let suma = estudiante.notas.reduce((a, b) => a + b, 0);
            let promedio = suma / estudiante.notas.length;
            
            console.log(`${estudiante.nombre}: ${promedio.toFixed(2)}`);
            
            // Solo agregar si está aprobado (promedio >= 51)
            if (promedio >= 51) {
                estudiantesAprobados.push({
                    ...estudiante,
                    promedio: promedio.toFixed(2)
                });
            }
        }
        
        // Mostrar en el HTML
        mostrarEstudiantesAprobados(estudiantesAprobados);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

function mostrarEstudiantesAprobados(estudiantes) {
    let contenedor = document.getElementById('contenedor-estudiantes');
    
    let html = '<h2>Estudiantes Aprobados (Promedio >= 51pts)</h2>';
    
    if (estudiantes.length === 0) {
        html += '<p>No hay estudiantes aprobados.</p>';
    } else {
        html += '<div class="estudiantes-grid">';
        
        estudiantes.forEach(estudiante => {
            html += `
                <div class="card-estudiante">
                    <h3>${estudiante.nombre}</h3>
                    <p><strong>Edad:</strong> ${estudiante.edad} años</p>
                    <p><strong>Notas:</strong> ${estudiante.notas.join(', ')}</p>
                    <p><strong>Promedio:</strong> ${estudiante.promedio}pts</p>
                    <span class="estado-aprobado">✅ APROBADO</span>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    contenedor.innerHTML = html;
}

obtenerDatos();




