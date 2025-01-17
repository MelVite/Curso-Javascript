//Comparador estricto ===
const puntaje2 = 1000;

/*if(puntaje2 != 1000) { 
    console.log('El puntaje es diferente');
}*/

if(puntaje2 === '1000') { //Entre parentesis se pone la condicion que se debe cumplir
    console.log('El puntaje es igual');//entre {} se coloca lo que debe pasar si se cumple la condición
} else {
    console.log('no es igual :(')
}

/**
 * === el operador estricto compara en valor y tipo de dato
 * !== también compara el valor y tipo de dato
 * == solo compara el valor 
 */