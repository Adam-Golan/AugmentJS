function addCaching<T extends object>(obj: T): void {
    const cache = new Map<string, any>();
    const cachedMethods = new Proxy(obj, {
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