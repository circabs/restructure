import 'https://deno.land/x/deno_mocha/global.ts'

import { assert } from './dev_deps.ts'

import { String, FixedString, uint8 } from '../src/mod.ts'


let a
let buf
let a2
  
// a = new String(uint8, 'ascii')
// //console.log('size:', a.size())
// console.log(a)
// buf = a.toBuffer('fred')
// console.log(buf)
// a2 = a.fromBuffer(buf)
// console.log(`'${a2}'`)

// console.log('\n')



// a = new String(null, 'ascii')
// console.log('size:', a.length)
// console.log(a)
// buf = a.toBuffer('fred')
// console.log(buf)
// a2 = a.fromBuffer(buf)
// console.log(`'${a2}'`)
// console.log('\n')


a = new FixedString(9)
console.log('size:', a.size())
console.log(a)
buf = a.toBuffer('fredbill')
console.log(buf)
a2 = a.fromBuffer(buf)
console.log(`'${a2}'`)
console.log('\n')


a = new FixedString(5)
console.log('size:', a.size())
console.log(a)
buf = a.toBuffer('freddy')
console.log(buf)
a2 = a.fromBuffer(buf)
console.log(`'${a2}'`)
console.log('\n')


a = new FixedString(4)
console.log('size:', a.size())
console.log(a)
buf = a.toBuffer('fred')
console.log(buf)
a2 = a.fromBuffer(buf)
console.log(`'${a2}'`)
console.log('\n')

