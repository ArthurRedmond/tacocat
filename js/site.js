function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkValue(userString);

    displayResult(returnObj);
}

function checkValue(userString) {

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let reversedString = [];
    let returnObj = {};

    for (let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i];
    }

    if (reversedString == userString) {
        returnObj.msg = "Well done! You've entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }
    returnObj.reversed = reversedString;

    return returnObj;

}

function displayResult(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}