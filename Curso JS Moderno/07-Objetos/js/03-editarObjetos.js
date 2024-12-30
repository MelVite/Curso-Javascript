const articulo01 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Agregar una propiedad fuera de la declaración del objeto
articulo01.imagen = 'imagen.jpg';


//Eliminar propiedad del objeto 
delete articulo01.disponible;

console.log(articulo01);