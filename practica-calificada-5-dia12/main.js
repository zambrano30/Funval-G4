console.log("Welcome to Geometric calculator ");

console.log("Menu principal");

let option = 1;

while (option !== 0) {
  console.log("Choose an option to continue.");
  console.log(`
1.Calculate the square area.
2.Calculate the rectangle area
3.Calculate the triangle area.
0.Exit`);
  option = parseInt(prompt("Option: "));
  if (isNaN(option) || option < 0 || option > 3) {
    console.log("Error: Please enter a valid option (0, 1, 2, 3)"); 
    continue;
  }

  switch (option) {
    case 1:
      console.log("Ok, for knowing the square area enter the side length.");
      let side = parseFloat(prompt("Enter the side: ")); 
      if (isNaN(side) || side <= 0) {
        console.log("Please enter a valid data.");
        break;
      }
      let areaSquare = side ** 2;
      console.log("The square area is: " + areaSquare + " square units."); 
      break;

    case 2:
      console.log(
        "Ok, for knowing the rectangle area enter the length of the base and the height."
      );
      let base = parseFloat(prompt("Enter the base: "));
      let height = parseFloat(prompt("Enter the height: ")); 
      if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
        console.log("Please enter a valid data.");
        break;
      }
      let areaRectangle = base * height;
      console.log(
        "The rectangle area is: " + areaRectangle + " square units."
      );
      break;

    case 3:
      console.log(
        "Ok, for knowing the triangle area enter the length of the base and the height."
      );
      let baseTriangle = parseFloat(prompt("Enter the base: ")); 
      let heightTriangle = parseFloat(prompt("Enter the height: ")); 
      if (
        isNaN(baseTriangle) ||
        baseTriangle <= 0 ||
        isNaN(heightTriangle) ||
        heightTriangle <= 0
      ) {
        console.log("Please enter a valid data.");
        break;
      }
      let areaTriangle = (baseTriangle * heightTriangle) / 2;
      console.log("The triangle area is: " + areaTriangle + " square units."); 
      break;

    case 0:
      console.log("Thanks for using the Geometric calculator");
      break;
  }
}
