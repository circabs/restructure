import { assert } from './test/dev_deps.ts'

// console.log(assert)

// console.log(NodeBuffer)


import * as r from './src/mod.ts'
const { uint64be, uint64le, DecodeStream, EncodeStream } = r

const beBigInt = 0xffeeddccbbaa9988n
const beBuf = new Uint8Array([0xff, 0xee, 0xdd, 0xcc, 0xbb, 0xaa, 0x99, 0x88])

assert.deepEqual(uint64be.toBuffer(beBigInt), beBuf);
assert.equal(uint64be.size(), 8)     
assert.deepEqual(uint64be.fromBuffer(beBuf), beBigInt);



const leBigInt = 0x8899aabbccddeeffn
const leBuf = new Uint8Array([0xff, 0xee, 0xdd, 0xcc, 0xbb, 0xaa, 0x99, 0x88])

assert.deepEqual(uint64le.toBuffer(leBigInt), leBuf);
assert.equal(uint64le.size(), 8)     
assert.deepEqual(uint64le.fromBuffer(leBuf), leBigInt);


// const buf2 = new EncodeStream(bi);


// Deno.test("testPutVarbig", function () {
//   const buff = new Uint8Array(8);
//   putVarbig(buff, 0xffeeddccbbaa9988n);
//   assert.equals(
//     buff,
//     new Uint8Array([0xff, 0xee, 0xdd, 0xcc, 0xbb, 0xaa, 0x99, 0x88]),
//   );
// });

// Deno.test("testPutVarbigLittleEndian", function () {
//   const buff = new Uint8Array(8);
//   putVarbig(buff, 0x8899aabbccddeeffn, { endian: "little" });
//   assert.equals(
//     buff,
//     new Uint8Array([0xff, 0xee, 0xdd, 0xcc, 0xbb, 0xaa, 0x99, 0x88]),
//   );
// });

// console.log(Object.getOwnPropertyNames(r.DecodeStream.prototype))
// console.log(Object.getOwnPropertyNames(r.EncodeStream.prototype))


// const f1 = function () {  
      
//   const stream = new DecodeStream(buf);
//   assert.equal(stream.readString(buf.length), 'some text');
    
// }

// let struct = new r.Struct({
//   n1: r.uint8
// })

// let buf

// n = r.uint32be
// console.log(n)
// buf = n.toBuffer(4)
// console.log(buf)
// console.log(n.fromBuffer(buf))


// n = r.uint32le
// console.log(n)
// buf = n.toBuffer(4)
// console.log(buf)
// console.log(n.fromBuffer(buf))


// n = r.uint64be
// console.log(n)
// buf = n.toBuffer(4)
// console.log(buf)
// console.log(n.fromBuffer(buf))


// n = r.uint32le
// console.log(n)
// buf = n.toBuffer(4)
// console.log(buf)
// console.log(n.fromBuffer(buf))
