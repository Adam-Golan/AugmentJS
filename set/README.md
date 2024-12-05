# Set Extension

The Set extension adds several useful methods to the built-in Set type.

## Methods

### union(set)

Returns a new Set containing all elements from the current Set and the specified Set.

* `set`: The Set to union with.

Returns a new Set containing all unique elements.

### intersect(set)

Returns a new Set containing all elements that are present in both the current Set and the specified Set.

* `set`: The Set to intersect with.

Returns a new Set containing the common elements.

### diff(set)

Returns a new Set containing all elements that are present in the current Set but not in the specified Set.

* `set`: The Set to find the difference with.

Returns a new Set containing the unique elements.

### isSubset(set)

Returns a boolean indicating whether the current Set is a subset of the specified Set.

* `set`: The Set to check against.

Returns a boolean indicating whether the current Set is a subset.

### symmetricDiff(set)

Returns a new Set containing all elements that are present in either the current Set or the specified Set, but not in both.

* `set`: The Set to find the symmetric difference with.

Returns a new Set containing the unique elements.