# String Extension

The String extension adds several useful methods to the built-in String type.

## Methods

### capitalize()

Returns a new string with the first character of each word capitalized.

### titleCase()

Returns a new string with the first character of each word capitalized, and the rest of the word in lowercase.

### addSpaces(type)

Adds spaces to a string based on the specified type.

* `type`: One of `'uppercase'`, `'-'`, `'_'`, or `'/'`. Specifies where to add spaces.

Returns a new string with spaces added.

### remove(substr)

Removes all occurrences of a substring from a string.

* `substr`: The substring to remove.

Returns a new string with the substring removed.

### snakeCase()

Returns a new string in snake_case format.

### kebabCase()

Returns a new string in kebab-case format.

### reverse()

Returns a new string with the characters reversed.

### superTrim()

Returns a new string with all whitespace characters removed.

### isPalindrome()

Returns a boolean indicating whether the string is a palindrome.

### count(substr)

Returns the number of occurrences of a substring in a string.

* `substr`: The substring to count.

Returns a number representing the count.

### truncate(len)

Truncates a string to a specified length.

* `length`: The length to truncate to.

Returns a new string truncated to the specified length.