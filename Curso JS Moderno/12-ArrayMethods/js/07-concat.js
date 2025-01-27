const meses7 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses02 = ['Agosto', 'Septiembre'];
const meses03 = ['Octubre', 'Noviembre', 'Diciembre'];

//.concat permite unir dos arreglos 
const resultado7 = meses7.concat(meses02, meses03, 'Otro mes');
//Concatena otro mes

console.log(resultado7);

// spread operator
const resultado72 = [...meses7, ...meses02, meses03, 'Otro mes'];

console.log(resultado72);

//En ambos el modo en que se declaran los elementos se respeta 