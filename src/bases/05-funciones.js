//funciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

// const getUser = () => {
//     return{
//         uid:'ABC123',
//         username: 'El_papi231'
//     }
// }
const getUser = () =>
({
    uid: 'ABC123',
    username: 'El_papi231'
});

const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una función de Flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas 

// function getUsuarioActivo(nombre) {
//     return{
//         uid: 'ABC222343',
//         username: nombre
//     }
// };
const getUsuarioActivo = (nombre) =>({
    uid: 'ABC222343',
    username: nombre
});


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
