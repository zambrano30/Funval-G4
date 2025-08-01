/* let a = 12;
let b = 10;
let pepito;
let juanito;
if (a>b){
     pepito=322;
}
else{
 juanito =425;
}
console.log(pepito,juanito); */

/* let participante={
    nombre: "Christopher",
    edad:22,
    carrera:"Software development",
    ganador:false,
}

let mensaje = ` ${participante.ganador === true ? "Felicidades acabas de ganar $ 1000000" : "Lo sentimos, siga participando"} `
console.log(mensaje)
 */

/* let notas=[33,45,100,45];
 let [a,b,c,d]=notas;

 console.log(b) */

let estudiantesFunval = [
  {
    nombre: "Yamila",
    pais: "Argentina",
  },
  {
    nombre: "Gabriel",
  },
  {
    nombre: "Banjamin",
    pais: "Argentina",
    edad: 32,
    mision: true,
  },
  {
    nombre: "Jeff",
    pais: "Peru",
  },
];


function crearFilaEstudiante(estudiante) {

    const { nombre, pais = 'No especificado', edad = 'No especificado', mision = false } = estudiante;
    
    return `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${nombre}
            </th>
            <td class="px-6 py-4">
                ${pais}
            </td>
            <td class="px-6 py-4">
                ${edad}
            </td>
            <td class="px-6 py-4">
                ${mision ? 'Sí' : 'No'}
            </td>
        </tr>`;
}

let tbody = document.querySelector("#tbody");

// Solo agregar las filas, no toda la tabla
let filasHTML = '';
estudiantesFunval.forEach(estudiante => {
    filasHTML += crearFilaEstudiante(estudiante);
});

tbody.innerHTML = filasHTML;