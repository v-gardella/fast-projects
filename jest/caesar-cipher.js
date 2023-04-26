function caesarCipher(string, shift) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let array = string.split('');
    let message = ''

    // console.log(letters.length);
    // console.log(letters[0]);
    // console.log(letters[25]);
    // console.log(letters[24]);
    // console.log(letters[25-25]);

    array.forEach((letter) => {
        let index = alpha.indexOf(letter);
        
        if ((index + shift) < alpha.length) {
            message = message + alpha[index + shift];
        }
        else if ((index + shift) >= alpha.length) {
            index = index - alpha.length;
            message = message + alpha[index + shift];
        }

    })

    return message;
}

console.log(caesarCipher('wxyzabc', 3));

module.exports = caesarCipher;