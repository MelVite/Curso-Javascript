/** .reduce()
 * se utiliza para reducir un array a un solo valor
 * aplica 
 * una función acumuladora a cada elemento del array.
 * Esta función toma dos argumentos principales:
 *  1. un acumulador (que guarda el valor acumulado a lo largo de las iteraciones)
 *  2. el valor actual (el elemento del array que se está procesando en ese momento).
 */
const meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito3 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con forEach
let total = 0;
carrito3.forEach( producto => total += producto.precio );

console.log(`Total a pagar: ${total}`);

//SSCon un Reduce:
let resultado3 = carrito3.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado3);

/**Descripción del reduce:
 * total --> es el valor acumulado
 * producto --> elemento actual del array que se esta procesando
 * =>  Arrow function
 * total --> el acumulado
 * + --> solo lleva un + ya que se maneja un acumulado 
 * producto.precio --> precio del producto actual
 * 0 --> inicializa en 0
 */