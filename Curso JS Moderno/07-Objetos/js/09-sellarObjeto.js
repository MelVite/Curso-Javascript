//Para sellar un objeto se debe utilizar el modo estricto de JS 
"use strict"

const producto05 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
}

//Método para sellar objetos:
Object.seal(producto05);

//Seal no permite que se agreguen o eliminen propiedades pero si permite modificar las existentes
producto05.disponible = false;
console.log(producto05);

//producto05.imagen = 'imagen.jpg'; //Marca error 
//delete producto05.precio; //marca error

//Pasa saber si un objeto esta sellado
console.log(Object.isSealed(producto05)); //arroja true o false