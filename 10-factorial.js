const num = Number(process.argv[2]);

function factorial(n) {
    if (Number.isNaN(n) || n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(num));
