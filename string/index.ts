/**
 * Returns a new string with the first character of each word capitalized.
 *
 * @returns {string}
 * @example
 *
 * 'hello world'.titleCase() // 'Hello World'
 */
String.prototype.titleCase = function (): string {
    return this.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
};

/**
 * Returns a new string with the first character of the string capitalized.
 *
 * @returns {string}
 * @example
 *
 * 'hello'.capitalize() // 'Hello'
 */
String.prototype.capitalize = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Adds spaces to a string based on the specified type.
 *
 * @param {string} type - Type of spacing to add. Accepts 'uppercase', '-', '_', or '/'.
 * @returns {string}
 * @example
 *
 * 'helloWorld'.addSpaces('uppercase') // 'hello World'
 * 'hello-world'.addSpaces('-') // 'hello world'
 * 'hello_world'.addSpaces('_') // 'hello world'
 * 'hello/world'.addSpaces('/') // 'hello world'
 */
String.prototype.addSpaces = function (type: 'uppercase' | '-' | '_' | '/'): string {
    // Fast path for empty strings
    if (!this.length) return '';
    // Separator case
    if (type !== 'uppercase') return this.split(type).join(' ');
    // Uppercase...case
    let result = this[0];
    for (let i = 1; i < this.length; i++) {
        const char = this[i];
        result += (char >= 'A' && char <= 'Z') ? ` ${char}` : char;
    }
    return result;
};

/**
 * Removes all occurrences of a substring from a string.
 *
 * @param {RegExp|string} substr - The substring to remove.
 * @returns {string} A new string with the substring removed.
 * @example
 *
 * 'hello world'.remove('world') // 'hello '
 * 'hello world'.remove(/world/) // 'hello '
 */
String.prototype.remove = function (substr: RegExp | string): string {
    const regex = new RegExp(substr, 'g');
    return this.replace(regex, '');
}

/**
 * Returns a new string in snake_case format.
 *
 * @returns {string}
 * @example
 *
 * 'Hello World'.snakeCase() // 'hello_world'
 * 'helloWorld'.snakeCase() // 'hello_world'
 * 'hello_world'.snakeCase() // 'hello_world'
 * 'hello/world'.snakeCase() // 'hello/world'
 */
String.prototype.snakeCase = function (): string {
    return this.replace(/\W+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
};

/**
 * Returns a new string in kebab-case format.
 *
 * @returns {string}
 * @example
 *
 * 'Hello World'.kebabCase() // 'hello-world'
 * 'helloWorld'.kebabCase() // 'hello-world'
 * 'hello_world'.kebabCase() // 'hello-world'
 * 'hello/world'.kebabCase() // 'hello/world'
 */
String.prototype.kebabCase = function (): string {
    return this.replace(/\W+/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
};

/**
 * Returns a new string with the characters in reverse order.
 *
 * @returns {string}
 * @example
 *
 * 'hello'.reverse() // 'olleh'
 */
String.prototype.reverse = function (): string {
    return this.split('').reverse().join('');
};

/**
 * Checks if the string is a palindrome.
 * 
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 *
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * @example
 *
 * 'A man, a plan, a canal, Panama'.isPalindrome() // true
 * 'hello'.isPalindrome() // false
 */
String.prototype.isPalindrome = function (): boolean {
    const cleaned = this.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.reverse();
};

/**
 * Counts the number of occurrences of a substring within the string.
 *
 * @param {string} substr - The substring to count occurrences of.
 * @returns {number} The number of times the substring appears in the string.
 */
String.prototype.count = function (substr: string): number {
    return (this.match(new RegExp(substr, 'g')) || []).length;
};

/**
 * Returns a new string that is a truncated version of the original.
 * If the original string is longer than the specified length, it will be
 * truncated to the specified length and '...' will be appended to the end.
 * If the original string is shorter than the specified length, the original
 * string will be returned unchanged.
 *
 * @param {number} length The length of the resulting string.
 * @returns {string} The truncated string.
 * @example
 *
 * 'hello world'.truncate(5) // 'hello...'
 * 'hello'.truncate(10) // 'hello'
 */
String.prototype.truncate = function (length: number): string {
    return this.length > length ? `${this.slice(0, length - 3)}...` : `${this}`;
};

/**
 * Returns a new string with all whitespace characters removed and replaced with a single space.
 *
 * @returns {string}
 * @example
 *
 * '   This   is   a   test  '.superTrim() // 'This is a test'
 */
String.prototype.superTrim = function (): string {
    return this.trim().replace(/\s+/g, ' ');
};


/**
 * Returns a new string that is a slice of the original starting from the specified
 * substring and going to the end of the string.
 *
 * @param {string} substr The substring to start the slice from.
 * @returns {string} The sliced string.
 * @example
 *
 * 'hello world'.sliceFrom('world') // 'world'
 * 'hello world'.sliceFrom('foo') // ''
 */
String.prototype.sliceFrom = function (substr: string): string {
    return this.slice(this.indexOf(substr) + substr.length);
}