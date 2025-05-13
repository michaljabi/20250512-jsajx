// Java vs JavaScript (podobieństwa)

// 1. privitives by value 

// 2. objects by references

// 3. Niektóre typy proste mają konstuktory obiektowe


console.log(Number);
console.log(String);
console.log(Boolean);

console.log(new String('Hello'))
console.log('Hello')
console.log('Hello'.length)
console.log('Hello'.charCodeAt(0))
console.log('Hello'.slice(-2))

console.log(BigInt);


console.log(String.fromCharCode(65))
console.log(String.fromCharCode(66))

console.log(Number.prototype);
console.log(Boolean.prototype);

console.log(Number.isNaN(NaN));

console.log(Number.isNaN(0));
console.log(Number.isNaN(''));