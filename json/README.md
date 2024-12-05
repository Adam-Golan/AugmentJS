# JSON Extension

The JSON extension adds several useful methods to the built-in JSON object.

## Methods

### safeParse(jsonString, defaultValue)

Parses a JSON string and returns the resulting object, or a default value if the parsing fails.

* `jsonString`: The JSON string to parse.
* `defaultValue`: The default value to return if the parsing fails.

Returns the parsed object or the default value.

### deepCopy(obj)

Creates a deep copy of an object by serializing it to a JSON string and then parsing it back into an object.

* `toCopy`: The object to copy.

Returns a deep copy of the object.

### pretty(value, indent)

Returns a pretty-printed JSON string representation of an object.

* `value`: The object to pretty-print.
* `indent`: The number of spaces to use for indentation (defaults to 2).

Returns a pretty-printed JSON string.