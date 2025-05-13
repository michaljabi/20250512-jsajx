function giveMeNumber() {
    return 10;
}

console.log(giveMeNumber())

async function giveMeNumberAsync() {
    // throw new Error('OH no...');
    return 10;
}

function giveMeNumber3() {
    return Promise.resolve(10);
}

// 1 sposób
giveMeNumberAsync().then(v => {
    console.log(v)
}).catch(e => {
    console.log(e.message)
})

;(async () => {
    try {
        const myValue = await giveMeNumberAsync();
        console.log(myValue)
    } catch (e) {
        console.log(e.message);
    }
})();


// 2 sposób
// try {
//     const myValue = await giveMeNumberAsync();
//     console.log(myValue)
// } catch (e) {
//     console.log(e.message);
// }


/// ---------------------

