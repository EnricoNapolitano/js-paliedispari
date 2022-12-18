/* 
Chiedere all’utente di inserire una parola tramite un form.
Creare una funzione per capire se la parola inserita è palindroma
*/

//* FUNCTIONS - in this case, only one
const isPalindrome = (inputValue) => {
    
    let inputValueReversed = '';
    for (let i = inputValue.length - 1; i >= 0; i--){
        inputValueReversed += inputValue[i]
    }
     return inputValue === inputValueReversed
}


//* DOM's Elements
const formElement = document.querySelector('form');
const inputElement = document.querySelector('input');
const targetElement = document.getElementById('target');


//* Event submit
formElement.addEventListener('submit', function(e){
    e.preventDefault(); // nedeed not to send form's value to backend

    const inputValue = inputElement.value.trim();

    //! validation: TO DO

    const message = isPalindrome(inputValue) ? 'la parola è palindroma' : 'la parola non è palindroma';
    targetElement.innerText = message;
})
