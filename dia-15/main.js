/* 
console.log("Hola Mundo")




const estudiantes = ["Kevin", "Pablo","Benjamin", "Johan","Geraldine", "Gabriel"];

console.log(estudiantes[0])
console.log(estudiantes[1])
console.log(estudiantes[2])
console.log(estudiantes[3])
console.log(estudiantes[4])
console.log(estudiantes[5])
estudiantes[0]="Christopher"

console.log(estudiantes[0])
console.log(estudiantes)
console.log();
for (let i = 0; i < estudiantes.length; i++) {
   console.log(estudiantes[i])
    
}
 */

/*Las notas de un estudiante de funval estan dentro de un array 
realizar un afuncion que reciba un array y nos retorne de las notas de un estudiante.
*/


function promedio(notas){
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma+= notas[i]
           
    }
    return suma / notas.length; 
}

/* let notas1 = [100, 45, 99, 80, 78];
let notas2 = [100, 45, 99, 80];
let notas3 = [100, 45, 99];
let notas4 = [100];
let notas5 = [100,40];


console.log(promedio(notas1));  
console.log(promedio(notas2));  
console.log(promedio(notas3));  
console.log(promedio(notas4));  
console.log(promedio(notas5));  

 */


/* 
function sumaMatriz(matriz) {
    let suma=0;
    for (let i = 0; i < sumaMatriz.length; i++) {
        
    }
         return suma= sumaMatriz[1][1];

    
}

let matriz =[[28,39,90],
[70, 32,28],
[10, 0,15,45],
[11, 23, 45, 67]];
console.log(sumaMatriz(sumaMatriz))
 */

/* 
let listaEstudiante =[
    {
        nombre: "Christopher",
        edad : 22,
        nacionalidad : "Ecuador",
        esMiembro : true,
        numeroCuenta:1455545432255n,
        notas:[100,35,56,67],
    },
      {
        nombre: "Benjamin",
        edad : 22,
        nacionalidad : "Uruguay",
        esMiembro : true,
        numeroCuenta:14555454254n,
        notas:[100,40,56,67],
    },
      {
        nombre: "Jeff",
        edad : 34,
        nacionalidad : "Peru",
        esMiembro : true,
        numeroCuenta:1455545432244n,
        notas:[100,52,56,67],
    },
      {
        nombre: "Yamila",
        edad : 22,
        nacionalidad : "Argentina",
        esMiembro : true,
        numeroCuenta:14555454322,
        notas:[100,35,56,64],
    }
];


for (let i = 0; i < listaEstudiante.length; i++) {
    console.log(listaEstudiante[i]);
    console.log(listaEstudiante[i].notas);
    let promedioEstudiante= promedio(listaEstudiante[i].notas);
    if(promedioEstudiante>=70){
        console.log(listaEstudiante[i].nombre + " este estudiante tiene un promedio de: "+ promedioEstudiante)
    }
}
for (let i = 0; i < listaEstudiante.length; i++) {
    if ( listaEstudiante[i].nacionalidad === "Argentina"){
        console.log("Estos estudiantes son de Argentina: "+ listaEstudiante[i].nombre)
    }
    
}

 */















