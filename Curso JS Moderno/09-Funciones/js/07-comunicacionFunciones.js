//¿Cómo se comunican las funciones?

iniciarApp();
function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
}


/**
 * Para que segundaFuncion aparezca despues de iniciarApp se haya ejecutado 
 * Se debe colocar segundaFuncion dentro de iniciarApp
 */
function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Kai');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}