Object.defineProperty(Array.prototype, 'last', {
    /**
     * Gets the last element of the array.
     *
     * @returns {*} The last element of the array.
     */
    get: function () {
        return this[this.length - 1];
    },
    /**
     * Sets the last element of the array to the given value.
     *
     * @param value The new value for the last element.
     */
    set: function (value: any) {
        this[this.length - 1] = value;
    },
    configurable: false,
    enumerable: false
});
Object.defineProperty(Array.prototype, 'first', {
    /**
     * Returns the first element of the array.
     *
     * @returns The first element of the array.
     */
    get() {
        return this[0];
    },
    /**
     * Sets the first element of the array to the given value.
     *
     * @param value The new value for the first element.
     */
    set: function (value: any) {
        this[0] = value;
    },
    configurable: false,
    enumerable: false,
});

/**
 * Calculates the average of all numerical elements in the array.
 *
 * @returns {number} The average value of the array elements. If the array is empty, returns NaN.
 * @example
 *
 * [1, 2, 3, 4, 5].avg() // 3
 * [].avg() // NaN
 */
Array.prototype.avg = function (): number {
    return this.reduce((sum, val) => sum + val, 0) / this.length;
};

/**
 * Splits the array into chunks of the given size. The last chunk will
 * be smaller if the array length is not divisible by the chunk size.
 *
 * @param {number} size The size of each chunk.
 * @returns {T[][]} An array of arrays, each of which is a chunk of the
 * original array.
 */
Array.prototype.chunk = function (size: number) {
    return Array.from({ length: Math.ceil(this.length / size) }, (_, i) =>
        this.slice(i * size, i * size + size)
    );
};

/**
 * Returns an array with duplicate elements removed.
 *
 * @returns {T[]} The array with unique elements.
 */
Array.prototype.unique = function () {
    return [...new Set(this)];
};

/**
 * Removes the first occurrence of a specified value from the array.
 *
 * @param {T} value - The value to remove.
 *
 * @returns {this} The modified array.
 */
Array.prototype.remove = function <T>(value: T) {
    const idx = this.indexOf(value);
    if (idx > -1) this.splice(idx, 1);
    return this;
};

/**
 * Randomly shuffles the elements of the array in place and returns the same array.
 *
 * @returns {this} The same array with its elements shuffled.
 * @example
 *
 * const arr = [1, 2, 3];
 * arr.shuffle();
 * console.log(arr); // [3, 1, 2] or [2, 3, 1] or [1, 2, 3]
 */
Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};

/**
 * Groups the elements of the array based on the return value of the callback function.
 * 
 * @param callBack A function that takes an array element and returns a key.
 * @returns An object with the group keys as properties and the grouped elements as values.
 */

Array.prototype.groupBy = function <T>(callBack: (item: T) => keyof T): { [k: string]: T[] } {
    return this.reduce((acc, val) => {
        const key = callBack(val);
        (acc[key] = acc[key] || []).push(val);
        return acc;
    }, {});
};

/**
 * Groups the elements of the array based on the return value of the callback function and counts
 * the number of elements in each group.
 *
 * @param {Function} callBack - A function that takes an element of the array and returns a key
 * used for grouping.
 * @returns {{ [k: string]: number }} - An object where each key is a group identifier and the value
 * is the count of elements in that group.
 */
Array.prototype.countBy = function <T>(callBack: (item: T) => keyof T): { [k: string]: number } {
    return this.reduce((acc, val) => {
        const key = callBack(val);
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {} as Record<string | number, number>);
};


/**
 * Returns a new array containing all elements that are present in the current array but not in the given array.
 * @param {any[]} array - The array to compare against.
 * @returns {T[]} - A new array containing elements that are unique to the current array.
 */
Array.prototype.diff = function (array: any[]) {
    return this.filter(x => !array.includes(x));
};

/**
 * Returns a new array containing all elements that are common to both the current array and the given array.
 * @param {any[]} array - The array to compute the intersection with.
 * @returns {T[]} - A new array containing all elements that are present in both the current array and the given array.
 */
Array.prototype.intersect = function (array: any[]) {
    return this.filter(x => array.includes(x));
};

/**
 * Rotates the elements of the array by the specified number of steps.
 * A positive step moves elements to the right, while a negative step
 * moves elements to the left. The rotation is circular, so elements
 * that are shifted out of the array bounds are reintroduced at the
 * opposite end.
 * 
 * @param {number} steps - The number of positions to rotate the array.
 * @returns {T[]} - The rotated array.
 */
Array.prototype.rotate = function <T>(steps: number): T[] {
    const len = this.length;
    const normalizedSteps = ((steps % len) + len) % len; // Handle negative or large steps
    return this.slice(normalizedSteps).concat(this.slice(0, normalizedSteps));
};