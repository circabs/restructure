import assert from 'node:assert'
import { describe, it } from '@std/testing/bdd'


import { NumericString } from '../src/mod.ts'

let a
let buf
let a2
  

a = new NumericString(3)
console.log('size:', a.size())
buf = a.toBuffer(123)
console.log(buf)
a2 = a.fromBuffer(buf)
console.log(`${a2}\n`)


a = new NumericString(2)
console.log('size:', a.size())
buf = a.toBuffer(1234)
console.log(buf)
a2 = a.fromBuffer(buf)
console.log(`${a2}\n`)


a = new NumericString(4)
console.log('size:', a.size())
buf = a.toBuffer(11)
console.log(buf)
a2 = a.fromBuffer(buf)
console.log(`${a2}\n`)

