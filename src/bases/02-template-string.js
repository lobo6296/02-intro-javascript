
const nombre = 'Jose';
const apellido = 'Zamora';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${ nombre } ${ apellido} `;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'hola' + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombre)} `);