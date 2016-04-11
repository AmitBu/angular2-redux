export const noop = () => ({});

export function isObject (value) {
 return typeof value === "object";
}

export function isFunction (value) {
  return typeof  value === "function";
}

export function isString (value) {
  return typeof value === 'string'
}

// compare two given objects (shallow)
export function shallowEqual (a, b)  {
  if (a === b) {
    return true;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(b, keysA[i]) || a[keysA[i]] !== b[keysA[i]]) {
      return false;
    }
  }

  return true;
}
