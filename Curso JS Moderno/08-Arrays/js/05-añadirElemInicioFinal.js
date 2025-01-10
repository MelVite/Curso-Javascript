const colors = [ 'Blanco', 'Azul', 'Rojo'];
console.table(colors);

//Agregar un nuevo elemento al final del arreglo con PUSH
colors.push('Rosa');
colors.push('Morado');
console.table(colors);

//Ahora con un carrito 
const carrito1 = []; //Carrito vacío
//Lis arreglos pueden contener objetos
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}


//Agregar el producto al carrito
carrito1.push(producto);
carrito1.push(producto2);

console.log(carrito1);
console.table(carrito1);

//Para agregar al principio del arreglo con UNSHIFT
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito1.unshift(producto3);

console.table(carrito1)