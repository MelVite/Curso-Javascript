/**
 * Las ventajas de utilizar funciones flecha: 
 * 
 */

const aprendiendo = function(tecnologia, tecnología2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnología2}`);
}
aprendiendo('Javascript', 'Node.js');

const aprendiendo2 = (tecnologia, tecnología2) => `Aprendiendo ${tecnologia} y ${tecnología2}`

console.log(aprendiendo2('Java', 'MySQL'));

//Con un solo parametro el parentesis () es opcional en las funciones fechas, a partir de 2 parametros es obligatorio utilizarlo