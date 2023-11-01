const doAsyncStuff = (number1, number2) => {
    const result = number1 / number2;
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (number2 !== 0) {
                resolve(result);
            } else {
                reject('Error');
            }
        }, 5000);
    });
};

doAsyncStuff(10, 2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });