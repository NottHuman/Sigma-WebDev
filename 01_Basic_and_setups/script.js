function calculate() {
    const inputValue = document.getElementById("suku").value;
    const number = parseFloat(inputValue);
    if (isNaN(number)) {
        document.getElementById("result").textContent = "Please enter a valid number!";
    } else {
        const result = number * 5;
        document.getElementById("result").textContent = "Result = " + result;
    }
}