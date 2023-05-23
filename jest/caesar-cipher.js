function caesarCipher(string, shift) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = string.split('');
    let message = ''

    array.forEach((letter) => {
        let index = alpha.indexOf(letter);
        
        if (index === -1) {
            if (upperAlpha.indexOf(letter) !== -1) {
                index = upperAlpha.indexOf(letter);

                if ((index + shift) < upperAlpha.length) {
                    message = message + upperAlpha[index + shift];
                }
                else if ((index + shift) >= upperAlpha.length) {
                    index = index - upperAlpha.length;
                    message = message + upperAlpha[index + shift];
                }
            }
            else {
                message = message + letter;
            }
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

module.exports = caesarCipher;