/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



//* FUNCTIONS
const sum = (randomNumber, userNumber) => randomNumber + userNumber;
const typeOfNumber = (randomNumber, userNumber) => oddOrEven = !(sum(randomNumber, userNumber) % 2) ? 'pari' : 'dispari';


//* DOM'S ELEMENTS
const userNumberTypeElement = document.getElementById('user-number-type');
const userNumberElement = document.getElementById('user-number');
const formElement = document.querySelector('form');
const targetElement = document.getElementById('target');
const resultElement = document.getElementById('result');
let oddOrEven = ''; // message generated by the program


//* SUBMIT EVENT
formElement.addEventListener('submit', function(e){
    e.preventDefault();

    const randomNumber = Math.floor(Math.random()*5)+1; // CPU number
    const userNumber = parseInt(userNumberElement.value.trim());
    const userNumberType = userNumberTypeElement.value;
    
    sum(randomNumber, userNumber) // sum function
    typeOfNumber(randomNumber, userNumber) // function that release if sum is an even or an odd number

    targetElement.innerHTML = `la giocata del Computer è <b>${randomNumber}</b>. Pertanto la somma è ${oddOrEven}`;
    const result = ((oddOrEven === 'pari') && userNumberType === 'even') ? 'VINTO' : 'PERSO'; // ternary condition to show who won the match
    resultElement.innerHTML = `HAI <b>${result}!</b>`
})


