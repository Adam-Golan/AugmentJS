# Number Extension

The Number extension adds several useful methods to the built-in Number type.

## Methods

### isEven()

Returns a boolean indicating whether the number is even.

Returns `true` if the number is even, `false` otherwise.

### isOdd()

Returns a boolean indicating whether the number is odd.

Returns `true` if the number is odd, `false` otherwise.

### clamp(min, max)

Returns a number clamped to a specified range.

* `min`: The minimum value of the range.
* `max`: The maximum value of the range.

Returns the clamped number.

### toOrdinal()

Returns a string representing the number as an ordinal (e.g. "1st", "2nd", etc.).

Returns the ordinal string.

### isPrime()

Returns a boolean indicating whether the number is prime.

Returns `true` if the number is prime, `false` otherwise.

### factorial()

Returns the factorial of the number.

Returns the factorial number.

### toRoman()

Returns a string representing the number as a Roman numeral.

Returns the Roman numeral string, or `null` if the number is out of range.

### toCurrency(locale, currency)

Returns a string representing the number as a currency value.

* `locale`: The locale to use for formatting (defaults to "en-US").
* `currency`: The currency to use for formatting (defaults to "USD").

Returns the formatted currency string.

### roundToNearest(multiple)

Returns a number rounded to the nearest multiple of a specified value.

* `multiple`: The multiple to round to.

Returns the rounded number.