function rot13(message) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < message.length; i++) {
        if (!message.charAt(i).match(/[a-z]/i)) {
            result += message.charAt(i);
        } else if (message.charAt(i) == message.charAt(i).toLowerCase()) {
            result += alpha.charAt((message.charAt(i).charCodeAt(0) - 97 + 13) % 26);
        } else {
            result += alpha.charAt((message.charAt(i).charCodeAt(0) - 65 + 13) % 26).toUpperCase();
        }
    }
    return result;
}