
// PROVIDER
function makeTheCall(number = '') {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number === '1238') {
                // resolve
                // "HELLO"
                resolve("HELLO")
            } else {
                // reject
                // Error -> unknown number...
                reject(new Error('unknown number...'))
            }
        }, 2000)
    })
}


// CONSUMER 1
makeTheCall('1238').then((value) => {
    console.log(value)
})


// CONSUMER 2
makeTheCall().catch((error) => {
    console.log(error.message)
})


// CONSUMER 3
makeTheCall()
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error.message)
    })
