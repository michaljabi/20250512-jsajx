// @ts-check

import { assertThat } from '../../j4b1-assert.js'
/**
 * d10-filter-map-reduce
 * Warm up
 *
 * Zamiana kejsów!
 *
 * * Reguły:
 * - Dopisz brakujące metody
 * - Transformując dane staraj się korzystać z programowania funkcyjnego (metody tablicowe)
 */

let hello = '';
const myHello = 'HELLO';


function capitalize(sentence = '') {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}

function kebabCaseToCamelCase(sentence = '') {
	return sentence.split('-').map((word, idx) => idx === 0 ? word.toLowerCase() : capitalize(word)).join('')
}

function kebabCaseToPascalCase(sentence = '') {
	//return sentence.split('-').map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()).join('')
	return sentence.split('-').map(capitalize).join('')
}

/**
 * użycie JSDoc (i TS Server nam podpowiada)
 * @param {string} sentence
 * 
 * @returns {string}
 *  */
function kebabCaseToSnakeCase(sentence) {
	return sentence.replaceAll('-', '_')
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'capitalize > should make first letter to uppercase',
	expect => expect(capitalize('this is it')).toBe('This is it')
)  //=
assertThat(
	'kebabCaseToCamelCase > Should convert string hello-world in to helloWorld',
	expect => expect(kebabCaseToCamelCase('hello-world')).toBe('helloWorld')
)  //=
assertThat(
	'kebabCaseToPascalCase > Should convert string my-super-world in to MySuperWorld',
	expect => expect(kebabCaseToPascalCase('my-super-world')).toBe('MySuperWorld')
)  //=
assertThat(
	'kebabCaseToSnakeCase > Should convert string my-first-python-variable in to my_first_python_variable',
	expect => expect(kebabCaseToSnakeCase('my-first-python-variable')).toBe('my_first_python_variable')
)  //=
