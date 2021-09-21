const birthdayDate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".btn-check");
const message = document.querySelector("#luck-message");
let sum = 0;
checkButton.addEventListener("click", function luckNumber(){
    hideMessage();
    
    const bDate = birthdayDate.value.replaceAll('-','');
    
    for(let i=0; i < bDate.length; i++){
        sum = sum + Number(bDate.charAt([i]));
    }
    
    if(sum % luckyNumber.value === 0){
        showMessage(luckyNumber.value + " is a lucky number!!! 🥳 🥳 🥳");
    }
    else {
        showMessage(luckyNumber.value + " is not that lucky 😕");
    }
  
    
    function hideMessage(){
        message.style.display = "none";
    }

    function showMessage(msg){
        message.style.display = "block";
        message.innerText = msg;
    }

})
    