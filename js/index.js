let form = document.querySelector('#myForm');
let cardName = document.querySelector('#cardName');
let cardNumber = document.querySelector('#cardNumber');
let expiryMonth = document.querySelector('#expiryMonth');
let expiryYear = document.querySelector('#expiryYear');
let date = document.querySelector('#date');
let closeConfirmation = document.querySelector('#close')
let confirmationContainer = document.querySelector('#confirmation-container');
let cardNameError = document.querySelector('#cardNameError');
let cardNumberError = document.querySelector('#cardNumberError');
let expiryMonthError = document.querySelector('#expiryMonthError');
let expiryYearError = document.querySelector('#expiryYearError');
let cvvError = document.querySelector('#cvvError');
let submit = document.querySelector('#submit');


submit.addEventListener('click', (e) =>{
    e.preventDefault();

    function resetForm(){
        cardName.value = "";
        cardNumber.value = "";
        expiryMonth.value = "";
        expiryYear.value = "";
        cvv.value = "";
    }

        if (
            cardName.value !== "" &&
            cardNumber.value !== "" &&
            expiryMonth.value !== "" &&
            expiryYear.value !== "" &&
            cvv.value !== ""
          ) {
            form.classList.add('hidden');
            confirmationContainer.classList.remove('hidden')
            return resetForm();
          }

        //   The translating slide menu will not close because of an error (This will be fixed shortly)


    // Card Name verification
    if(cardName.value === ''){
        cardName.classList.add("danger");
        cardNameError.innerHTML ="Please Fill in this field";
    }
    else if(cardName.value !== '' && cardName.value.match(/^[0-9]+$/) !== null){
        cardName.classList.add("danger");

        cardNameError.innerHTML ="Only alphabets required";
    }
    else{
        cardName.classList.add('success');
        cardNameError.remove("cardNameError");
    }
    // Card Name verification End

    
    // card Number verification
    if(cardNumber.value === ''){

        cardNumber.classList.add("danger");
        cardNumberError.innerHTML ="Please Fill in this field";

    }else if(cardNumber.value.length < 16){

        cardNumber.classList.add("danger");
        cardNumberError.innerHTML ="There must be 16 Characters in this field";

    }else if(cardNumber.value !== '' && cardNumber.value.match(/^[0-9]+$/) === null){
        cardNumber.classList.add("danger");
        cardNumberError.innerHTML ="Only numbers required";
    }
    else{
        cardNumber.classList.add('success');
        cardNumberError.remove("cardNumberError");
    }
    // card Number verification

    // card Date verification
    if(expiryMonth.value === ''){

        expiryMonth.classList.add("danger");
        expiryMonthError.innerHTML ="Please Fill in this field";

    }else if(expiryMonth.value !== '' && expiryMonth.value.match(/^[0-9]+$/) === null){

        expiryMonth.classList.add("danger");
        expiryMonthError.innerHTML ="Only Numbers required";

    }else{
        expiryMonth.classList.add('success');
        expiryMonthError.remove("expiryMonthError");
    }

    if(expiryYear.value === ''){
        expiryYear.classList.add("danger");
        expiryYearError.innerHTML ="Please Fill in this field";

    }else if(expiryYear.value !== '' && expiryYear.value.match(/^[0-9]+$/) === null){
        expiryYear.classList.add("danger");
        expiryYearError.innerHTML =" Only Numbers required";
    }else{
        expiryYear.classList.add('success');
        expiryYearError.remove("expiryYearError");
    }

    // card Date verification End

    // cvv verification
    if(cvv.value === ''){
        cvv.classList.add("danger");
        cvvError.innerHTML ="Please Fill in this field";

    }else if(cvv.value !== '' && cvv.value.match(/^[0-9]+$/) === null){
        cvv.classList.add("danger");
        cvvError.innerHTML ="Onlu Numbers required";

    }else if(cvv.value.length <= 2){

        cvv.classList.add("danger");
        cvvError.innerHTML ="Must be 3 to 4 Characters";

    }else{
        cvv.classList.add('success');
        cvvError.remove("cvvError");
    }
    // cvv verification End

})

function confirmationContainerClose(){
  form.classList.remove('hidden');
  confirmationContainer.classList.add('hidden');
  console.log(confirmationContainer);
}

  closeConfirmation.addEventListener('click', confirmationContainerClose)


// Input Event Handlers

//The  textContent sets or returns the text content of the specified node, and all its descendants.

cardName.addEventListener('input',(e)=>{
    cardNameOutput.textContent = e.target.value;
})

cardNumber.addEventListener('input',(e)=>{
    let formattedNumber = e.target.value.toString().replace(/\d{4}(?=.)/g, '$& '); 
    cardNumberOutput.textContent = formattedNumber;
})

expiryMonth.addEventListener('input',(e)=>{
    formattedMonth = ('0' + e.target.value).slice(-2);
    expiryMonthOutput.textContent = formattedMonth;
})

expiryYear.addEventListener('input', (e)=>{
        formattedYear = ('0' + e.target.value).slice(-2);
        expiryYearOutput.textContent = formattedYear;
})

cvv.addEventListener('input', (e)=>{
    cvvOutput.textContent = e.target.value;
})
// Input Event Handlers
