//Parametros por default
function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}!`);
}

saludar('Melanio');

saludar('Melanio', 'Vite');

saludar();

//Los parametros por default ayudan a inicializar las funciones que aún no tienen un valor asignado y no marquen error.