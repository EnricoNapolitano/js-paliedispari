/* 
Chiedere all’utente di inserire una parola tramite un form.
Creare una funzione per capire se la parola inserita è palindroma
*/

//* DOM's Elements
const formElement = document.querySelector('form');
const inputElement = document.querySelector('input');
const targetElement = document.getElementById('target');


//* Event submit
formElement.addEventListener('submit', function(e){
    e.preventDefault(); // nedeed not to send form's value to backend

    const inputValue = inputElement.value.trim();
    console.log(inputValue);

})
