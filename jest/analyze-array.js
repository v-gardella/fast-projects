function analyzeArray(array) {
    const average = Number(((array.reduce((a, b) => a + b, 0))/array.length).toFixed(2));
    const min = array.reduce((a, b) => Math.min(a, b));
    const max = array.reduce((a, b) => Math.max(a, b));
    const length = array.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = analyzeArray;