/**¿Qué es el DOM?
 * Document Object Model
 * es una representación en forma de árbol de todos los elementos de un documento HTML o XML que se puede manipular con JavaScript.
 * Es básicamente una interfaz de programación que permite interactuar con la estructura de una página web.
 * El DOM es la "capa" entre tu código HTML y el código JavaScript que permite manipular la estructura de la página web.
 */

//Acceder a elementos del HTML con document 
let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;


console.log(elemento);

/**HTMLCollection
 * Es una colección de elementos del DOM que se devuelve cuando se utilizan ciertos métodos de acceso a elementos
 * como getElementsByTagName, getElementsByClassName, y getElementsByName. 
 * Es una lista "en vivo" de nodos que representan elementos en un documento HTML.
 */