/**
 * Creates a deep copy of the current object.
 *
 * Utilizes the structuredClone function if available, otherwise
 * performs a manual deep copy that supports cloning of nested
 * objects, arrays, Dates, Maps, and Sets.
 *
 * @returns {object} A deep copy of the current object.
 */
Object.prototype.cloneDeep = function (): object {
    if (typeof structuredClone === 'function') return structuredClone(this);
    /**
     * Creates a deep copy of an object or array.
     *
     * Supports nested objects, arrays, Dates, Maps, and Sets.
     *
     * @param obj The object to copy.
     * @returns A deep copy of the object.
     */
    const clone = (obj: any): any => {
        if (obj === null || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map((item) => clone(item));
        if (obj instanceof Date) return new Date(obj);
        if (obj instanceof Map) return new Map(Array.from(obj.entries()).map(([key, value]) => [clone(key), clone(value)]));
        if (obj instanceof Set) return new Set(Array.from(obj).map((item) => clone(item)));
        const clonedObj = Object.create(Object.getPrototypeOf(obj));
        for (const key of Object.keys(obj)) clonedObj[key] = clone(obj[key]);
        return clonedObj;
    };
    return clone(this);
};

/**
 * Returns a boolean indicating whether the current object is empty, i.e. whether
 * it contains any own enumerable properties.
 *
 * @returns {boolean} - A boolean indicating whether the object is empty.
 */
Object.prototype.isEmpty = function (): boolean {
    return !Object.keys(this).length;
};

/**
 * Merges the properties of the source object into the target object, performing
 * a deep merge for nested objects. If a property is an object in both the target
 * and source, the function recursively merges them. Otherwise, properties from
 * the source overwrite those in the target.
 *
 * @param {object} source - The object whose properties are to be merged into
 *                          the current object.
 * @returns {object} - The modified object with merged properties.
 */
Object.prototype.mergeDeep = function (source: object): object {
    /**
     * Recursively merges the properties of the source object into the target
     * object, similar to Object.assign() but for nested objects.
     *
     * @param {object} target - The object into which the properties are to be
     *                          merged.
     * @param {object} source - The object whose properties are to be merged into
     *                          the target object.
     * @returns {object} - The modified target object with merged properties.
     */
    const merge = (target: any, source: any): any => {
        if (source == null || typeof source !== 'object') return target;
        Object.keys(source).forEach((key) => {
            source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])
                ? target[key] = merge(target[key] || {}, source[key])
                : target[key] = source[key];
        });
        return target;
    };
    if (typeof structuredClone === 'function') {
        const clone = structuredClone(this);
        return Object.assign(clone, merge(clone, source));
    }
    return merge(this, source);
};

/**
 * Retrieves the value at the specified path within the object.
 *
 * @template T - The type of the object.
 * @template K - The type of the keys within the object.
 * @param {string} path - A dot-delimited string representing the path of keys
 *                        to traverse in the object.
 * @returns {any} - The value at the specified path, or undefined if the path
 *                  cannot be fully resolved.
 */
Object.prototype.getPath = function <T, K extends keyof T>(this: T, path: string): any {
    const keys = path.split('.') as K[];
    let current: any = this;
    for (const key of keys) {
        if (current == null || !(key in current)) return undefined;
        current = current[key];
    }
    return current;
};

/**
 * Returns a new object with all keys removed that are present in the specified list.
 *
 * @param {string[]} keys - A list of keys to remove from the current object.
 *
 * @returns {object} - A new object without the specified keys.
 */
Object.prototype.omit = function <T>(...keys: (keyof ThisType<T>)[]): object {
    const result = { ...this };
    keys.forEach((key) => delete result[key]);
    return result;
};

/**
 * Returns a new object with only the specified keys.
 *
 * @param {string[]} keys - A list of keys to pick from the current object.
 *
 * @returns {object} - A new object with only the specified keys.
 */
Object.prototype.pick = function <T>(...keys: (keyof ThisType<T>)[]): object {
    return keys.reduce((acc: { [key: string]: any }, key) => {
        if (key in this) acc[key] = this[key];
        return acc;
    }, {});
};