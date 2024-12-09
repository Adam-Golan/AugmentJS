/**
 * Creates a cached version of the provided function.
 *
 * @template T - The type of the function to be cached.
 * @param {T} fn - The function to be cached.
 * @returns {T} - The cached version of the function.
 *
 * @example
 *
 * function expensiveComputation(x: number, y: number): number {
 *   return x + y;
 * }
 *
 * const cachedExpensiveComputation = cacheFunction(expensiveComputation);
 *
 * console.log(cachedExpensiveComputation(1, 2)); // 3
 * console.log(cachedExpensiveComputation(3, 4)); // 7
 * console.log(cachedExpensiveComputation(1, 2)); // 3 (cached result returned)
 */
export function cacheFunction<T = any, R = any>(fn: (...args: T[]) => R): (...args: T[]) => R {
  if (!fn) throw new Error('fn is required');
  const cache = new Map<string, R>();
  return function (...args: T[]): R {
    const key = `${fn.name}:${args.toString()}`;
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  };
}