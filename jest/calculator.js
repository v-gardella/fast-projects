function calculator(a, b) {
    
    const add = function (a, b) {
        let sum = a + b;
        return sum;
    }

    const substract = function (a, b) {
        let sub = a - b;
        if (sub % 1 !== 0) {
            return Number(sub.toFixed(2))
        }
        return sub;
    }

    const divide = function (a, b) {
        let div = a / b;
        if (div % 1 !== 0) {
            return Number(div.toFixed(2));
        }
        return div;
    }

    const multiply = function (a, b) {
        let mult = a * b;
        if (mult % 1 !== 0) {
            return Number(mult.toFixed(2));
        }
        return mult;
    }

    return {
        add: add,
        substract: substract,
        divide: divide,
        multiply: multiply
    }
}

let calc = new calculator();
console.log(calc.divide(10, 0));

module.exports = calculator;