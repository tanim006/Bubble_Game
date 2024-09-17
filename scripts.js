let HitRandom = 0;
let score = 0;
let timer = 60

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 210; i++) {
        let RandomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${RandomNumber}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
    let timerContainer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        } else {
            clearInterval(timerContainer);
        }
    }, 1000);
}

function Hit() {
    HitRandom = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = HitRandom;
}

function IncreasePoint() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

// Attach event listener to the ".pbtm" container to check if clicked bubble matches HitRandom
document.querySelector(".pbtm").addEventListener('click', function (details) {
    if (details.target.classList.contains("bubble")) {
        let clickedNumber = parseInt(details.target.textContent);
        if (clickedNumber === HitRandom) {
            IncreasePoint();
            Hit(); // Generate a new target number after a successful hit
        }
    }
});

// Initialize the game
Hit();
runTimer();
makeBubble();
