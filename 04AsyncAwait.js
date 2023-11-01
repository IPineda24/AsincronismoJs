//usando promesas 
const axios = require('axios');

axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        console.log('Datos de personajes obtenidos:');
        console.log(response.data.results);
    })
    .catch(error => {
        console.error('Ocurrió un error al obtener los datos:', error);
    });

/* En este ejemplo, Axios retorna una promesa, y utilizamos .then() y .catch() 
para manejar la promesa. .then() se ejecutará cuando la promesa se resuelva
exitosamente, y.catch() se ejecutará si se produce un error.
*/

//usando async await

const axios = require('axios');

async function obtenerPersonajes() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        console.log('Datos de personajes obtenidos:');
        console.log(response.data.results);
    }

    catch (error) {
        console.error('Ocurrió un error al obtener los datos:', error);
    }
}

obtenerPersonajes();


/*    En este ejemplo, hemos definido una función obtenerPersonajes como async.
   Dentro de esta función, utilizamos await para esperar a que la promesa de 
   Axios se resuelva.Esto hace que el código parezca más sincrónico y legible. */


/* 

Diferencias:

Sintaxis: La principal diferencia es la sintaxis.Con promesas, utilizas.then() y.catch() 
para manejar el flujo asincrónico, mientras que con async / await, puedes utilizar una 
estructura más similar a la programación sincrónica.

    Legibilidad: async / await tiende a hacer que el código sea más legible, especialmente 
    cuando tienes que encadenar múltiples solicitudes asincrónicas.Las promesas a menudo 
    conducen a una estructura de "then hell"(anidación de.then()), que puede ser más difícil 
    de seguir.

Manejo de errores: Ambos enfoques permiten manejar errores de manera efectiva, ya sea 
con.catch() en promesas o con un bloque try...catch en async / await.

En resumen, mientras que ambas promesas y async / await pueden utilizarse para consumir 
APIs y realizar tareas asincrónicas, async / await a menudo se prefiere por su mayor 
legibilidad y facilidad de uso, especialmente en escenarios más complejos donde varias 
tareas asincrónicas deben coordinarse.     */