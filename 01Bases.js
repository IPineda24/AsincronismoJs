
// funcion normal
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
};
console.log(saludar('Mundo')); // Imprime: ¡Hola, Mundo!


// Arrow functions
const saludo = (nombre) => {
    return `¡Hola, ${nombre}!`;
};
console.log(saludo('Mundo')); // Imprime: ¡Hola, Mundo!



// enviar funciones como parametros
const operation = (numro1, numero2, operar) => {
    return operar(numro1, numero2);
}
console.log(operation(10, 20, (x, y) => x + y)); // 30
console.log(operation(10, 20, (x, y) => x - y)); // -10
console.log(operation(10, 20, (x, y) => x * y)); // 200
console.log(operation(10, 20, (x, y) => x / y)); // 0.5


