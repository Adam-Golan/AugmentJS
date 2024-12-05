# Map Extension

The Map extension adds several useful methods to the built-in Map type.

## Methods

### invert()

Returns a new Map with the keys and values inverted.

Returns a new Map with the inverted keys and values.

### filter(callBack)

Returns a new Map with only the entries that pass the specified callback function.

* `callBack`: The callback function to filter the entries.

Returns a new Map with the filtered entries.

### setMap(keys, values)

Sets multiple key-value pairs in the Map.

* `keys`: The array of keys to set.
* `values`: The array of values to set.

Returns the Map with the new key-value pairs.

### changeKeys(callBack)

Returns a new Map with the keys changed according to the specified callback function.

* `callBack`: The callback function to change the keys.

Returns a new Map with the changed keys.

### changeValues(callBack)

Returns a new Map with the values changed according to the specified callback function.

* `callBack`: The callback function to change the values.

Returns a new Map with the changed values.

### toObject()

Returns a plain object representation of the Map.

Returns a plain object with the same key-value pairs as the Map.

Note: This method only works for Maps with string, number, or symbol keys.