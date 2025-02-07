/**.createElement()
 * se utiliza para crear un nuevo elemento HTML de un tipo especificado. 
 * Este método pertenece al objeto document, y se usa principalmente para generar elementos dinámicamente en el DOM
 * Sintaxis: document.createElement(NombreEtiqueta);
 */

//Crear un nuevo enlace 
const enlace = document.createElement('A');
//Agregando texto
enlace.textContent = 'Nuevo Enlace'; 
//Añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

//Atributo personalizado
enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');


//Aún no se muestra el elemento creado en el sitio

//Para añadirlo se debe indicar dónde se va a mostrar, en este caso se quiere mostrar en navegación 
//Seleccionar la navegación 
const navegacion10 = document.querySelector('.navegacion');

//Agregamos el nuevo enlace como un hijo de navegación
/**appendChild
 * Es un método para agregar un nodo como ULTIMO hijo de un nodo padre en el DOM
 * Sintaxis: parentNode.appendChild(childNode);
 */
navegacion10.appendChild(enlace);


//Para agregarlo entre otros hijos con insertBefore

/**insertBefore
 * se usa para insertar un nodo antes de un nodo de referencia dentro de su nodo padre en el DOM.
 * insertBefore te permite insertar un nodo en una posición específica dentro de la lista de hijos de un nodo.
 * Sintaxis: parentNode.insertBefore(newNode, referenceNode);
 * - parentNode: El nodo que contiene el nodo donde deseas insertar el nuevo elemento.
 * - newNode: El nodo que deseas insertar en el DOM
 * - referenceNode: El nodo antes del cual deseas insertar el newNode. Si este valor es null, el newNode se agregará al final.
 */
console.log(navegacion10.children); //Visualizar los hijos de navegacion 
navegacion10.insertBefore(enlace, navegacion10.children[1]);

console.log(enlace);


//CREAR UN CARD DE FORMA DINAMICA (consumir API)
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'The Dream Show';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$2,500 por persona';
parrafo3.classList.add('precio');

//Cada parrafo esta dentro de un div llamado info, crear div con clase info:
const info = document.createElement('div');
info.classList.add('info');
//Agregar los 3 parrafos
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
//CRear imagen 
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';

img.classList.add('img-fluid');

img.alt = 'Texto alternativo';

//Hace falta el div padre card 
//Crear card
const card10 = document.createElement('div');
card10.classList.add('card');

//Agregar imagen
card10.appendChild(img);
//Agregar div info
card10.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card10);
//Con insertBefore:
contenedor.insertBefore(card10, contenedor.children[0]);


console.log(card10);
