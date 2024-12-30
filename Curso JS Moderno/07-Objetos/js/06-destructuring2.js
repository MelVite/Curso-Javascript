const boyGroup = {
    nameGroup: 'Super Junior',
    activo: true,
    informacion : {
        empresa: 'SM',
        debut: 2005,
        integrantes : {
            lider: 'Leeteuk',
            vocal: 'Kyuhyun',
            dancer: 'Shindong'
        },
        canciones : {
            debut: 'Twins',
            hit: 'Sorry Sorry',
            subunidad: 'Super Junior D&E'
        }
    }
}

//Utilizando destructuring para entrar a canciones 
const { nameGroup, informacion: { canciones } } = boyGroup;

console.log(nameGroup);
console.log(canciones);

const { informacion: { canciones: { hit } } } = boyGroup;
console.log(hit);

//Nota: la variable informacion no existe ya que solo la estoy nombrando para ingresar a su contenido mas no la estoy definiendo como variable 
//console.log(informacion); //marca error