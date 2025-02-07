//Para este ejemplo estaremos utilizando código de eventos 
const btnFlotante = document.querySelector(' .btn-flotante');
const footer = document.querySelector('.footer');

//Los eventos esperan a que suceda algo en la pantalla para que puedan ser ejecutados
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    /**Varificar si un elemento contiene una clase con contains
     * 
     */
    if(footer.classList.contains('activo')) {
            footer.classList.remove('activo');
            this.classList.remove('activo');
            this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    console.log(footer.classList);
}
