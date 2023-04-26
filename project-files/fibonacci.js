// Iterative function
function fibonacci(n) {
    let array = [0, 1];
    if (n === 0) {
        console.log([0]);
    }
    else if (n === 1) {
        console.log([0, 1]);
    }
    else {
        for (let i = 2; i < n; i++) {
            array.push(array[i - 1] + array[i - 2]);
        }
        console.log(array);
    }
}

// fibonacci(0);
// fibonacci(1);
// fibonacci(8);


// Recursive function
function fibsRec(n) {
    try {
        if (n === 1) return [0];
        if (n === 2) return [0,1];
        else {
            let arr = fibsRec(n-1); // recuperamos el array del paso anterior
            arr.push(arr[arr.length-1]+arr[arr.length-2]); // sumamos el ultimo y el anteultimo valor del array para n-1 (serian los valores n-1 y n-2 del total)
            return arr // devolvemos el nuevo array de forma de poder acceder a este en la recursion
        }
    }
    catch (error) {
        console.log(error)
    }

}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(8));