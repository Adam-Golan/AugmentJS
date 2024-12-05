/**
 * Returns a new Map where each key-value pair in the original Map is inverted,
 * such that keys become values and values become keys.
 *
 * @returns {Map<V, K>} A new Map with inverted key-value pairs.
 */
Map.prototype.invert = function <K, V>(): Map<V, K> {
    const inverted = new Map<V, K>();
    for (const [key, value] of this) inverted.set(value, key);
    return inverted;
};

/**
 * Creates a new Map with all elements that pass the test implemented by the
 * provided function. The callback function is called with three arguments:
 * the value of the element, the key of the element, and the Map object being
 * processed.
 *
 * @param {Function} callback The function to test each element of the Map.
 * @returns {Map<K, V>} A new Map with all elements that pass the test.
 */
Map.prototype.filter = function <K, V>(callback: (value: V, key: K, map: Map<K, V>) => boolean): Map<K, V> {
    const filtered = new Map<K, V>();
    for (const [key, value] of this) if (callback(value, key, this)) filtered.set(key, value);
    return filtered;
};

/**
 * Sets multiple key-value pairs in the Map. If any keys or values are not
 * arrays, a TypeError is thrown. If the arrays are not of equal length, an
 * Error is thrown.
 *
 * @param {K[]} keys The array of keys to set.
 * @param {V[]} values The array of values to set.
 * @returns {Map<K, V>} The Map with the new key-value pairs set.
 */
Map.prototype.setMap = function <K, V>(keys: K[], values: V[]): Map<K, V> {
    if (!Array.isArray(keys) || !Array.isArray(values)) throw new TypeError('Both keys and values must be arrays.');
    if (keys.length !== values.length) throw new Error('Keys and values arrays must have the same length.');
    for (let idx = 0; idx < keys.length; idx++) this.set(keys[idx], values[idx]);
    return this;
}

/**
 * Returns a new Map where each key in the original Map is replaced with the
 * result of calling the provided callback function. The callback function takes
 * three arguments: the current key, the current value, and the Map itself.
 * @param callback A function that takes the current key, value, and Map as
 * arguments, and returns the new key for the value.
 * @returns A new Map with the modified keys.
 */
Map.prototype.changeKeys = function <K, V>(callback: (key: K, value: V, map: Map<K, V>) => K): Map<K, V> {
    const newMap = new Map<K, V>();
    for (const [key, value] of this) newMap.set(callback(key, value, this), value);
    return newMap;
};

/**
 * Returns a new Map where each value in the original Map is replaced with the
 * result of calling the provided callback function. The callback function takes
 * three arguments: the current value, the current key, and the Map itself.
 * 
 * @param {Function} callback A function that takes a value, key, and Map as arguments
 * and returns a new value.
 * @returns {Map<K, V>} A new Map with the modified values.
 */
Map.prototype.changeValues = function <K, V>(callback: (key: K, value: V, map: Map<K, V>) => V): Map<K, V> {
    const newMap = new Map<K, V>();
    for (const [key, value] of this) newMap.set(key, callback(value, key, this));
    return newMap;
};

/**
 * Converts the Map to an object where each key-value pair in the Map
 * becomes a property-value pair in the object.
 * 
 * @returns {Record<K, V>} An object representation of the Map.
 */
Map.prototype.toObject = function <K extends string | number | symbol, V>(this: Map<K, V>): Record<K, V> {
    const obj = {} as Record<K, V>;
    for (const [key, value] of this) obj[key] = value;
    return obj;
};
