function convertCurrency() {
    const amount = document.getElementById('amountInput').value;
    const convertedAmount = amount * 0.85; // Conversion rate for USD to EUR
    document.getElementById('result').innerText = convertedAmount;
}
