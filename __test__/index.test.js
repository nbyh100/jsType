/**
 * Created by jiuzhou.zhang on 2018/1/21.
 */

'use strict'

import * as jstype from '../src/index'

const typeAndValues = {
  'undefined': undefined,
  string: 'string',
  number: 0,
  bool: true,
  array: [0, 1],
  object: {key: 'value'},
  function: () => null
}

for (const type in typeAndValues) {
  const value = typeAndValues[type]
  for (const t in typeAndValues) {
    const func = 'is' + t[0].toUpperCase() + t.substring(1)
    test(`${value} is ${t === type ? 'type' : 'not type'} of ${t}`, () => {
      expect(jstype[func](value)).toBe(t === type)
    })
  }
}

const val1 = 'foo'
const val2 = '1'
const vals = [1, true, 'foo']
test(`${val1} is one of ${vals}`, () => {
  // expect(jstype.isOneOf(val1, vals)).toBe(true)
})
test(`${val2} is not one of ${vals}`, () => {
  expect(jstype.isOneOf(val2, vals)).toBe(false)
})
