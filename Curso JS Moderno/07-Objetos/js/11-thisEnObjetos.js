//this en objetos, this hace referencia a los valores dentro de un mismo objeto

const producto07 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInf: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto08 = {
    nombre: 'Tablet',
    precio: 3000,
    disponible: true,
    mostrarInf: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto07.mostrarInf();
producto08.mostrarInf();