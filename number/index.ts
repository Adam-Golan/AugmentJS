/**
 * Returns a boolean indicating whether the number is even.
 * 
 * @returns {boolean} `true` if the number is even, `false` otherwise.
 */
Number.prototype.isEven = function (): boolean {
    return +this % 2 === 0;
};

/**
 * Returns a boolean indicating whether the number is odd.
 * 
 * @returns {boolean} `true` if the number is odd, `false` otherwise.
 */
Number.prototype.isOdd = function (): boolean {
    return +this % 2 !== 0;
};

/**
 * Returns a number whose value is limited to the given range.
 * 
 * If the number is below the minimum, it will be returned as the minimum.
 * If the number is above the maximum, it will be returned as the maximum.
 * Otherwise, the number is returned unchanged.
 * 
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns A number whose value is limited to the given range.
 */
Number.prototype.clamp = function (min: number, max: number): number {
    return Math.min(Math.max(+this, min), max);
};

/**
 * Returns a string representation of the number with an ordinal suffix.
 * 
 * The ordinal suffixes are 'st', 'nd', 'rd', and 'th'.
 * 
 * @returns A string representation of the number with an ordinal suffix.
 * @example
 * 
 * (1).toOrdinal() // '1st'
 * (2).toOrdinal() // '2nd'
 * (3).toOrdinal() // '3rd'
 * (4).toOrdinal() // '4th'
 * (20).toOrdinal() // '20th'
 * (21).toOrdinal() // '21st'
 * (22).toOrdinal() // '22nd'
 * (23).toOrdinal() // '23rd'
 * (24).toOrdinal() // '24th'
 */
Number.prototype.toOrdinal = function (): string {
    const n = this.valueOf();
    const suffix = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return `${n}${suffix[(v - 20) % 10] || suffix[v] || suffix[0]}`;
};

/**
 * Determines whether a number is prime.
 * 
 * A prime number is a positive integer that is divisible only by itself and 1.
 * 
 * @returns True if the number is prime, false otherwise.
 * @example
 * 
 * (5).isPrime() // true
 * (6).isPrime() // false
 * (0).isPrime() // false
 * (1).isPrime() // false
 * (2).isPrime() // true
 */
Number.prototype.isPrime = function (): boolean {
    const n = this.valueOf();
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
};

/**
 * Calculates the factorial of a non-negative integer.
 * 
 * If the number is negative, returns NaN since factorial is not defined for negative numbers.
 * For non-negative integers, the factorial of 0 is 1, and for positive integers, 
 * it is the product of all positive integers less than or equal to the number.
 * 
 * @returns The factorial of the number, or NaN if the number is negative.
 * @example
 * 
 * (5).factorial() // 120
 * (0).factorial() // 1
 * (-1).factorial() // NaN
 */
Number.prototype.factorial = function (): number {
    const n = this.valueOf();
    if (n < 0) return NaN;
    return n === 0 ? 1 : n * (n - 1).factorial();
};

/**
 * Converts a number to its Roman numeral representation.
 *
 * @returns A string containing the Roman numeral representation of the number, or null if the number is outside the range [1, 3999].
 */
Number.prototype.toRoman = function (): string | null {
    const n = this.valueOf();
    if (n <= 0 || n >= 4000) return null;
    const map: [string, number][] = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];
    let result = '';
    let num = n;
    for (const [letter, value] of map) {
        while (num >= value) {
            result += letter;
            num -= value;
        }
    }
    return result;
};

/**
 * Formats the number as a currency string using the Intl.NumberFormat API.
 *
 * @param {string} [locale='en-US'] The locale to use for formatting.
 * @param {string} [currency='USD'] The currency to use for formatting.
 * @returns {string} The currency string.
 * @example
 *
 * (123).toCurrency('en-US', 'USD') // 'USD 123.00'
 * (123).toCurrency('de-DE', 'EUR') // 'EUR 123,00'
 */
Number.prototype.toCurrency = function (locale: string = 'en-US', currency: string = 'USD'): string {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(+this);
};

/**
 * Rounds the number to the nearest multiple of the specified number.
 *
 * @param {number} multiple The multiple to round to.
 * @returns {number} The rounded number.
 * @example
 *
 * (22).roundToNearest(10) // 20
 * (23).roundToNearest(10) // 20
 * (24).roundToNearest(10) // 20
 * (25).roundToNearest(10) // 30
 * (26).roundToNearest(10) // 30
 */
Number.prototype.roundToNearest = function (multiple: number): number {
    return Math.round(+this / multiple) * multiple;
};
