/**
 * d10-filter-map-reduce
 * Explain
 *
 * #Cel:
 * Przypomnienie podstawowych metod tablicowych, które nie mutując danych - pozwalają na ich transformację.
 */

// Programowanie funkcyjne z użyciem metod tablicowych najczęściej wykorzystuje się do transformacji danych.
// Niewątpliwą zaletą metod: map / filter / reduce - jest możliwość ich "chain'owania" - łączenia
// i wywoływania jedna po drugiej.

const ref = (input, input2, i3, i4) => 'Hello';
const ref2 = () => {



	return 'Hello';
}

console.log(ref instanceof Function)
console.log(ref instanceof Object)

console.log(ref())
console.log(ref2())

// Mapowanie
// Transformacja elementów
const mapped = [0, 1, 2, 3, 4, 5].filter(Boolean).map(nr => { return 'Chapter #' + nr });
console.log(mapped);

// Filtrowanie
// Zmiana ilości elementów

// Falsy
console.log(Boolean(''))
// Truthy
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(new Date()))

console.log(Boolean(10 % 2))
console.log(!!(111 % 2))
console.log(+'123')
console.log(Number('123'))

let value = NaN;

if (value || value === 0) {
	console.log('?')
}

console.log(11 % 2)
console.log(12 % 2)

const oddNumbers = [1, 2, 3, 4, 5].filter((_, idx) => idx % 2);
console.log(oddNumbers);

// "Redukcja" elementów
// Gdzie map i filter nie może tam reduce pośle!
const sumOfElements = [1, 2, 3, 4, 5].reduce((acc, value) => {
	acc.cash += value;
	return acc
}, { cash: 0 });
console.log(sumOfElements);

// Rozważmy następujący przykład:
// Podsumowanie wartości wszystkich operacji uznania na koncie:

const cashBalance = [
	{ id: 5, cash: 100, type: 'IN' },
	{ id: 4, cash: -300, type: 'OUT' },
	{ id: 3, cash: -1200, type: 'OUT' },
	{ id: 2, cash: 400, type: 'IN' },
	{ id: 1, cash: 2000, type: 'IN' },
]

const inCash = cashBalance.filter((operation) => operation.type === 'IN').map(o => o.cash).reduce((a, b) => a + b);
console.log(inCash);

// Korzystając z bardziej funkcyjnego podejścia można to zapisać bardziej przejrzyście:

const operationType = (type) => o => o.type === type;

function operationType2(type) {
	return function (o) {
		return o.type === type
	}
}

operationType2('IN')({ type: 'IN' }) //=


const operationTypeIn = o => o.type === 'IN';
export const pluckCash = o => o.cash;
const sum = (a, b) => a + b;

pluckCash({ cash: 3020 }) //=

console.log(cashBalance.filter(operationType('IN')).map(pluckCash).reduce(sum));

// Teraz nasze małe pomocnicze funkcje są re-używalne, możemy szybko policzyć aktualny stan konta
const currentBalance = cashBalance.map(pluckCash).reduce(sum);
console.log(currentBalance);

// Dodając dodatkowy filtr - możemy policzyć obciążenia:
const operationTypeOut = operationType('OUT')
console.log(cashBalance.filter(operationTypeOut).map(pluckCash).reduce(sum));

// Ilość przykładów można mnożyć:
// 1 Policz ilość wszystkich operacji IN:
console.log(cashBalance.filter(operationTypeIn).length)

// 2 Policz ilość wszystkich operacji OUT:
console.log(cashBalance.filter(operationTypeOut).length)

// 3 Odtwórz stan konta po 3 operacji:
const idLowerOrEqual3 = o => o.id <= 3;
console.log(cashBalance.filter(idLowerOrEqual3).map(pluckCash).reduce(sum))
