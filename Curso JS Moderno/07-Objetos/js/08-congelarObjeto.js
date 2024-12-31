//Congelar objetos en JS para que no se puedan modificar sus parametros
//Para realizar lo anterior se debe habilitar el modo estricto 

"use strict";
//Este modo hace que JS no permita malas prácticas al momento de realizar el código
//Al habilitarlo tenemos acceso a ciertos métodos para los objetos

const producto04 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
}

//Para prevenir que un objetos sea modificado de utiliza Object.freeze(), este método no permite modificar y agregar propiedades
Object.freeze( producto04 );

//producto04.disponible = false;
//producto04.imagen = 'imagen.jpg';
//delete producto04.precio;
//freeze no deja realizar ninguno de los métodos anteriores

console.log(producto04);

//Existen métodos para saber si un objeto esta congelado
console.log(Object.isFrozen(producto04)); //arroja true o false
