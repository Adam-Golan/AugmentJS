/**
 * Calculates the factorial of a non-negative integer.
 * 
 * If the number is negative, throws a RangeError since factorial is not defined for negative numbers.
 * For non-negative integers, the factorial of 0 is 1, and for positive integers, 
 * it is the product of all positive integers less than or equal to the number.
 * 
 * @returns The factorial of the number, or throws a RangeError if the number is negative.
 * @example
 * 
 * (5).factorial() // 120
 * (0).factorial() // 1
 * (-1).factorial() // throws a RangeError
 */
BigInt.prototype.factorial = function (): bigint {
    if (+this < 0n) throw new RangeError('Factorial is not defined for negative numbers');
    let result = 1n;
    for (let i = 2n; i <= +this; i++) result *= i;
    return result;
};

/**
 * Returns a boolean indicating whether the BigInt is prime.
 *
 * A prime number is a positive integer that is divisible only by itself and 1.
 *
 * @returns True if the BigInt is prime, false otherwise.
 * @example
 *
 * (5n).isPrime() // true
 * (6n).isPrime() // false
 * (0n).isPrime() // false
 * (1n).isPrime() // false
 * (2n).isPrime() // true
 */
BigInt.prototype.isPrime = function (this: bigint): boolean {
    if (this < 2n) return false;
    if (this === 2n || this === 3n) return true;
    if (this % 2n === 0n || this % 3n === 0n) return false;

    let i = 5n;
    const limit = BigInt(Math.floor(Number(this) ** 0.5)); // Cast to number and then back to BigInt for exponentiation
    while (i <= limit) {
        if (this % i === 0n || this % (i + 2n) === 0n) return false;
        i += 6n;
    }
    return true;
};

/**
 * Returns a string representation of the BigInt with commas added as thousands separators.
 *
 * @returns The decimal string representation of the BigInt.
 */
BigInt.prototype.toDecimalString = function (): string {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};