const usdAmount = 100;
const exchangeRate = 0.85;
const euroAmount = usdAmount * exchangeRate;
console.log(`$${usdAmount} is €${euroAmount.toFixed(2)}`);
