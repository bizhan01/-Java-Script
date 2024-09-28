function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(`Dice 1: ${rollDice()}`);
console.log(`Dice 2: ${rollDice()}`);
