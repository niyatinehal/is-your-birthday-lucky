const birthdate=document.querySelector("#birthdate");
const luckyNumber=document.querySelector("#lucky-number");
const checkBirthdate= document.querySelector("#check");
const outerText= document.querySelector("#output");


function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length; i++)
    {
        sum= sum+ Number(dob.charAt(i));

    }return sum;
}

function luckyBirthdateOrNot(sum, luckyNumber){
   if(sum%luckyNumber==0){
    outerText.innerText="Yay! Your birthdate is lucky!";
   }else{
   outerText.innerText="Guess you will have to build your own luck!! All the best!";
   }
}

function checkBirthdateIsLucky(){
    const dob= birthdate.value;
    const number= luckyNumber.value;
    if(!dob || !luckyNumber)
    {
        outerText.innerText="please enter a valid input";
    }else{
        const sum= calculateSum(dob);
    luckyBirthdateOrNot(sum, luckyNumber.value);
    }
    
}

checkBirthdate.addEventListener('click', checkBirthdateIsLucky)