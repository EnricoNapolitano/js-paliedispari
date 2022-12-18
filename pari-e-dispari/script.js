/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//* DOMS elements
const userNumberTypeElement = document.getElementById('user-number-type');
const userNumberElement = document.getElementById('user-number');
const buttonElement = document.querySelector('button');

const randomNumber = Math.floor(Math.random()*5)+1;
console.log(randomNumber)