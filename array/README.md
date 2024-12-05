# Array Extension

The Array extension adds several useful methods to the built-in Array type.

## Properties

### last

Gets or sets the last element of the array.

### first

Gets or sets the first element of the array.

## Methods

### avg()

Returns the average value of the array.

Returns the average number.

### chunk(size)

Divides the array into chunks of a specified size.

* `size`: The size of each chunk.

Returns an array of chunks.

### unique()

Returns an array with duplicate elements removed.

Returns an array with unique elements.

### remove(value)

Removes the first occurrence of a specified value from the array.

* `value`: The value to remove.

Returns the modified array.

### shuffle()

Randomly rearranges the elements of the array.

Returns the shuffled array.

### groupBy(callBack)

Groups the elements of the array by a specified function.

* `callBack`: The function to group by.

Returns an object with grouped elements.

### countBy(callBack)

Counts the occurrences of each element in the array by a specified function.

* `callBack`: The function to count by.

Returns an object with counts.

### diff(array)

Returns an array with elements that are not in another array.

* `array`: The array to compare with.

Returns an array with unique elements.

### intersect(array)

Returns an array with elements that are common to another array.

* `array`: The array to compare with.

Returns an array with common elements.

### rotate(steps)

Rotates the elements of the array by a specified number of steps.

* `steps`: The number of steps to rotate.

Returns the rotated array.