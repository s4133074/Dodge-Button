const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");


// How close the mouse can get before the button runs away
const escapeDistance = 120;


// Detect mouse movement anywhere on the page
document.addEventListener("mousemove", function (event) {

    // Get No button position
    const buttonRect = noButton.getBoundingClientRect();

    // Find the centre of the No button
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    // Mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate distance between mouse and button
    const distance = Math.sqrt(
        Math.pow(mouseX - buttonX, 2) +
        Math.pow(mouseY - buttonY, 2)
    );


    // If mouse gets too close
    if (distance < escapeDistance) {

        moveNoButton();

    }

});


// Move the No button somewhere random
function moveNoButton() {

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

}


// What happens when Yes is clicked
yesButton.addEventListener("click", function () {

    message.textContent = "I knew you would say yes 😂❤️";

});