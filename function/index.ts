// Function always starts with Fun!

/**
 * Ensures that a function is only called at most once every specified number
 * of milliseconds. Calls in between are ignored.
 * 
 * @param {number} delay - The minimum time in milliseconds between calls.
 * @returns A new function which wraps the original function, but limits how
 * often it can be called.
 * @example
 * 
 * const foo = (x: number) => console.log(x);
 * const throttledFoo = foo.debounce(1000);
 * throttledFoo(1); // logs 1
 * throttledFoo(2); // ignored
 * throttledFoo(3); // ignored
 * setTimeout(() => throttledFoo(4), 1500); // logs 4
 */
Function.prototype.debounce = function (delay: number): (...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    const func = this;
    const returnFn = (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(returnFn, args), delay);
    }
    return returnFn;
};

/**
 * Ensures that a function is only called at most once every specified number
 * of milliseconds. Calls in between are ignored.
 * 
 * @param {number} delay - The minimum time in milliseconds between calls.
 * @returns A new function which wraps the original function, but limits how
 * often it can be called.
 * @example
 *
 * const foo = (x: number) => console.log(x);
 * const throttledFoo = foo.throttle(1000);
 * throttledFoo(1); // logs 1
 * throttledFoo(2); // ignored
 * throttledFoo(3); // ignored
 * setTimeout(() => throttledFoo(4), 1500); // logs 4
 */
Function.prototype.throttle = function (delay: number): (...args: any[]) => void {
    let lastCall = 0;
    const func = this;
    const returnFn = (...args: any[]) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(returnFn, args);
        }
    };
    return returnFn;
};

/**
 * Ensures that a function is only called once. Subsequent calls will have no effect.
 * 
 * @returns {Function} A new function that wraps the original function and ensures it is only called once.
 * @example
 * 
 * const initialize = () => console.log('Initialized');
 * const initializeOnce = initialize.once();
 * initializeOnce(); // 'Initialized'
 * initializeOnce(); // No effect
 */
Function.prototype.once = function (): (...args: any[]) => any {
    let called = false;
    const func = this;

    const returnFn = (...args: any[]) => {
        if (!called) {
            called = true;
            return func.apply(returnFn, args);
        }
    };
    return returnFn;
};