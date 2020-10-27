const fs = require('fs');
const colors = require('colors');

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            //console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
                //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });

    });

}


let listarTabla = (base, limite) => {

    console.log(`========================`.green);
    console.log(`tabla de ${base}`.grey);
    console.log(`========================`.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}\n`);

    }

}


module.exports = {
    crearArchivo,
    listarTabla
}