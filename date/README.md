# Date Extension

The Date extension adds several useful methods to the built-in Date type.

## Methods

### getTimeDiff(date)

Returns an object containing the time difference between the current date and the specified date.

* `date`: The date to compare with.

Returns an object with the following properties:
* `timeDiff`: The time difference in seconds.
* `seconds`: The time difference in seconds.
* `minutes`: The time difference in minutes.
* `hours`: The time difference in hours.
* `duration`: A string representation of the time difference in the format "HH:MM:SS".

### isLeapYear()

Returns a boolean indicating whether the current year is a leap year.

Returns `true` if the year is a leap year, `false` otherwise.

### add(type, value)

Adds a specified amount of time to the current date.

* `type`: The type of time to add (either "y" for years, "m" for months, or "d" for days).
* `value`: The amount of time to add.

Returns a new Date object with the added time.

### subtract(type, value)

Subtracts a specified amount of time from the current date.

* `type`: The type of time to subtract (either "y" for years, "m" for months, or "d" for days).
* `value`: The amount of time to subtract.

Returns a new Date object with the subtracted time.

### isSameDay(date)

Returns a boolean indicating whether the current date is the same day as the specified date.

* `date`: The date to compare with.

Returns `true` if the dates are the same day, `false` otherwise.

### daysBetween(date)

Returns the number of days between the current date and the specified date.

* `date`: The date to compare with.

Returns the number of days between the dates.

### toISODateString()

Returns a string representation of the current date in the format "YYYY-MM-DD".

Returns the ISO date string.