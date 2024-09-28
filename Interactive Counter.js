let count = 0;

document.getElementById("incrementBtn").addEventListener("click", function() {
    count++;
    document.getElementById("countDisplay").innerText = count;
});

document.getElementById("decrementBtn").addEventListener("click", function() {
    count--;
    document.getElementById("countDisplay").innerText = count;
});
