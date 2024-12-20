//Método para remplazar texto de una cadena 
const song = "I don't know you";

console.log(song);
console.log(song.replace('I', 'They').replace('you', 'about us'));

//Cortar una cadena de texto, 
console.log(song.slice(2,7)); //se marca el primer indice donde inicia el corte y el segundo hasta donde llega 
console.log(song.slice(8)); //en el caso de solo poner un indice lo toma como el inicial y muestra el resto de la cadena 
//Si le pasas primero un indice mayor al segundo slice no hace nada 

//ALternativa a slice es substring
console.log(song.substring(0,6));
//substring al pasarle un indice mayor al principio realiza un reacomodo.
console.log(song.substring(3,8));