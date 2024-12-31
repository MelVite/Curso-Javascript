//Construir objetos con la forma Object constructor , este sirve para automatizar la creación de objetos

//Object literal
const producto09 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
}

//Object constructor 
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto10 = new Producto('Tablet', 5000);
console.log(producto10);

const producto11 = new Producto('Television', 8000);
console.log(producto11);