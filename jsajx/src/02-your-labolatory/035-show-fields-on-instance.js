const DYNAMIC_KEY = 'exampleDynamic';
// const DYNAMIC_KEY = Symbol();

class MyIterableConcept {

	name = 'hello';

	['thisIsSimple']() {
		return 'FUN'
	}

	[DYNAMIC_KEY]() {
		return [90, 10, 20]
	}
}

const iterables = new MyIterableConcept();

console.log(Object.keys(iterables))
// porównanie:

const iterablesPOJO = {
	name: 'hello2',
	['thisIsSimple']() { },
	[DYNAMIC_KEY]() { }
}
console.log(Object.keys(iterablesPOJO))

// 1. problem, powyższe metody nie są widoczne na instancji
console.log(iterables);

// 2. wiemy że JS przenosi je do prototypu wiec szukamy ich tam i również "lipa"
console.log(Object.getPrototypeOf(iterables))
console.log(Object.keys(Object.getPrototypeOf(iterables)))

// 3. pomocna będzie metoda statyczna getOwnPropertyNames wywołana dla prototypu, pokaże listę "properties" (w tym układzie metod) na obiekcie:
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(iterables)))
console.log(Object.getOwnPropertyNames(MyIterableConcept.prototype))

// Gdyby DYNAMIC_KEY był Symbolem
// console.log(Object.getOwnPropertySymbols(MyIterableConcept.prototype)[0] === DYNAMIC_KEY)