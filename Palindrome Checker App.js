function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str.toLowerCase() === reversedStr.toLowerCase();
}

console.log(isPalindrome('radar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
