//requireds

//libreria propia de node
const fs = require('fs');
let data = '';

//paquetes no nativos de node
//const fs = require('express');

//archivos creados localmente
//const fs = require('./fs');

for (let j = 2; j <= 10; j++) {
    let data = '';

    let base = j;

    for (let i = 1; i <= 10; i++) {

        //console.log(`${base} * ${i} = ${base * i}`);
        data += `${base} * ${i} = ${base * i}\n`;

    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

        if (err) throw err;

        console.log(`El archivo tabla-${base}.txt ha sido creado`);
    });

}

// let base = 4;

// for (let i = 1; i <= 10; i++) {

//     //console.log(`${base} * ${i} = ${base * i}`);
//     data += `${base} * ${i} = ${base * i}\n`;

// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });