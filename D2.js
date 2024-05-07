/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 1;
const num2 = 2;

function maggiore(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const piuGrande = maggiore(num1, num2);
console.log("Il numero più grande è: " + piuGrande);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const x = 4;

if (x !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const divisibile = 55;

let risultato = divisibile % 5;
console.log("Divisibile per 5 dato che risulta :" + risultato);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero1 = 5;
const numero2 = 3;

if (numero1 === 8 || numero2 === 8) {
  console.log("Uno dei due numeri e 8.");
} else if (numero1 + numero2 === 8) {
  console.log("La somma dei numeri e uguale a 8.");
} else if (numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log("La differenza tra i numeri e uguale a 8.");
} else {
  console.log("Nessuna delle condizioni e soddisfatta.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 60;
const costoSpedizione = totalShoppingCart > 50 ? 0 : 10;
const costoTotale = totalShoppingCart + costoSpedizione;
console.log("Costo totale: $" + costoTotale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 1;
let b = 2;
let c = 3;
if (a >= b && a >= c) {
  if (b >= c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if (a >= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numero = 12;
if (numero % 2 === 0) {
  console.log("Il numero fornito è pari.");
} else {
  console.log("Il numero fornito è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

numbers[0];
console.log("prima del push", numbers);

numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("dopo il push", numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.pop();
numbers.push(100);
console.log("aggiunta 100", numbers);
