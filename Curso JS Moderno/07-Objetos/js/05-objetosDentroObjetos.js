const grupo = {
    nombre: 'ATEEZ',
    activo: true,
    informacion : {
        empresa: 'KQ',
        debut: 2018,
        integrantes : {
            lider: 'Hoongong',
            vocal: 'Jongho',
            dancer: 'Yunho'
        },
        canciones : {
            debut: 'Pirata king',
            hit: 'Work',
            solo: 'Everything'
        }
    }
}

console.log(grupo);
console.log(grupo.informacion);
console.log(grupo.informacion.integrantes.dancer);
console.log(grupo.informacion.canciones.hit);