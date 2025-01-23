//for... in Itera sobre objetos
const pendientes08 = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

//Para obtener las llaves
for( let propiedad in automovil) {
    console.log(propiedad);
}

//Para obtener los valores del objeto:
for( let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

//Iterador de objetos más sencillo
for( let [llave, valor] of Object.entries(automovil) ) {
    console.log(valor);
    console.log(llave);
}