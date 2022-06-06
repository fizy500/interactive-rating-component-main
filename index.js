// Variables
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const display = document.getElementById("result");

// Rating
function selection(rating) { display.innerHTML = rating; }
// Function ends here
button1.addEventListener("click", () => { selection(1) });
button2.addEventListener("click", () => { selection(2) });
button3.addEventListener("click", () => { selection(3) });
button4.addEventListener("click", () => { selection(4) });
button5.addEventListener("click", () => { selection(5) });

// Card Flip
function showThanks() {
    let card = document.querySelector('#card');
    let submit = document.querySelector('#submit-btn');
    submit.addEventListener('click', function () {
        card.classList.toggle('flipped');
    });
}
button1.addEventListener("click", () => { showThanks() });
button2.addEventListener("click", () => { showThanks() });
button3.addEventListener("click", () => { showThanks() });
button4.addEventListener("click", () => { showThanks() });
button5.addEventListener("click", () => { showThanks() });