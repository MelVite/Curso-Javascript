//Seleccionar elementos por su clase...

const header = document.getElementsByClassName('header');
//Las clases de colocan tal cual estan definidas 
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de una vez 
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);
//Puede traer multiples elementos 

//Si una clase no existe 
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);
//Retorna un arreglo vacío 