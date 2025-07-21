   const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ];  

console.log("--- 1 RECORRER Y MOSTRAR PRODUCTOS (forEach) ---");
// Mostrar nombre y precio de cada producto
productos.forEach(producto => {
   console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n---- 2️ CREAR ARRAY DE NOMBRES Y VERIFICAR DISPONIBILIDAD (map + includes) ----");
// Parte 1: Crear array solo con nombres usando map
const productosDisponibles = productos.map(producto => producto.nombre);
console.log("Productos disponibles:", productosDisponibles);

// Parte 2: Verificar si un producto está disponible usando includes
const productoBuscado = "Laptop";
const estaDisponible = productosDisponibles.includes(productoBuscado);
console.log(`¿${productoBuscado} está disponible? ${estaDisponible ? "Sí" : "No"}`);

// Probar con un producto que no existe
const productoNoExiste = "Smartphone";
const noEstaDisponible = productosDisponibles.includes(productoNoExiste);
console.log(`¿${productoNoExiste} está disponible? ${noEstaDisponible ? "Sí" : "No"}`);

console.log("\n--- 3️ APLICAR DESCUENTO A LOS PRODUCTOS (map) ---");
// Aplicar 10% de descuento (multiplicar por 0.9)
const productosConDescuento = productos.map(producto => {
    return {
        ...producto,
        precio: Math.round(producto.precio * 0.9) // Redondeamos para evitar decimales largos
    };
});
console.log("Productos con 10% de descuento:");
productosConDescuento.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n--- 4 FILTRAR PRODUCTOS POR PRECIO (filter) ----");
// Productos cuyo precio sea menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos menores a $100:");
productosBaratos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n---- 5️ OBTENER LOS PRIMEROS PRODUCTOS (slice) ----");
// Mostrar los primeros 2 productos
const primerosDosProductos = productos.slice(0, 2);
console.log("Primeros 2 productos:");
primerosDosProductos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n--- 6️ ORDENAR PRODUCTOS POR PRECIO (sort) ---");
// Crear una copia para no modificar el array original
const productosOrdenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados de menor a mayor precio:");
productosOrdenadosPorPrecio.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("\n--- 7️ INVERTIR EL ORDEN DE LOS PRODUCTOS (reverse) ----");
// Crear una copia y luego invertir
const productosInvertidos = [...productos].reverse();
console.log("Productos en orden inverso:");
productosInvertidos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});


 