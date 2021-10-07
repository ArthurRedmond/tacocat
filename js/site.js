function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let result = checkValue(userString);
    displayResult(result);
}

function checkValue(userString) {
    let result = "";
    //removes anything not a-z or A-Z
    let cleanString = userString.replace(/[^a-zA-Z ]/g, "");
    result = cleanString;
    return result;
}

function displayResult(result) {
    document.getElementById("message").innerHTML = `${result}`;
    document.getElementById("alert").classList.remove("invisible");
}