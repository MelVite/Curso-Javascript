/**EVENTOS
 * los eventos son acciones o sucesos que ocurren en el navegador y que pueden ser detectados y gestionados por el código JS. 
 * Estos eventos pueden ser generados por el usuario o por el navegador mismo. 
 * Algunos ejemplos comunes de eventos son:
 *  - Acciones del ususario: como hacer clic en un botón, mover el ratón, escribir en un campo de texto, presionar una tecla, etc.
 *  - Eventos del navegador: como cargar una página web, cambiar el tamaño de la ventana, o terminar de cargar una imagen.
 * Cuando ocurre un evento, se puede asociar una función (también llamada controlador de eventos o event handler) para manejar esa acción y responder de manera adecuada.
 * 
 * Ejemplos de eventos comunes:
 *  - click: cuando se hace sobre un elemento
 *  - keydown: cuando se presiona una tecla.
 *  - mouseover: cuando el ratón pasa sobre un elemento.
 *  - load: cuando una página o una imagen ha terminado de cargar 
 *  - submit: cuando un formulario se envía.
 * 
 * Formas de manejar eventos: 
 * 1. Atributos HTML: Se puede añadir directamente el atributo de evento en el HTML, como en un <button>
 * 2. Métodos de JavaScript (on-event): Se puede asignar el evento usando JavaScript en el script
 * 3. addEventListener(): La forma más flexible y recomendada de manejar eventos en JavaScript. Permite añadir múltiples manejadores para un mismo evento sin sobrescribir los anteriores
 */
console.log(1);

document.addEventListener('DOMContentLoaded', () => {
    console.log(2);
}); 

/**DOMContentLoaded
 * es un evento en JS que se dispara cuando el DOM de una página web ha sido completamente cargado y parseado, sin esperar a que se carguen los recursos como imágenes, hojas de estilo o scripts externos. 
 * En otras palabras, el evento indica que la estructura básica de la página (los elementos HTML) ya está disponible para ser manipulada a través de JavaScript.
 */

console.log(3);

/**
 * Imprime:
 * 1
 * 3
 * 2
 * 
 * El 2 se imprime hasta que ya cargo todo el HTML de la página
 */