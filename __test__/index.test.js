/**
 * Created by jiuzhou.zhang on 2018/1/21.
 */

'use strict'

import * as jsType from '../src/index'

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
    test(`${t === type ? '[TRUE]  ' : '[FALSE] '}${value} is type of ${t}`, () => {
      expect(jsType[func](value)).toBe(t === type)
    })
  }
}
