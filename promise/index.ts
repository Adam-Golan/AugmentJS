/**
 * Returns a new Promise that resolves or rejects with the same value as the original Promise, but with a timeout.
 *
 * @param {number} ms - The number of milliseconds to wait before timing out.
 * @param {string} [timeoutError='Promise timed out'] - The error message to use when the timeout occurs.
 *
 * @returns {Promise<T>} A new Promise that resolves or rejects with the same value as the original Promise, or rejects with a timeout error if the timeout occurs.
 * @example
 *
 * const promise = new Promise((res, rej) => setTimeout(() => res(42), 100));
 * const [error, value] = await promise.timeout(50);
 * console.log(error) // TimeoutError: Promise timed out
 * console.log(value) // undefined
 */
Promise.prototype.timeout = function <T>(ms: number, timeoutError: string = 'Promise timed out'): Promise<T> {
    return Promise.race([
        this,
        new Promise<T>((_, rej) => setTimeout(() => rej(new Error(timeoutError)), ms)),
    ]);
};

/**
 * Catches any errors that occur in the original Promise, calls the provided
 * callback with the error, and then re-throws the error.
 *
 * @param {function} callback - The function to call with the error.
 * @returns {Promise<T>} A new Promise that catches and handles errors.
 */
Promise.prototype.finallyCatch = function <T>(callback: (error: any) => void): Promise<T> {
    return this.catch((error) => {
        callback(error);
        throw error;
    });
};

/**
 * Converts a Promise into a tuple of [error, value] where error is null if the
 * Promise resolves or the error if it rejects.
 *
 * @returns {Promise<[any, T | undefined]>} A Promise that resolves with an array
 * of two elements, the first being the error if the Promise rejects (or null if
 * it resolves) and the second being the resolved value (or undefined if it
 * rejects).
 * @example
 *
 * const promise = new Promise((res, rej) => setTimeout(() => res(42), 100));
 * const [error, value] = await promise.to();
 * console.log(error) // null
 * console.log(value) // 42
 */
Promise.prototype.to = async function <T>(): Promise<[any, T | undefined]> {
    try {
        return [null, await this];
    } catch (error) {
        return [error, undefined];
    }
};

/**
 * Retries a Promise a specified number of times with a delay between retries.
 *
 * @param {number} retries - The number of times to retry the Promise.
 * @param {number} delay - The delay in milliseconds between each retry attempt.
 * @returns {Promise<T>} A new Promise that resolves with the same value as the original Promise, 
 * or rejects with the last error encountered if all retries fail.
 */
Promise.prototype.retry = function <T>(retries: number, delay: number): Promise<T> {
    return new Promise((res, rej) => {
        const attempt = (retriesLeft: number) => {
            this.then(res)
                .catch((error) => {
                    retriesLeft <= 0
                        ? rej(error)
                        : setTimeout(() => attempt(retriesLeft - 1), delay);
                });
        };
        attempt(retries);
    });
};

/**
 * Returns a new Promise that resolves with an array of values from a series of Promises.
 *
 * @param {Array<() => Promise<T>>} promises - An array of functions that return Promises.
 *
 * @returns {Promise<T[]>} - A new Promise that resolves with an array of values.
 */
Promise.prototype.series = function <T>(promises: (() => Promise<T>)[]): Promise<T[]> {
    const results: T[] = [];
    for (const promise of promises) promise().then(result => results.push(result));
    return Promise.resolve(results);
};