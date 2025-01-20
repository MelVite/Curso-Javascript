/**BREAK
 * Corta la continuación de un For Loop
 * 
 * CONTINUE 
 * Permite interceptar un elemento, identificarlo y continuar con la ejecución
 */

//Crea un For Loop que al detectar el número 5 detenga su ejecució
for( let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log('Este es el 5');
        break;
    }
    console.log(`Número ${i}`);
    
}

//Quiero que en el 5 diga CINCO 
for( let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log('CINCO');
        continue; //retoma la ejecución 
    }
    console.log(`Número ${i}`);
    
}

const carrito02 = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//EJERCICIO: Decirle al usuario que uno de los productos tiene descuento:
for( let i = 0; i < carrito02.length; i++) {
    if(carrito02[i].descuento) {
        console.log(`${carrito02[i].nombre} tiene DESCUENTO!`)
        continue;
    }
    console.log(carrito02[i].nombre);
}

//Resolución profe:
for( let i = 0; i < carrito02.length; i++) {
    if(carrito02[i].descuento) {
        console.log(`El articulo ${carrito02[i].nombre} Tiene descuento!`)
        continue;
    }
    console.log(carrito02[i].nombre);
}
