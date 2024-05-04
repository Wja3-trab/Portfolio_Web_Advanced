document.addEventListener('DOMContentLoaded', () => {
'use strict';
const details = document.querySelector("#myResult");
const myForm = document.querySelector(".userForm");
const numericRegex = /[^0-9]/i;
const letterSpaceRegex = /[^a-z\s]/i;

const printFormDetails = (e) => {
    e.preventDefault();
    const username = document.querySelector("#userName");
    const age = document.querySelector("#ageUser");
    console.log(username.value + "\n" + age.value);
    if(numericRegex.test(age.value) || letterSpaceRegex.test(username.value)) {
        details.textContent = `You didn't provide valid input for either name or age!\nPlease try again.`;
    } else {
        details.textContent = `${username.value} is ${age.value} years old.`;
    }
    /*username.value = '';
    age.value = '';*/
}

myForm.addEventListener("submit", printFormDetails);

});