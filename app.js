var inputBirthDate= document.querySelector("#birth-date");
var luckyNumber= document.querySelector("#lucky-number");
var checkButton= document.querySelector("#lucky-check");
var textArea= document.querySelector("#output");

var sum=0;

function calculateSum(dob){
    var dateOfBirth= dob.replaceAll("-","");

    //console.log(dateOfBirth.charAt(0));
    
    for(let i=0; i<dateOfBirth.length; i++){
        sum= sum+ Number(dateOfBirth.charAt(i));
    }
    return(sum);
}

function calculateLucky(birthDateSum,luckyNumber){
    if(birthDateSum % luckyNumber ===0){
        showMessage("Your birthday date is lucky!!!🥳");
    }else{
        showMessage("You are not that lucky, so SAD!!!😿")
    }
}

function showMessage(text){
    textArea.innerText= text;
}

checkButton.addEventListener("click", birthdayLuckOrNot);

function birthdayLuckOrNot(){
    if(inputBirthDate.value!="")
    {
        if(luckyNumber.value!=""){
            var birthDateSum= calculateSum(inputBirthDate.value);
            var luckyOrNot= calculateLucky(birthDateSum, luckyNumber.value);
        }
        else{
            textArea.innerText="Please enter both the fields.";
        }
    }
    else{
        textArea.innerText="Please enter both the fields.";
    }
}