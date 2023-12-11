let number = document.querySelector(".counter__number");
let increaseBtn = document.querySelector(".inc");
let resetBtn = document.querySelector(".reset");
let decreaseBtn = document.querySelector(".dec");

// increase the number
increaseBtn.addEventListener("click", function (event) {
    let currentNumber = number.innerHTML;
    number.innerText = Number(currentNumber) + 1;
});
// reset the number
resetBtn.addEventListener("click", function (event) {
    let currentNumber = number.innerHTML;
    number.innerText = 0;
});
// decrease the number
decreaseBtn.addEventListener("click", function (event) {
    let currentNumber = number.innerHTML;
    if (currentNumber > 0) {
        number.innerText = Number(currentNumber) - 1;
    }
});
