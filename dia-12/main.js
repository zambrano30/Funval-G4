/* //if//
if(condicion){

} */
//Verify if a person is an adult
/* let age = 10; */
/* if(age>=18){
    console.log("You are an adult");
}
console.log("flujo nomral")
 */

// if -else

/*    if (age >= 18){
        console.log("You are an adult")
    }else{
        console.log("You are not an adult")
    } */

//if /else/if

/* let permisoMama = false;
let permisoPapa = true;
edad = 20;
if (edad >= 18 && (permisoMama || permisoPapa) ){
 
    console.log("Puedo salir a bailar");
  
} else {
  console.log("Me quedo en casa");
}
 */
/* 
let permisoMama = false;
let permisoPapa = true;
edad = 28;
if (edad >= 18) {
  if (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }
} else {
  console.log("me quedo en casa");
} */
//verificar el mes con numeros del 1 al 12

//personas nacidas desde el 2002
/* let day=1;
let month=1;
let year = 2002;
let currentYear = 2025;
let lifeyear = currentYear - year
let totalDays =365 * lifeyear + 6 -169



if(month===1)
    switch(day){
        case 1: 
        totalDays;
        console.log(totalDays)
    }
 */

/*bucles whiles

*/
/* 
let n = 0;

while (n < 5) {
  console.log(n);
  n++;/// n = n+1
}
console.log("flujo normal")
 */

/*----------Do while----------------- */

/* 

let pares=2;
let number= parseInt(prompt("Enter a number"));



for(let i=1;i<=number;i++){
  console.log(pares);
  pares+=2
} */

/* 
  let num1 = prompt("Enter a number")
  num1=parseInt(num1)

  let num2 = prompt("Enter a number")
  num2=parseInt(num2)

  let resultado=0;

for (let i=1; i<=num1; i++){

  resultado=num2+resultado
  

}
console.log(resultado)
 */


/* let numero=parseInt(prompt("Ingrese un numero"))
let factorial = 1;
for(let i=1; i<=numero;i++){
  console.log(i)
  factorial= factorial*i
}
console.log(factorial) */
/* let numero=parseInt(prompt("Ingrese un numero"));
let a=0;
let b=1;
let c=0;

for(let i=0; i<numero;i++ ){
  if (i===1){
    console.log(a)

  }
  if(i===2){
    console.log(b)
  }
  if(i>2){
    c = a+b;
    console.log(c);
    a=b;
    b=c;
  }
} */

let numero=parseInt(prompt("Ingrese un numero"));
let count=0;
let primo=2;


while(count < numero ){
  let isPrime =true;




  for (let i=2; i*i<=numero;i++){
    if(primo % i===0){
      isPrime=false;
      break;
    }

  }
  if(isPrime){
    console.log(primo);
    count++;
  }
  primo++;
}



