let ingreso = (balance, cantidad) => balance + cantidad;
let retiro = (balance, cantidad) => balance - cantidad;
let saldo = (balance = 0) => balance;
let despedida = () =>
  console.log("Christopher, Gracias por usar nuestro banco, vuelve pronto!");

let balance = 0;
let opcion;
let cantidad;

console.log("Bienvenido a tu banco favorito: ");
do {
  opcion = parseInt(
    prompt(`Elige una opción para avanzar (0-3):
1. Ingresar dinero a su cuenta.
2. Retirar dinero de su cuenta.
3. Conocer su saldo.
0. Salir`)
  );

  switch (opcion) {
    case 1:
      console.log("Bienvenido al apartado de ingreso:");
      cantidad = parseFloat(prompt("Cuanto desea ingresar a su cuenta: "));
      if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Por favor, ingrese un monto válido y positivo.");
        break;
      }
      balance = ingreso(balance, cantidad);
      console.log("Ingreso exitoso.")
      console.log("Su saldo actual es: $" + balance);
      break;

    case 2:
      console.log("Bienvenido al apartado de retiro. ");
      cantidad = parseFloat(prompt("Cuanto desea retirar de su cuenta: "));
      if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Por favor, ingrese un monto válido y positivo.");
      }
      if (cantidad > balance) {
        console.log("Saldo insuficiente");
        break;
      }
      balance = retiro(balance, cantidad);
      console.log("Retiro exitoso.")
      console.log("Su saldo actual es: $" + balance);
      break;

    case 3:
      console.log("Bienvenido al apartado para ver su saldo:");
      console.log("Su saldo es: $" + saldo(balance));
      break;
    case 0:
      despedida();
      break;
    default:
      console.log(
        "Opción inválida. Por favor, seleccione una opción del 0 al 3."
      );
      break;
  }
} while (opcion !== 0);
