//Buenas prácticas al trabajar con if

const autenticado = true; 

if(autenticado == true) {
    console.log('El ususario esta autenticado');
}

/**Lo anterior esta bien, sin embargo,
 * al darle a la variable el valor de true es redundante ponerle la igualdad en la condición del if
 * Se recomienda hacerlo de la siguiente manera:
 */
if(autenticado) {
    console.log('El ususario esta autenticado');
}

//-----------------
const puntaje08 = 500;

if(puntaje08 > 400) {
    console.log('Excelente!!');
} else if (puntaje08 > 300) {
    console.log('Buen puntaje... felicidades');
}

//Como buena práctica se recomienda colocar return junto a una función 

function revisarPuntaje() {
    if(puntaje08 > 400) {
        console.log('Excelente!!');
        return;
    }

    if (puntaje08 > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }

    /**Tenemos dos if, si el primero se cumple el return hace que se salga de la función
     * En caso de que no se cumpla pasa al segundo if
     */
}

revisarPuntaje();