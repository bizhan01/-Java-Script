let timer = 0;

function startTimer() {
    timer = setInterval(() => {
        document.getElementById('timer').innerText = timer++;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
