let countdown = 10;

function startCountdown() {
    const timer = setInterval(() => {
        document.getElementById('countdown').innerText = countdown--;
        if (countdown < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
