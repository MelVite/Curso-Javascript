//for... in Itera sobre objetos
const pendientes08 = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for( let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}