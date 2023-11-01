//sin callback
const test = (numro1, numero2) => {
    setTimeout(() => {
        return numro1 / numero2;
    }, 5000);
}
console.log(test(10, 2));// 30
console.log('Holaaassda'); // Hola


//callback
const op = (numro1, numero2, callback) => {
    setTimeout(() => {
        return callback(numro1, numero2);
    }, 5000);
}

op(10, 2, (x, y) => {
    console.log(x / y);
}); // 30
console.log('Hola'); // Hola