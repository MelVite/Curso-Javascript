//El operador ternario 

const auntetificado = true;
const puedePagar2 = true;

console.log( auntetificado ? 'Si esta autenticado' : 'No esta autenticado');

/**Operador ternario ? : 
 * primero se coloca el parámetro
 * ? se trata de if
 * : se trata de else
 * Todo se hace en una misma línea de código
 */

//Para revisar dos condiciones en un ternario:
console.log( auntetificado && puedePagar2 ? 'Si puede pagar' : 'No puede pagar');

//-----------------------
const efectivo3 = 300;
const credito3 = 400;
const disponible3 = efectivo3 + credito3;
const totalPagar3 = 600;

//If anidado
if( efectivo3 > totalPagar3 || credito3 > totalPagar3 || disponible3 > totalPagar3) {
    if( efectivo3 > totalPagar3) {
        console.log('Pagaste con efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos insuficientes');
}

//If anidado dentro de un ternario
console.log( auntetificado ? puedePagar2 ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No esta autenticado');
//Es poco común utilizar ternarios anidados