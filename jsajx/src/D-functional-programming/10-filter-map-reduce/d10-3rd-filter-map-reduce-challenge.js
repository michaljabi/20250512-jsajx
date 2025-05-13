import { stringHelper } from '../../A-the-modular-js/20-import-export-variants/a20-challenge-project/czesuaf-util.js';
import { assertThat } from '../../j4b1-assert.js'
/**
 * d10-filter-map-reduce
 * Challenge
 *
 *  W naszej złożonej aplikacji część komponentów, potrzebuje danych w specjalnej formie,
 *  aby je poprawnie wyświetlić.
 *
 *  Postaraj się wykorzystać programowanie funkcyjne do osiągnięcia odpowiedniego formatu danych,
 *  tak aby każdy z komponentów mógł je obsługiwać.
 *
 * * Reguły:
 * - nie zmieniaj danych które przychodzą z pseud-backendu bezpośrednio na tablicy (nie ruszaj backendApiRequest)
 * - w przestrzeni tego scope muszą się zanjdować showNamesOnly, showWomanNamesOnly, showEmailsWithDomainSiteCom
 *   zawierające odpowiednio tablice z wynikami działań.
 * - zastosuj odpowiednie metody tablicowe aby uzyskać wyniki.
 */

// Nie zmieniaj tego kodu:
const backendApiRequest = () => [
	'adrian@site.com',
	'stefan@site.com',
	'jadwiga@domain.pl',
	'henryka@domain.pl',
	'anna@site.com'
];
const emailData = backendApiRequest();

const { capitalize } = stringHelper;

const pluckNameFormEmail = email => email.split('@')[0];
const isAWomanName = name => name.toLowerCase().endsWith('a');
const isSiteCom = email => email.endsWith('@site.com');
// robimy generycznie, koncept1:
// const endsWithDomain = (email, domain = 'site.com') => email.endsWith(`@${domain}`);
// koncept2:
const endsWithDomain = (domain = 'site.com') => (email) => email.endsWith(`@${domain}`);

// Tutaj możesz pisać:
const showNamesOnly = emailData.map(pluckNameFormEmail).map(capitalize);
const showWomanNamesOnly = showNamesOnly.filter(isAWomanName);
// const showEmailsWithDomainSiteCom = emailData.filter(email => endsWithDomain(email, 'site.com'));
const showEmailsWithDomainSiteCom = emailData.filter(endsWithDomain());

endsWithDomain()('hello@michal.com'); //=

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'First component should consume data as Capitalized names',
	expect => expect(showNamesOnly).toEqual(['Adrian', 'Stefan', 'Jadwiga', 'Henryka', 'Anna'])
)  //=

assertThat(
	'Second component should consume data as Woman names only',
	expect => expect(showWomanNamesOnly).toEqual(['Jadwiga', 'Henryka', 'Anna'])
)  //=

assertThat(
	'Third component should have @site.com emails as data provided',
	expect => expect(showEmailsWithDomainSiteCom).toEqual(['adrian@site.com', 'stefan@site.com', 'anna@site.com'])
)  //=
