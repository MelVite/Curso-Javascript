/** Submit en formularios 
 * El evento submit en JS se activa cuando un formulario HTML es enviado. 
 * Este evento se dispara cuando el usuario hace clic en el botón de envío (usualmente un botón <button> o <input type="submit">) o cuando se envía el formulario de alguna otra manera (por ejemplo, presionando la tecla "Enter" dentro de un campo del formulario).
 * 
 * Cuando ocurre un evento submit, se realiza una validación del formulario antes de enviarlo (si se ha definido alguna validación en el formulario o con JavaScript) y, si es válido, los datos del formulario se envían al servidor, lo que generalmente recarga la página o redirige a otra URL.
 * COSAS IMPORTANTES QUE PUEDES HACER CON SUBMIT:
 *  1. Evitar el envío predeterminado: Usando event.preventDefault() puedes evitar que el formulario se envíe automáticamente y manejar el envío por medio de JavaScript (por ejemplo, enviarlo mediante AJAX).
 *  2. Validación del formulario: Puedes realizar la validación de los campos antes de permitir que el formulario se envíe.
 *  3. Manipular el comportamiento del formulario: Puedes interceptar el evento submit para realizar alguna acción antes de que los datos sean enviados al servidor.
 */

const formulario = document.querySelector('#formulario');


//Con función anonima
formulario.addEventListener('submit', (evt) => {
    evt.preventDefault(); //Detener la acción predeterminada del elemento

    console.log(evt);

    console.log(evt.target.method); //El método que utiliza el elemento 

    console.log(evt.target.action); //Acción que hará el formulario 
})

/** preventDefault()
 * es un método en JavaScript que se usa para evitar que se ejecute la acción por defecto asociada a un evento. 
 * Cada tipo de evento en HTML tiene un comportamiento predeterminado, y cuando usas event.preventDefault(), lo que haces es impedir que ese comportamiento se lleve a cabo.
 * Por ejemplo, si haces clic en un enlace (<a>), el comportamiento predeterminado es que el navegador te redirija a la URL que está en el atributo href. Si usas event.preventDefault() en ese evento, esa redirección no ocurrirá.
 * 
 */

//Con declaración de función 

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault(); //Detener la acción predeterminada del elemento

    console.log('Consultar una API');

    console.log(e.target.action); //Acción que hará el formulario 
}