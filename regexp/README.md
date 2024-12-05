# RegExp Extension

The RegExp extension adds a single useful method to the built-in RegExp type.

## Methods

### testAsync(substr)

Returns a Promise that resolves to a boolean indicating whether the regular expression matches the specified string.

* `substr`: The string to test against.

Returns a Promise that resolves to `true` if the regular expression matches the string, and `false` otherwise.

Note: This method is an asynchronous version of the built-in `test()` method, allowing for easier use in asynchronous code.