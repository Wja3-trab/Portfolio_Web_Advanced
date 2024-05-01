document.addEventListener('DOMContentLoaded', () => {
'use strict';

const myForm = document.querySelector(".userForm");
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.querySelector("#userName");
    console.log(username.value);
})

});