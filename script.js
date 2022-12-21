
const palindromeInput = document.getElementById("palindrome_input");
const palindromeRes = document.getElementById("palindrome_res");

function checkPalindrome () {
   const str = palindromeInput.value.split("").reverse().join("");
   if (palindromeInput.value.toLowerCase() === str.toLowerCase()) {
       palindromeRes.textContent = "true"
   } else {
       palindromeRes.textContent = "false"
   }
}
const reverseInput = document.getElementById("reverse_input");
const reverseResult = document.getElementById("reverse_result");
function reverseString(){
    reverseResult.textContent = reverseInput.value.split("").reverse().join("");
}


const stringValue = document.getElementById("string_value");
const characterValue = document.getElementById("character_value");
const resCalc = document.getElementById("res_calc");

function getCount(){
const database = stringValue.value.split("");
let count = 0;
for (let i = 0; i < database.length; i++)
        if (characterValue.value === database[i]) {
            count++;
        }
    resCalc.textContent = count;
}


