"use strict"; // to teraz jeśli mam taką sytuację:

function sayHello() {
    console.log(this.name) 
}

// i wywołam to bez obiektu (czyli nie jako metodę, tylko funkcje):
sayHello();
// to dopisany wyżej "use strict" spowoduje że pod this - jest "undefined" !!! (nie ma wartośći)
// vs.
// jeśli nie ma "use strict" to pod this będzie -> globalThis
// + dodatkowo użycie "use strict":
// to ten kod da nam błąd!
// hello = ""