// Sum All Primes in a range
// given num, write a function that gets the sum of all prime numbers up to and including num
// e.g. sumPrimes(4) = 5;

// method to solve: using a for loop, add primes to an array. Then reduce the array to get the sum.


const sumPrimes = num => {
    // validate num is 2 or greater
    if (num >= 2){

        let range=[];
        // fx that checks if a number is prime
        const isPrime = (n) => {
            let sqrt = Math.floor(Math.sqrt(n));

            if (n < 2){
                return false;
            }
            
            for (let i=2; i<=sqrt; i++){
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
        // push all numbers in range to array
        for (let i=2; i<=num; i++){
            range.push(i);
        }
        // create new array for primes in range, then reduce to find sum
        let primes = range.filter(n => isPrime(n));
        let sum = primes.reduce( (a, b) => a + b);

        return sum;

    }

    return null;
}
