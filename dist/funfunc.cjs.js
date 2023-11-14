'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Curry function to transform a function that takes multiple arguments
 * into a series of functions.
 * @param {Function} fn - The function to be curried.
 * @returns {Function} - The curried version of the original function.
 */
function curry(fn) {
  var arity = fn.length;
  return function curriedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length >= arity) {
      return fn.apply(void 0, args);
    }
    return function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curriedFunction.apply(void 0, args.concat(nextArgs));
    };
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Creates a partially applied function from the provided function.
 * The partial function allows arguments to be applied one at a time.
 *
 * @param {Function} fn - The function to partially apply.
 * @param {Array} fixedArgs - An array of arguments that should be held fixed in the resulting partial function.
 * @returns {Function} A new partially applied function that can take the next argument or be executed if all arguments are provided.
 */
function partial(fn) {
  function partialApplied() {
    for (var _len2 = arguments.length, currentArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      currentArgs[_key2] = arguments[_key2];
    }
    return function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      var allArgs = [].concat(currentArgs, nextArgs);
      var arity = fn.length;
      if (allArgs.length >= arity) {
        return fn.apply(void 0, _toConsumableArray(allArgs));
      } else {
        return partialApplied.apply(void 0, _toConsumableArray(allArgs));
      }
    };
  }
  for (var _len = arguments.length, fixedArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fixedArgs[_key - 1] = arguments[_key];
  }
  return partialApplied.apply(void 0, fixedArgs);
}

/**
 * Creates a new function that invokes the provided function with the first two arguments reversed,
 * while maintaining the context and the rest of the arguments in their original order.
 *
 * @param {Function} fn - The function to flip arguments for.
 * @returns {Function} A new function with the first two arguments of the input function flipped.
 */
function flip(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length < 2) {
      throw new Error('flip function requires at least two arguments to be passed to the flipped function.');
    }
    return fn.apply(void 0, [args[1], args[0]].concat(_toConsumableArray(args.slice(2))));
  };
}

/**
 * Creates a function that is the negation of the provided predicate function.
 * The predicate function can take any number of arguments and returns a boolean value.
 *
 * @param {Function} fn - A predicate function to negate. This function can accept any number of arguments.
 * @returns {Function} A new function that, when called with any number of arguments, will return the negation
 *                     of the original predicate function's result.
 */
function not(fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
}

/**
 * Creates a function that is the composition of the provided functions.
 * Each function consumes the return value of the function that follows.
 * In math terms, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
 * The rightmost function may have any arity; the remaining functions must be unary.
 *
 * @param {...Function} fns - A series of functions to compose.
 * @returns {Function} A function obtained by composing the argument functions from right to left.
 *                     The rightmost function can take multiple arguments, as it provides
 *                     the signature for the resulting composed function.
 */
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return fns.reduceRight(function (result, fn, index) {
      return index === fns.length - 1 ? fn.apply(void 0, _toConsumableArray(result)) : fn(result);
    }, args);
  };
}

/**
 * Reverses the order of the elements in the provided array without mutating the original array.
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} A new array containing the elements of the original array in reverse order.
 */
function reverse(arr) {
  return arr.slice().reverse();
}

/**
 * Creates a function that is the composition of the provided functions, where each function
 * is executed with the return value of the function that preceded it. The execution order
 * is from left to right, which is a reverse of `compose`. The first function in the sequence
 * can accept any number of arguments; the remaining functions should be unary.
 *
 * @param {...Function} fns - A series of functions to pipe.
 * @returns {Function} A function obtained by piping the input functions from left to right.
 */
function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return compose.apply(void 0, _toConsumableArray(reverse(fns)));
}

/**
 * Applies a transducer to transform a collection using a reducer function.
 * @param {Function} transducer - A function that takes a reducer and returns a new reducer.
 * @param {Function} reducer - A reducer function that accumulates results.
 * @param {*} init - The initial value of the accumulator.
 * @param {Array} collection - The array to transduce over.
 * @returns {*} The final, accumulated value.
 */
function transduce(transducer, reducer, init, collection) {
  var transformedReducer = transducer(reducer);
  return collection.reduce(transformedReducer, init);
}

/**
 * Creates a transducer that filters values based on a predicate function.
 *
 * @param {Function} filterFn - The predicate function to determine if a value should be included.
 * @returns {Function} A transducer function that takes a reducer and returns a new reducer
 *                     that includes values only if they satisfy the predicate function.
 */
function filterTransducer(filterFn) {
  return function (reducer) {
    return function (accumulator, value) {
      if (filterFn(value)) {
        return reducer(accumulator, value);
      } else {
        return accumulator;
      }
    };
  };
}

/**
 * Creates a transducer that applies a mapping function to each value.
 *
 * @param {Function} mapFn - The function to apply to each value.
 * @returns {Function} A transducer function that takes a reducer and returns a new reducer
 *                     that applies the mapping function to each value before accumulating.
 */
function mapTransducer(mapFn) {
  return function (reducer) {
    return function (accumulator, value) {
      return reducer(accumulator, mapFn(value));
    };
  };
}

/**
 * Creates a memoized version of the provided function.
 *
 * @param {Function} fn - The function to memoize.
 * @returns {Function} A new function that caches the results of calling `fn` with a given set of arguments.
 */
function memoize(fn) {
  var cache = new Map();
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      var value = fn.apply(void 0, args);
      cache.set(key, value);
      return value;
    }
  };
}

exports.compose = compose;
exports.curry = curry;
exports.filterTransducer = filterTransducer;
exports.flip = flip;
exports.mapTransducer = mapTransducer;
exports.memoize = memoize;
exports.not = not;
exports.partial = partial;
exports.pipe = pipe;
exports.reverse = reverse;
exports.tranduce = transduce;
