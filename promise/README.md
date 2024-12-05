# Promise Extension

The Promise extension adds several useful methods to the built-in Promise type.

## Methods

### timeout(ms, timeoutError)

Returns a new Promise that resolves or rejects with the same value as the original Promise, but with a timeout.

* `ms`: The number of milliseconds to wait before timing out.
* `timeoutError`: The error message to use when the timeout occurs. Defaults to `'Promise timed out'`.

Returns a new Promise that resolves or rejects with the same value as the original Promise, or rejects with a timeout error if the timeout occurs.

### finallyCatch(callback)

Returns a new Promise that catches any errors that occur in the original Promise, calls the provided callback with the error, and then re-throws the error.

* `callback`: The function to call with the error.

Returns a new Promise that catches and handles errors.

### to()

Returns a new Promise that resolves with an array containing either an error and `undefined`, or `null` and the resolved value.

Returns a new Promise that resolves with an array containing either an error or the resolved value.

### retry(retries, delay)

Returns a new Promise that retries the original Promise a specified number of times, with a delay between retries.

* `retries`: The number of times to retry the Promise.
* `delay`: The number of milliseconds to wait between retries.

Returns a new Promise that retries the original Promise.

### series(promises)

Returns a new Promise that resolves with an array of values from a series of Promises.

* `promises`: An array of functions that return Promises.

Returns a new Promise that resolves with an array of values.