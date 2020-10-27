//requireds

//libreria propia de node
//const fs = require('fs');

//paquetes no nativos de node
//const fs = require('express');

//archivos creados localmente
//const fs = require('./fs');

//extrae argv desde el otro archivo
const argv = require('./config/yargs.js').argv;
//const colors = require('colors');
const colors = require('colors/safe');


// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo txt con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

//Para importar funciones
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
}

// let parametro = argv[2];

//let base = 'asv';
// let base = parametro.split('=')[1];
// console.log(base)

// let data = '';

// for (let i = 1; i <= 10; i++) {

//     //console.log(`${base} * ${i} = ${base * i}`);
//     data += `${base} * ${i} = ${base * i}\n`;

// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });

//Objeto global
//console.log(module)