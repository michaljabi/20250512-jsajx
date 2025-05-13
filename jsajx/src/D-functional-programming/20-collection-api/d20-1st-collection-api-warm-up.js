import { assertThat } from '../../j4b1-assert.js'
/**
 * d20-collection-api
 * Warm up
 *
 *
 * * Reguły:
 * - Nie możesz usuwać istniejącego kodu
 * - Możesz dopisywać kod po prawej stronie przyrównania do `distinctNumbers`
 * - Nie możesz zmieniać wartości w `numbers`
 */

const numbers = [10, 20, 30, 2, 2, 2, 30, 20, 2, 10, 8, 9, 0];
// const distinctNumbers = Array.from(new Set(numbers))
const distinctNumbers = [...new Set(numbers)];

for(const a of 'string') {
	console.log(a);
}

console.log('string'.split(''))
console.log([...'string'])

console.log([ [10, 20], [30, 20] ])
console.log([ ...[10, 20], ...[30, 20] ])

console.log([ ...new Set(numbers) ])


for (const x of numbers) {
	console.log(x);
}

for(const x of new Set(numbers)) {
	console.log(x)
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'distinctNumbers list should not have number repetitions',
	expect => expect(distinctNumbers.toString()).toBe('10,20,30,2,8,9,0')
)  //=
