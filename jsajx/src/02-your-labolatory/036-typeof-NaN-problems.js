console.log(typeof 0)
console.log(typeof '')
console.log(typeof false)
console.log(typeof (() => { }))

console.log(typeof {})
console.log(typeof new Object())
console.log(typeof new Date())
console.log(typeof [])


console.log(typeof null);

const value = null;

console.log(value === null);


// 2 rzecz nie do pogodzenia:
console.log(NaN === NaN);

// kontra to: (mogło by tak być :( )
console.log(Infinity === Infinity);
console.log(1000 / 0);

// więc radzimy sobie tak:
console.log(Number.isNaN(NaN))

console.log(Number('2ddwdq'))
console.log(784 / '2ddwdq')