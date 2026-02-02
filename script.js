const questions = [
    "Will you be my Valentine?",
    "Are you sure?",
    "Think again!",
    "Last chance!",
    "Okay, fine... but really?",
    "Please reconsider!",
    "I promise it'll be fun!",
    "Just say yes!",
    "Don't break my heart!",
    "One more chance?",
    "Pretty please?",
    "With a cherry on top?",
    "I won't take no for an answer!",
    "Final offer!",
    "Okay, I give up... or do I?"
];

let currentQuestion = 0;
let yesSize = 1;
let noAttempts = 0;

function yesClicked() {
    document.getElementById("message").innerText = "Yay! You said YES! 💖";
    document.getElementById("gif").style.display = "block";
    document.getElementById("yesBtn").style.transform = `scale(${yesSize})`;
    yesSize += 0.2;
    // Optionally hide buttons after yes
    document.getElementById("noBtn").style.display = "none";
}

function moveNo() {
    if (noAttempts >= 3) {
        // Stop moving after 3 attempts, make it easy to click
        return;
    }
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

function noClicked() {
    noAttempts++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
        // Reset position or something, but keep moving
    } else {
        document.getElementById("message").innerText = "Aww, maybe next time! 😢";
        document.getElementById("noBtn").style.display = "none";
        document.getElementById("yesBtn").style.display = "none";
    }
}
