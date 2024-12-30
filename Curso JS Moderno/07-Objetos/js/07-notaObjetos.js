const producto03 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
}

//Los objetos pueden ser reasignados los valores de sus llaves aun con const, esto ocurre porque al tener un objeto aun declarado como const sus propiedades pueden ser modificadas

producto03.disponible = false;

delete producto03.precio;

console.log(producto03);