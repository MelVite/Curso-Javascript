/**EVENTOS SOBRE LOS INPUTS Tiene que ver con el TECLADO
 * Eventos comunes: 
 *  1. focus: Se dispara cuando el campo de entrada recibe el foco, es decir, cuando el usuario hace clic en el campo o navega hasta él utilizando el teclado.
 *  2. blur: Se dispara cuando el campo de entrada pierde el foco, es decir, cuando el usuario hace clic fuera del campo o navega fuera de él con el teclado.
 *  3. input: Se dispara cada vez que el valor del campo de entrada cambia, ya sea por la escritura del usuario o mediante JavaScript. Este evento es útil para capturar cambios en tiempo real.
 *  4. change: Se dispara cuando el valor del campo de entrada cambia y el campo pierde el foco (en algunos casos, como los campos de texto, también puede dispararse cuando se presiona Enter). Para los campos de selección, como <select> o <input type="radio">, se dispara inmediatamente cuando cambia el valor.
 *  5. keydown: Se dispara cuando una tecla es presionada mientras el campo de entrada está enfocado.
 *  6. keyup: Se dispara cuando una tecla es liberada después de ser presionada mientras el campo de entrada está enfocado.
 *  7. keypress: Se dispara cuando una tecla que genera un valor de carácter (por ejemplo, letras y números) es presionada. Nota: Este evento está en desuso en muchos navegadores modernos, y keydown o keyup son preferibles.
 *  8. select: Se dispara cuando el usuario selecciona texto dentro del campo de entrada, aplicable solo a los campos de tipo text, textarea, y similares.
 *  9. invalid: Se dispara cuando el valor del campo de entrada no pasa la validación del formulario. Este evento puede usarse para personalizar el manejo de errores de validación.
 *  10. reset (para formularios): Se dispara cuando el formulario es restablecido (es decir, cuando se hace clic en el botón de "reset" de un formulario, si está presente).
 *  11. submit (para formularios): Se dispara cuando el formulario es enviado, lo que puede ser a través de un botón de tipo submit o mediante JavaScript.
 */

const busqueda = document.querySelector('.busqueda');

//Registrar un evento keydown --> Ocurre cuando presiona una tecla
busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...')
})

//Registrar un evento keyup --> Ocurre cuando presiona una tecla
busqueda.addEventListener('keyup', () => {
    console.log('Dejo de escribir')
})

//Registrar un evento blur --> Ocurre cuando el input pierde el foco 
busqueda.addEventListener('blur', () => {
    console.log('Dejaste de escribir en el input')
})

//Registrar un evento blur --> Ocurre cuando el input pierde el foco 
busqueda.addEventListener('blur', () => {
    console.log('Dejaste de escribir en el input')
})

//Registrar un evento copy --> Ocurre cuando se copia el texto del input
busqueda.addEventListener('copy', () => {
    console.log('El texto ha sido copiado')
})

//Registrar un evento paste --> Ocurre cuando se pega texto en el input
busqueda.addEventListener('paste', () => {
    console.log('Ha pegado texto')
})

//Registrar un evento cut --> Ocurre cuando se corta texto en el input ctrl + x
busqueda.addEventListener('cut', () => {
    console.log('Ha cortado el texto')
})

//Registrar un evento input --> Ocurre cuando el valor del input cambia
busqueda.addEventListener('input', () => {
    console.log('Ha cambiado el valor dentro del input')
})