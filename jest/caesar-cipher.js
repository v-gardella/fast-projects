function caesarCipher(string, shift) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let array = string.split('');
    let message = ''

    array.forEach((letter) => {
        let index = alpha.indexOf(letter);
        
        if (index === -1) {
            message = message + letter;
        }
        else {
            if ((index + shift) < alpha.length) {
                message = message + alpha[index + shift];
            }
            else if ((index + shift) >= alpha.length) {
                index = index - alpha.length;
                message = message + alpha[index + shift];
            }
        }

    })

    return message;
}

console.log(caesarCipher('hello. world', 3));

module.exports = caesarCipher;