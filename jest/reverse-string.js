function reverseString(value) {
    const array = value.split('');
    const reverseArray = [];

    while (array.length > 0) {
        reverseArray.push(array.pop())
    }

    return reverseArray.join('')
}

reverseString('watermelon')

module.exports = reverseString;