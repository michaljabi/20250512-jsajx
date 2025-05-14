import { assertThat } from '../../j4b1-assert.js'
// import _ from 'lodash'
/**
 * b40-cloning
 * Warm up
 *
 * Klonowanie obiektów
 *
 * * Reguły:
 * - Kod możesz pisać tylko w lokalnym scope funkcji `cloner`
 */

const myFirstObject = {
	name: 'August Oetker',
	age: 56,
	title: 'Dr.'
}

const myFirstImpressiveObject = {
	name: 'John Wick',
	age: 55,
	address: {
		zip: 11765,
		street: 'Horseshoe Road',
		neighbourhood: 'Long island',
		city: 'New York'
	}
}

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

function cloner(objectToClone) {
	// #Reguła:
	// Kodzik można pisać tylko w tym bloku.
	// return Object.assign({}, objectToClone);

	// return _.cloneDeep(objectToClone);
	const clone = { ...objectToClone };

	// console.log(Object.keys(objectToClone))
	for (const property in objectToClone) {
		// console.log(property)
		// console.log(objectToClone[property])
		const value = objectToClone[property];
		if (value !== null && typeof value === 'object') {
			clone[property] = { ...value }
		}
	}

	return clone;
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:

const clonedFirstObject = cloner(myFirstObject);
const clonedFirstImpressiveObject = cloner(myFirstImpressiveObject);

assertThat(
	'clonedFirstObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstObject).toBe(typeof myFirstObject)
)  //=
assertThat(
	'clonedFirstObject > not being the same instance in memory!',
	expect => expect(clonedFirstObject).notToBe(myFirstObject)
)  //=
assertThat(
	'clonedFirstObject > objects structure should be the same',
	expect => expect(JSON.stringify(clonedFirstObject)).toBe(JSON.stringify(myFirstObject))
)  //=

assertThat(
	'clonedFirstImpressiveObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstImpressiveObject).toBe(typeof myFirstImpressiveObject)
)  //=
assertThat(
	'clonedFirstImpressiveObject > has same structure but not being the same instance in memory!',
	expect => expect(clonedFirstImpressiveObject).notToBe(myFirstImpressiveObject)
)  //=
assertThat(
	'clonedFirstImpressiveObject > clone suppose to be deep !',
	expect => expect(clonedFirstImpressiveObject.address).notToBe(myFirstImpressiveObject.address)
)  //=
assertThat(
	'clonedFirstImpressiveObject > object structure should be the same',
	expect => expect(JSON.stringify(clonedFirstImpressiveObject)).toBe(JSON.stringify(myFirstImpressiveObject))
)  //=
