/**EVENTOS CON EL MOUSE
 * El mouse puede disparar varios eventos que se pueden manejar para crear interacciones dinámicas.
 * Eventos comunes:
 *  1. click: Se dispara cuando el usuario hace clic en un elemento con el botón principal del mouse (generalmente el izquierdo).
 *  2. dblclick: Se dispara cuando el usuario hace doble clic en un elemento.
 *  3. mousedown: Se dispara cuando el usuario presiona cualquier botón del mouse sobre un elemento.
 *  4. mouseup: Se dispara cuando el usuario suelta el botón del mouse.
 *  5. mousemove: Se dispara continuamente mientras el usuario mueve el mouse sobre un elemento o dentro de la ventana del navegador.
 *  6. mouseover: Se dispara cuando el puntero del mouse entra en el área de un elemento.
 *  7. mouseout: Se dispara cuando el puntero del mouse sale del área de un elemento.
 *  8. mouseenter: Similar a mouseover, pero no se dispara si el mouse entra en un elemento hijo de un elemento que ya tiene un mouseenter (a diferencia de mouseover, que se dispara para el elemento y sus hijos).
 *  9. mouseleave: Similar a mouseout, pero no se dispara cuando el mouse sale de un elemento hijo, solo del elemento en cuestión.
 *  10. contextmenu: Se dispara cuando el usuario hace clic con el botón derecho del mouse sobre un elemento, abriendo el menú contextual del navegador.
 *  - wheel: Se dispara cuando el usuario usa la rueda del mouse.
 */

const nav = document.querySelector('.navegacion');

//Registrar un evento click
nav.addEventListener('click', () => {
    console.log('click en nav');
})

//Registrar un evento mouseenter
nav.addEventListener('mouseenter', () => {
    console.log('El puntero esta sobre nav');

    nav.style.backgroundColor = 'white';
})

//Registrar un evento mouseout 
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');

    nav.style.backgroundColor = 'transparent';
})

//Registrar un evento mousedown
nav.addEventListener('mousedown', () => {
    console.log('El puntero hizo cualquier click en nav');
})

//Registrar un evento mouseup
nav.addEventListener('mouseup', () => {
    console.log('El puntero hizo cualquier click y se solto en nav');
})

//Registrar un evento dblclick
nav.addEventListener('dblclick', () => {
    console.log('Hiciste doble click sobre nav');
})