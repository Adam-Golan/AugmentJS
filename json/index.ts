/**
 * Parses a JSON string and returns the resulting object, or a default value if the parsing fails.
 *
 * @param {string} jsonString The JSON string to parse.
 * @param {T} defaultValue The default value to return if the parsing fails.
 * @returns {T} The parsed object or the default value.
 * @example
 *
 * const json = '{ "foo": "bar" }';
 * const obj = JSON.safeParse(json, { foo: 'baz' });
 * console.log(obj); // { foo: "bar" }
 *
 * const invalidJson = '{';
 * const obj2 = JSON.safeParse(invalidJson, { foo: 'baz' });
 * console.log(obj2); // { foo: "baz" }
 */
JSON.safeParse = function <T>(jsonString: string, defaultValue: T): T {
    try {
        return JSON.parse(jsonString);
    } catch {
        return defaultValue;
    }
};

/**
 * Creates a deep copy of an object by serializing it to a JSON string and then parsing it back into an object.
 *
 * @param {T} toCopy The object to copy.
 * @returns {T} A deep copy of the object.
 */
JSON.deepCopy = function <T>(toCopy: T): T {
    return JSON.parse(JSON.stringify(toCopy));
};

/**
 * Returns a pretty-printed JSON string representation of an object.
 *
 * @param {any} value The object to pretty-print.
 * @param {number} [indent=2] The number of spaces to use for indentation.
 * @returns {string} A pretty-printed JSON string.
 * @example
 *
 * const obj = { foo: 'bar' };
 * const json = JSON.pretty(obj, 4);
 * console.log(json); // {
 *   //    "foo": "bar"
 *   // }
 */
JSON.pretty = function (value: any, indent: number = 2): string {
    return JSON.stringify(value, null, indent);
};
