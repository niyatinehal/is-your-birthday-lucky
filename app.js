const birthdate=document.querySelector("#birthdate");
const luckyNumber=document.querySelector("#lucky-number");
const checkBirthdate= document.querySelector("#check");

checkBirthdate.addEventListener('click', function getValues(){
    console.log(birthdate.value, luckyNumber.value);
})