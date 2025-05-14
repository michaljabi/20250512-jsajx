// import './../j4b1-assert.js'


function add(a, b) {

    // Chcemy puścić jakiś "side effect" 
    queueMicrotask(() => {
        console.log('Fire after count a + b')
    })

    return a + b;
}

console.log(add(10, 20));