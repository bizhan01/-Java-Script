let timer;
let seconds = 0;

function startTimer() {
    timer = setInterval(function() {
        seconds++;
        document.getElementById("timerDisplay").innerText = "Time: " + seconds + "s";
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}
