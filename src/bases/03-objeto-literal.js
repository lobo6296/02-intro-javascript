const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 45646546,
        lat: 14.1546,
        lng: 43.234324
    }
};

const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);