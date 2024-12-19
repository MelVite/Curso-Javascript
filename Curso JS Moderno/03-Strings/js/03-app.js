//Concatenación
const grupo = 'ATEEZ';
const integrante = 'Mingi';

console.log(grupo.concat(' ' + integrante));
console.log(grupo.concat(' Yunho'));

console.log('El grupo ' + grupo + ' tiene un integrante llamado ' + integrante);

//templeate string, es más recomendable utilizar esta ya que al tener multiples variables puede ser complicado utilizar +
console.log(`El grupo ${grupo} tiene un integrante llamado ${integrante}`);

//Otra forma de concatenación
console.log('El grupo ' , grupo , ' tiene un integrante llamado ' , integrante);

