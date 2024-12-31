//unir dos objetos 

const producto06 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto06);
console.log(medidas);

//Una forma de unirlos es con assign 
const resultado = Object.assign(producto06, medidas);
console.log(resultado);

//Otra forma es con Spread Operator o Rest Operator
const resultado2 = { ...producto06, ...medidas }
//Los tres puntos ... significa copia y se asigna dentro del objeto {}
console.log(resultado2);