'use strict';
/**
 * Created by jiuzhou.zhang on 17/2/2.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validators;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = {
  undefined: 'undefined',
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  array: 'array',
  object: 'object',
  function: 'function',
  element: 'element'
};

var validators = (_validators = {}, _defineProperty(_validators, types.array, function (value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.prototype.toString.call(value) === '[object Array]';
}), _defineProperty(_validators, types.object, function (value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.prototype.toString.call(value) !== '[object Array]';
}), _defineProperty(_validators, types.element, function (value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.prototype && typeof value.render === 'function';
}), _validators);

function isTypeOf(value, type) {
  var func = validators[type];
  if (func) {
    return func(value);
  } else {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === type;
  }
}

function isUndefined(value) {
  return isTypeOf(value, types.undefined);
}

function isString(value) {
  return isTypeOf(value, types.string);
}

function isNumber(value) {
  return isTypeOf(value, types.number);
}

function isBool(value) {
  return isTypeOf(value, types.boolean);
}

function isArray(value) {
  return isTypeOf(value, types.array);
}

function isObject(value) {
  return isTypeOf(value, types.object);
}

function isFunction(value) {
  return isTypeOf(value, types.function);
}

function isOneOf(value, values) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      if (val === value) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

exports.types = types;
exports.isTypeOf = isTypeOf;
exports.isUndefined = isUndefined;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBool = isBool;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isOneOf = isOneOf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInVuZGVmaW5lZCIsInN0cmluZyIsIm51bWJlciIsImJvb2xlYW4iLCJhcnJheSIsIm9iamVjdCIsImZ1bmN0aW9uIiwiZWxlbWVudCIsInZhbGlkYXRvcnMiLCJ2YWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInJlbmRlciIsImlzVHlwZU9mIiwidHlwZSIsImZ1bmMiLCJpc1VuZGVmaW5lZCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0Jvb2wiLCJpc0FycmF5IiwiaXNPYmplY3QiLCJpc0Z1bmN0aW9uIiwiaXNPbmVPZiIsInZhbHVlcyIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxRQUFRO0FBQ1pDLGFBQVcsV0FEQztBQUVaQyxVQUFRLFFBRkk7QUFHWkMsVUFBUSxRQUhJO0FBSVpDLFdBQVMsU0FKRztBQUtaQyxTQUFPLE9BTEs7QUFNWkMsVUFBUSxRQU5JO0FBT1pDLFlBQVUsVUFQRTtBQVFaQyxXQUFTO0FBUkcsQ0FBZDs7QUFXQSxJQUFNQyw2REFDSFQsTUFBTUssS0FESCxFQUNXLFVBQUNLLEtBQUQsRUFBVztBQUN4QixTQUFPLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsSUFBNkJDLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosS0FBL0IsTUFBMEMsZ0JBQTlFO0FBQ0QsQ0FIRyxnQ0FJSFYsTUFBTU0sTUFKSCxFQUlZLFVBQUNJLEtBQUQsRUFBVztBQUN6QixTQUFPLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsSUFBNkJDLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosS0FBL0IsTUFBMEMsZ0JBQTlFO0FBQ0QsQ0FORyxnQ0FPSFYsTUFBTVEsT0FQSCxFQU9hLFVBQUNFLEtBQUQsRUFBVztBQUMxQixTQUFPLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBakIsSUFBNkJBLE1BQU1FLFNBQW5DLElBQWdELE9BQU9GLE1BQU1LLE1BQWIsS0FBd0IsVUFBL0U7QUFDRCxDQVRHLGVBQU47O0FBWUEsU0FBU0MsUUFBVCxDQUFtQk4sS0FBbkIsRUFBMEJPLElBQTFCLEVBQWdDO0FBQzlCLE1BQUlDLE9BQU9ULFdBQVdRLElBQVgsQ0FBWDtBQUNBLE1BQUlDLElBQUosRUFBVTtBQUNSLFdBQU9BLEtBQUtSLEtBQUwsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQk8sSUFBeEI7QUFDRDtBQUNGOztBQUVELFNBQVNFLFdBQVQsQ0FBc0JULEtBQXRCLEVBQTZCO0FBQzNCLFNBQU9NLFNBQVNOLEtBQVQsRUFBZ0JWLE1BQU1DLFNBQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFTbUIsUUFBVCxDQUFtQlYsS0FBbkIsRUFBMEI7QUFDeEIsU0FBT00sU0FBU04sS0FBVCxFQUFnQlYsTUFBTUUsTUFBdEIsQ0FBUDtBQUNEOztBQUVELFNBQVNtQixRQUFULENBQW1CWCxLQUFuQixFQUEwQjtBQUN4QixTQUFPTSxTQUFTTixLQUFULEVBQWdCVixNQUFNRyxNQUF0QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU21CLE1BQVQsQ0FBaUJaLEtBQWpCLEVBQXdCO0FBQ3RCLFNBQU9NLFNBQVNOLEtBQVQsRUFBZ0JWLE1BQU1JLE9BQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFTbUIsT0FBVCxDQUFrQmIsS0FBbEIsRUFBeUI7QUFDdkIsU0FBT00sU0FBU04sS0FBVCxFQUFnQlYsTUFBTUssS0FBdEIsQ0FBUDtBQUNEOztBQUVELFNBQVNtQixRQUFULENBQW1CZCxLQUFuQixFQUEwQjtBQUN4QixTQUFPTSxTQUFTTixLQUFULEVBQWdCVixNQUFNTSxNQUF0QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU21CLFVBQVQsQ0FBcUJmLEtBQXJCLEVBQTRCO0FBQzFCLFNBQU9NLFNBQVNOLEtBQVQsRUFBZ0JWLE1BQU1PLFFBQXRCLENBQVA7QUFDRDs7QUFFRCxTQUFTbUIsT0FBVCxDQUFrQmhCLEtBQWxCLEVBQXlCaUIsTUFBekIsRUFBaUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDL0IseUJBQWdCQSxNQUFoQiw4SEFBd0I7QUFBQSxVQUFmQyxHQUFlOztBQUN0QixVQUFJQSxRQUFRbEIsS0FBWixFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDtBQUNGO0FBTDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTS9CLFNBQU8sS0FBUDtBQUNEOztRQUdDVixLLEdBQUFBLEs7UUFDQWdCLFEsR0FBQUEsUTtRQUNBRyxXLEdBQUFBLFc7UUFDQUMsUSxHQUFBQSxRO1FBQ0FDLFEsR0FBQUEsUTtRQUNBQyxNLEdBQUFBLE07UUFDQUMsTyxHQUFBQSxPO1FBQ0FDLFEsR0FBQUEsUTtRQUNBQyxVLEdBQUFBLFU7UUFDQUMsTyxHQUFBQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4vKipcbiAqIENyZWF0ZWQgYnkgaml1emhvdS56aGFuZyBvbiAxNy8yLzIuXG4gKi9cblxuY29uc3QgdHlwZXMgPSB7XG4gIHVuZGVmaW5lZDogJ3VuZGVmaW5lZCcsXG4gIHN0cmluZzogJ3N0cmluZycsXG4gIG51bWJlcjogJ251bWJlcicsXG4gIGJvb2xlYW46ICdib29sZWFuJyxcbiAgYXJyYXk6ICdhcnJheScsXG4gIG9iamVjdDogJ29iamVjdCcsXG4gIGZ1bmN0aW9uOiAnZnVuY3Rpb24nLFxuICBlbGVtZW50OiAnZWxlbWVudCdcbn1cblxuY29uc3QgdmFsaWRhdG9ycyA9IHtcbiAgW3R5cGVzLmFycmF5XTogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9LFxuICBbdHlwZXMub2JqZWN0XTogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9LFxuICBbdHlwZXMuZWxlbWVudF06ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLnByb3RvdHlwZSAmJiB0eXBlb2YgdmFsdWUucmVuZGVyID09PSAnZnVuY3Rpb24nXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YgKHZhbHVlLCB0eXBlKSB7XG4gIGxldCBmdW5jID0gdmFsaWRhdG9yc1t0eXBlXVxuICBpZiAoZnVuYykge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IHR5cGVcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCAodmFsdWUpIHtcbiAgcmV0dXJuIGlzVHlwZU9mKHZhbHVlLCB0eXBlcy51bmRlZmluZWQpXG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nICh2YWx1ZSkge1xuICByZXR1cm4gaXNUeXBlT2YodmFsdWUsIHR5cGVzLnN0cmluZylcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHZhbHVlKSB7XG4gIHJldHVybiBpc1R5cGVPZih2YWx1ZSwgdHlwZXMubnVtYmVyKVxufVxuXG5mdW5jdGlvbiBpc0Jvb2wgKHZhbHVlKSB7XG4gIHJldHVybiBpc1R5cGVPZih2YWx1ZSwgdHlwZXMuYm9vbGVhbilcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAodmFsdWUpIHtcbiAgcmV0dXJuIGlzVHlwZU9mKHZhbHVlLCB0eXBlcy5hcnJheSlcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlKSB7XG4gIHJldHVybiBpc1R5cGVPZih2YWx1ZSwgdHlwZXMub2JqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNUeXBlT2YodmFsdWUsIHR5cGVzLmZ1bmN0aW9uKVxufVxuXG5mdW5jdGlvbiBpc09uZU9mICh2YWx1ZSwgdmFsdWVzKSB7XG4gIGZvciAobGV0IHZhbCBvZiB2YWx1ZXMpIHtcbiAgICBpZiAodmFsID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCB7XG4gIHR5cGVzLFxuICBpc1R5cGVPZixcbiAgaXNVbmRlZmluZWQsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sLFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNGdW5jdGlvbixcbiAgaXNPbmVPZlxufVxuIl19