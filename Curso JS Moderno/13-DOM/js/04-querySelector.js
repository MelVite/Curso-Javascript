/**Query Selector 
 * querySelector es un método en JavaScript que permite seleccionar el primer elemento que coincida con un selector CSS dentro del DOM
 * Este método es muy útil para manipular o interactuar con elementos específicos en una página, como agregar eventos, cambiar estilos o modificar contenido.
 * Sintaxis: document.querySelector(selector);
 * selector: Es un string que contiene el selector CSS del elemento que deseas seleccionar. Puede ser cualquier selector válido de CSS, como una clase (.mi-clase), un ID (#mi-id), un tipo de etiqueta (div), o combinaciones de estos.
 * Características:
 *  Solo devuelve el PRIMER ELEMENTO que coincide con el selector.
 * Si no encuentra ningún elemento que coincida, devuelve null.
 * Es muy útil porque puedes usar los mismos selectores que utilizarías en CSS, lo que facilita la selección y manipulación de elementos en el DOM.
 * Permite seleccionar clases
 */

//Seleccionar una clase
const card = document.querySelector('.card');
console.log(card);

//Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info'); //info es hijo de premium 
console.log(info);

//Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

/**Pseudo-clase :nth-child() en CSS
 * Se utiliza para seleccionar elementos basados en su posición dentro de un contenedor.
 * Este selector permite aplicar estilos a un elemento que es el n-ésimo hijo de su elemento padre.
 * Es una forma muy potente y flexible de apuntar a elementos específicos sin necesidad de clases o IDs.
 * Sintaxis: selector:nth-child(argumento) {
        estilos
    }
 * Argumentos:
    1. Un número específico: Selecciona el hijo en posición exacta.
    2. Palabra clave odd: Selecciona los elementos en posiciones impares
    3. Palabra clave even: Selecciona los elementos en posiciones pares.
    4. Expresión matemática an + b: Se puede usar para seleccionar los elementos de acuerdo a un patrón de posiciones:
        a es el número de pasos
        n es el contador de los hijos 
        b es un número base

 * El contador en :nth-child() comienza desde 1, no desde 0. Esto significa que el primer hijo de un contenedor es el hijo número 1
 */

//querySelector permite seleccionar ID
const formulario4 = document.querySelector('#formulario');
console.log(formulario4);

//Selecionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);

//querySelector retorna por maximo un 