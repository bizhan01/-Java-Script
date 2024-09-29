const chatHistory = [];

function sendMessage(user, message) {
    chatHistory.push({ user, message });
}

sendMessage('Alice', 'Hello!');
sendMessage('Bob', 'Hi there!');

console.log('Chat History:', chatHistory);
