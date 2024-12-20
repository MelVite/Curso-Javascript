//Métodos para eliminar el espacio blanco al inicio 
const artista = '      EXO      ';

console.log(artista);
console.log(artista.length);

//Eliminar del inicio con trimStart
console.log(artista.trimStart());

//Eliminar del final con trimEnd
console.log(artista.trimEnd());

//En JS se pueden usar los métodos de forma encadenada (colocar un método y después otro)
console.log(artista.trimStart().trimEnd());
//Se eliminan los espacios vacios del principio y del final 

console.log(artista.trim()); //Elimina en ambas direcciones