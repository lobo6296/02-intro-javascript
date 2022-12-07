// Desestructuracion
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { nombre } = persona;
//const { nombre:nombre2 } = persona;
//const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
//console.log(nombre2);
//console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const retornaPersona = (usuario) => {
//     //console.log(usuario);
//     const { nombre, edad, clave } = usuario;
//     console.log(edad, clave, nombre)
// }

const retornaPersona = ({ nombre, edad, clave, rango = 'Capitán' }) => {
    
    //console.log(edad, clave, nombre, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1235,
            lng: -12.4234
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat,lng);


