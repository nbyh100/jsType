'use strict'
/**
 * Created by jiuzhou.zhang on 17/2/2.
 */

const types = {
  undefined: 'undefined',
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  array: 'array',
  object: 'object',
  function: 'function',
  element: 'element'
}

const validators = {
  [types.array]: (value) => {
    return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]'
  },
  [types.object]: (value) => {
    return typeof value === 'object' && Object.prototype.toString.call(value) !== '[object Array]'
  },
  [types.element]: (value) => {
    return typeof value === 'object' && value.prototype && typeof value.render === 'function'
  }
}

function isTypeOf (value, type) {
  let func = validators[type]
  if (func) {
    return func(value)
  } else {
    return typeof value === type
  }
}

function isUndefined (value) {
  return isTypeOf(value, types.undefined)
}

function isString (value) {
  return isTypeOf(value, types.string)
}

function isNumber (value) {
  return isTypeOf(value, types.number)
}

function isBool (value) {
  return isTypeOf(value, types.boolean)
}

function isArray (value) {
  return isTypeOf(value, types.array)
}

function isObject (value) {
  return isTypeOf(value, types.object)
}

function isFunction (value) {
  return isTypeOf(value, types.function)
}

function isOneOf (value, values) {
  for (let val of values) {
    if (val === value) {
      return true
    }
  }
  return false
}

export {
  types,
  isTypeOf,
  isUndefined,
  isString,
  isNumber,
  isBool,
  isArray,
  isObject,
  isFunction,
  isOneOf
}
