
// https://justjoin.it/blog/event-loop-a-kolejnosc-wykonywania-kodu-javascript

// task 2
setTimeout(() => {
    console.log('1st')
})

// task 3 (to będzie zawsze ostatnie bo czas wynosi > 0)
setTimeout(() => {
    console.log('1st')
}, 10)

// task 1
process.nextTick(() => {
    console.log('next tick')
})

// sync 1
console.log('2nd')
 
// microtask 1
queueMicrotask(() => {
    console.log('3rd')
})
// microtask 2
queueMicrotask(() => {
    console.log('4th')
})
// microtask 3
Promise.resolve('').then(() => {
    console.log('2nd promise')
})

// sync 2
console.log('last')
