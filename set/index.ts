/**
 * Returns a new Set containing all elements from the current set and the given set.
 * @param set The set to compute the union with.
 * @returns A new Set containing all elements from both the current set and the given set.
 */
Set.prototype.union = function <T>(set: Set<T>): Set<T> {
    return new Set([...this, ...set]);
};

/**
 * Returns a new Set containing all elements that are common to both the current set and the given set.
 * @param set The set to compute the intersection with.
 * @returns A new Set containing all elements that are present in both the current set and the given set.
 */
Set.prototype.intersect = function <T>(set: Set<T>): Set<T> {
    return new Set([...this].filter((item) => set.has(item)));
};

/**
 * Computes the difference of the current set and the given set.
 * @param set The set to compute the difference with.
 * @returns A new Set containing all elements that are in the current set but not in the given set.
 */
Set.prototype.diff = function <T>(set: Set<T>): Set<T> {
    return new Set([...this].filter((item) => !set.has(item)));
};


/**
 * Determines whether the current set is a subset of the given set.
 * @param set The set to compare with.
 * @returns `true` if all elements of the current set are in the given set, `false` otherwise.
 */
Set.prototype.isSubset = function <T>(set: Set<T>): boolean {
    return [...this].every((item) => set.has(item));
};
/**
 * Returns a new Set containing all elements that are in either of the two sets, but not in their intersection.
 * @param set The set to compute the symmetric difference with.
 * @returns A new Set containing all elements that are in either of the two sets, but not in their intersection.
 */

Set.prototype.symmetricDiff = function <T>(set: Set<T>): Set<T> {
    return new Set([...this.diff(set), ...set.diff(this)]);
};
