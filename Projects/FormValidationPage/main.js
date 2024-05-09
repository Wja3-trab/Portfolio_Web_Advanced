'use strict';
document.addEventListener('DOMContentLoaded', () => {
const render = document.querySelector(".render");
const numericRegex = /[^0-9]/i;
const letterSpaceRegex = /[^a-z\s]/i;

const userForm = () => {
    return (`<form class="userForm" action="">
    <label for="userName">Username: </label>
    <input id="userName" type="text" required />
    <label for="ageUser">Age: </label>
    <input id="ageUser" type="text" required />
    <button id="submitButton" type="submit">Send</button>
  </form>`);
};

const userJSON = () => {
    return(`<div class="userChoice">
    <form id="apiForm">
    <label for="api_url">URL: </label><input id="api_url" /><button id="testAPI" type="submit">Test</button>
    </form>
    <p>JSON:</p><pre id="response"></pre>
    </div>`);
}

const testAPI = async (e) =>  {
    e.preventDefault();
    const inputAPI = document.querySelector("#api_url")
    const url = inputAPI.value.trim();
            console.log(url);
            if(url.length < 1) {
                console.log("Please enter a valid API.");
                return;
            }
                const resp = await fetch(url).then(async (data) => {
                    if(!data.ok) {
                        throw data;
                    }
                    console.log(data);
                    const result = await data.json();
                    const resultTextDisplay = document.getElementById("response");
                    resultTextDisplay.textContent = JSON.stringify(result, null, 2);
                }).catch(err => console.log("Erro code: " + err.status + "\nUrl: " + err.url));
}

const printFormDetails = (e) => {
    e.preventDefault();
    const details = document.querySelector("#myResult");
    const username = document.querySelector("#userName");
    const age = document.querySelector("#ageUser");
    console.log(username.value + "\n" + age.value);
    if(numericRegex.test(age.value) || letterSpaceRegex.test(username.value)) {
        details.textContent = `You didn't provide valid input for either name or age!\nPlease try again.`;
    } else {
        details.textContent = `Welcome ${username.value}! You are ${age.value} years old.\nWhat API would you like to test today?`;
        render.innerHTML = userJSON();
        const formAPI = document.getElementById("apiForm");
        const testBtn = document.getElementById("api_url");
        formAPI.addEventListener("submit", testAPI);
    }
};


render.innerHTML = userForm();
const myForm = document.querySelector(".userForm");

myForm.addEventListener("submit", printFormDetails);



});