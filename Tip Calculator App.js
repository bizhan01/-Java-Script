function calculateTip(amount, tipPercentage) {
    return amount * (tipPercentage / 100);
}

const billAmount = 50;
const tipPercentage = 15;
console.log(`Tip amount: $${calculateTip(billAmount, tipPercentage)}`);
