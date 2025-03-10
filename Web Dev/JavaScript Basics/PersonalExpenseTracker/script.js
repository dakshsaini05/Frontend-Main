//Get the btn element
const element = document.querySelector("#btnCounter");

// Take a number that starts from zero
let counter = 0;

// Read the input from counterNumber and convert it in number
const counterNumber = parseInt(document.querySelector("#counterNumber").value);
// console.log(counterNumber);

// Function to increment the counter by 1
function counterIncrement() {
    counter += counterNumber;
    console.log(counter);
}

// Listen to click event on btn
element.addEventListener("click", counterIncrement);