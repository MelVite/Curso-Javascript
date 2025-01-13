//Crear un nuevo elemento con spreand operator 
const cart = [];

//Definir un producto
const product = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 400
}

const product2 = {
    nombre: 'Celular',
    precio: 800
}

const product3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;

//Esta es una forma declarativa
resultado = [...cart, product];

resultado = [...cart, product2];

//colocar el producto al inicio del arreglo
resultado = [product3, ...resultado];

console.table(resultado);
//cart no tiene modificaciones al utilizar una funcion declarativa
console.table(cart);

/*FUNCIONES DECLARATIVAS 
Son aquellas que se definen mediante una declaración explícita de una función.
Su objetivo es que la función sea auto-descriptiva 
La función se declara utilizando la palabra clave function seguida de su nombre.
Expresa la lógica sin describir tanto el flujo de control


* FUNCIONES IMPERATIVAS 
Están más relacionadas con los detalles de cómo hacer algo
Se enfocan en describir los pasos específicos que el programa debe seguir para lograr un resultado.
Describe cómo se deben manipular los valores o cómo debe ejecutarse el flujo 
Suele utilizarse más cuando quiere controlar el flujo de ejecución paso a paso.
Se modifica la variable original, sobre ella misma se hacer las modificaciones pertinentes.
 * 
 */