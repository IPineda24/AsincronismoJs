fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos de personajes obtenidos:');
        console.log(data.results);
    })
    .catch(error => {
        console.error('Ocurrió un error al obtener los datos:', error);
    });


async function obtenerPersonajes() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta de la API');
        }
        const data = await response.json();

        console.log('Datos de personajes obtenidos:');
        console.log(data.results);
    } catch (error) {
        console.error('Ocurrió un error al obtener los datos:', error);
    }
}

obtenerPersonajes();
