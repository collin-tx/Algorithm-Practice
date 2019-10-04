// Write a function that returns the fibonacci sequence to nth index
// Write a second function that returns number at n index of Fibonacci sequence

const fibonacci_Sequence = n => {
    let fib = [0,1];

    for (let i=2; i<n; i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

const fibonacci_At_N = n => {
    let sequence = fibonacci_Sequence(n);
    return Math.max(...sequence);
}