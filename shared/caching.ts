/**
 * Enhances an object by adding caching functionality to its methods.
 * 
 * This function wraps the methods of the given object in a Proxy, caching
 * their results based on the arguments passed. If a method is called again
 * with the same arguments, the cached result is returned instead of calling
 * the method again.
 * 
 * @param obj - The object whose methods will be enhanced with caching.
 */
function addCaching<T extends object>(obj: T): void {
    const cache = new Map<string, any>();
    const cachedMethods = new Proxy(obj, {
      /**
       * Caches the result of a method call with the given arguments. If the method
       * is called again with the same arguments, the cached result is returned
       * instead of calling the method again.
       *
       * @param target The object that contains the method.
       * @param prop The name of the method to cache.
       * @returns A function that calls the original method, caches the result, and
       * returns the cached result if the method is called again with the same
       * arguments.
       */
      get(target, prop) {
        if (typeof target[prop] === 'function') {
          return function (...args: any[]) {
            const key = JSON.stringify({ prop, args });
            if (cache.has(key)) {
              return cache.get(key);
            } else {
              const result = target[prop](...args);
              cache.set(key, result);
              return result;
            }
          };
        } else {
          return target[prop];
        }
      },
    });
    Object.setPrototypeOf(obj, cachedMethods);
  }

  addCaching(String.prototype);
  addCaching(Number.prototype);
  addCaching(BigInt.prototype);
  addCaching(Array.prototype);
  addCaching(Object.prototype);
  addCaching(Function.prototype);
  addCaching(Promise.prototype);
  addCaching(JSON);
  addCaching(Date.prototype);
  addCaching(Set.prototype);
  addCaching(Map.prototype);
  addCaching(RegExp.prototype);