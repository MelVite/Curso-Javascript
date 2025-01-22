//While se ejecuta mientras una condición sea verdadera 
/**Consta de 3 partes
 * 
 */

let i = 0;

while(i < 10) { //Condición

    console.log(`Número ${i}`);

    i++; //Incremento

}

/**Primero se evalua la condición
 * Se realiza el procedimiento
 * Finalmente se realiza el incremento y sale 
 */

//Ejercicio pares y nones con While:

while(i < 20) {
    if(i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    }else {
        console.log(`El número ${i} es INPAR`);
    }

    i++;
}

