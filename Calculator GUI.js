function calculateBMI() {
    const weight = document.getElementById('weightInput').value;
    const height = document.getElementById('heightInput').value;
    const bmi = weight / (height * height);
    document.getElementById('result').innerText = bmi;
}
