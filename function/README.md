# Function Extension

The Function extension adds several useful methods to the built-in Function type.

## Methods

### debounce(delay)

Returns a debounced version of the function, which delays its execution by a specified amount of time.

* `delay`: The number of milliseconds to delay the execution.

Returns a debounced function.

### throttle(delay)

Returns a throttled version of the function, which limits its execution to a specified rate.

* `delay`: The number of milliseconds to wait between executions.

Returns a throttled function.

### once()

Returns a version of the function that can only be called once.

Returns a function that can only be called once.

Note: After the function is called once, subsequent calls will have no effect.