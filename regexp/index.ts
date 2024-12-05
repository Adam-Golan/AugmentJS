/**
 * Returns a Promise that resolves to a boolean indicating whether the regular
 * expression matches the specified string.
 *
 * @param {string} substr - The string to test against.
 * @returns {Promise<boolean>}
 * @example
 *
 * const regex = /hello/
 * regex.testAsync('hello world').then(result => {
 *   console.log(result) // true
 * })
 */
RegExp.prototype.testAsync = function (substr: string): Promise<boolean> {
    return new Promise(res => res(this.test(substr)));
};
