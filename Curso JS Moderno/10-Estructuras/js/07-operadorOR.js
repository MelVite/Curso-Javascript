//El operador OR || para que se cumpla al menos una condición

const efectivo2 = 300;
const credito2 = 400;
const disponible =efectivo2 + credito2;
const totalPagar2 = 600; 

if (efectivo2 > totalPagar2 || credito2 > totalPagar2 || disponible > totalPagar2) {
    console.log('Si se puede pagar');
} else {
    console.log('Fondos insuficientes');
}

/**
 * Este código es común en la validación de formularios para campos vacios
 */

