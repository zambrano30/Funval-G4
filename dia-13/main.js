/* function Menu() {
  let opcion = parseInt(
    prompt(
      "Menu de platos:\n" +
        "1-Tacos ($25)\n" +
        "2-Arroz ($18)\n" +
        "3-Frito ($22)\n" +
        "4-Papas ($28)\n" +
        "5-Pizza ($15)\n" +
        "Seleccione una opción (1-5):"
    )
  );

  if (opcion >= 1 && opcion <= 5 && !isNaN(opcion)) {
    return opcion;
  } else {
    alert("Ingrese un valor válido");
    return Menu();
  }
}

function CalcularPrecio(opcion, cantidad) {
  let precio = 0;
  let nombrePlato = "";

  switch (opcion) {
    case 1:
      precio = 25; 
      nombrePlato = "Tacos";
      break;
    case 2:
      precio = 18; 
      nombrePlato = "Arroz";
      break;
    case 3:
      precio = 22; 
      nombrePlato = "Frito";
      break;
    case 4:
      precio = 28;
      nombrePlato = "Papas";
      break;
    case 5:
      precio = 15; 
      nombrePlato = "Pizza";
      break;
    default:
      alert("Opción no válida");
      return { total: 0, nombrePlato: "" };
  }

  let total = precio * cantidad;
  return { total: total, nombrePlato: nombrePlato };
}

function SolicitarCantidad() {
  let cantidad = parseInt(prompt("Ingrese la cantidad:"));
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor ingrese una cantidad válida");
    return SolicitarCantidad();
  }
  return cantidad;
}

function SolicitarNombre() {
  let nombreCliente = prompt("Ingrese su nombre:");
  if (!nombreCliente || nombreCliente.trim() === "") {
    alert("Por favor ingrese un nombre válido");
    return SolicitarNombre();
  }
  return nombreCliente;
}

function Main() {
  let nombreCliente = SolicitarNombre();
  let opcionElegida = Menu();
  let cantidad = SolicitarCantidad();

  let resultado = CalcularPrecio(opcionElegida, cantidad);

  alert(
    `Cliente: ${nombreCliente}\nPlato: ${resultado.nombrePlato}\nCantidad: ${cantidad}\nTotal: $${resultado.total}`
  );
}

Main();
 */

/* let pedrito = function(){
  console.log("Hola Pedrito")
}
pedrito();



let juanito = function (nombre){
  console.log("Hola " +nombre);
}
juanito("kevin")




let resta =function(a,b){
  return a-b;
}

console.log(resta(5,2)); */

/*----------Arrow function-----------------*/

/* let multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(2, 6));

let duplicar = (x) => x * 2;
console.log(duplicar(4)); */







console.log("Bienvenido a tu calculadora magica");
console.log("Elige una Opcion para avanzar");
console.log("1. Sumar");
console.log("2.Restar");
console.log("3.Multiplicar");
console.log("4.Dividir");
console.log("0.Salir");
let opcion = parseInt(prompt("opcion"));
let sumar = (a, b)=> a+b;

let restar= (a, b)=> a-b;

let multiplicar = (a, b)=> a*b;

let dividir = (a, b)=> a/b;

switch(opcion){

  case 1:
    a= parseFloat(prompt(("Ingrese el valor de a: ")));
    b= parseFloat(prompt("Ingrese el valor de b: "));
    console.log("El resultado es: "+ sumar(a,b))
    break;

    case 2:
    a= parseFloat(prompt(("Ingrese el valor de a: ")));
    b= parseFloat(prompt("Ingrese el valor de b: "));
    console.log("El resultado es: "+ restar(a,b))
    break;

    case 3:
    a= parseFloat(prompt(("Ingrese el valor de a: ")));
    b= parseFloat(prompt("Ingrese el valor de b: "));
    console.log("El resultado es: "+ multiplicar(a,b))
    break;

    case 4:
    a= parseFloat(prompt(("Ingrese el valor de a: ")));
    b= parseFloat(prompt("Ingrese el valor de b: "));
    console.log("El resultado es: "+ dividir(a,b))
    break;
    case 0:
      console.log()

    
    
}




