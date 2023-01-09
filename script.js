const stringOne = document.querySelector("#string-one");
const stringTwo = document.querySelector("#string-two");
const message = document.querySelector("#result");
// Initialize application
function isomorphic() {
    // get inputed strings
    string1 = stringOne.value;
    string2 = stringTwo.value;
    strOne = string1.trim();
    strTwo = string2.trim();
lenS1 = strOne.length;
lenS2 = strTwo.length;
    if (lenS1 !== 0 && lenS2 === 0) {
        message.style.color = "red";
 message.innerHTML = "Please Input String Two"
        return false;
    } else if (lenS1 === 0 && lenS2 !== 0) {
        message.style.color = "red";
        message.innerHTML = "Please Input String One"
        return false;
    } else if (!strOne || !strTwo) {
        message.style.color = "red";
        message.innerHTML = "Please Input String One and String Two"
        return false;
    }
    // check for equal length of strings
    if (lenS1 != lenS2) {
        message.style.color = "red";
        message.innerHTML = "Please Input Strings of same length"
        return false;
    }
let chMap = {};
for (let i = 0; i < lenS1; i++) {
 if (!chMap[strOne[i]]) {   	
            chMap[strOne[i]] = strTwo[i];
        } else if (chMap[strOne[i]] !== strTwo[i]) {
            message.style.color = "red";
            message.innerHTML = "False"
            return false;
        }
    }
    message.style.color = "green";
    message.innerHTML = "True"
    return true;
}