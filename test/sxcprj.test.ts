import * as r from '../src/mod.ts'




const structPathSend = new r.Struct({
	message_length: r.uint16,   // length of the rest of the msg; does not include this field's two bytes		// 30 with empty ipm_data
	message_type: r.uint8, 
	node_name: new r.FixedString(8),
	pathmon_name: new r.FixedString(6),
	server_name: new r.FixedString(15),
	ipm_data: new r.Buffer(32000)	
})


// console.log('bv size:', structPathSend.size())
let buffer
let value


const ipm_data = new Uint8Array(new TextEncoder().encode('Hello World!'))

const msgPathSend = {
  message_length: 30 + ipm_data.byteLength,
  message_type: 4,
  node_name: '\\CIRCA',
  pathmon_name: '$DEMO',
  server_name: 'CUI-MONITOR',
  ipm_data
}                

buffer = structPathSend.toBuffer(msgPathSend) // returns an object with the fields defined above

value = structPathSend.fromBuffer(buffer) // returns an object with the fields defined above

console.log(value)
console.log(new TextDecoder().decode(value.ipm_data))



// value = bvConnectionInfo.fromBuffer(buffer2) // returns an object with the fields defined above

// console.log(value)


// // encode a person from an object
// buffer = mbBinViews.ConnectionInfo.toBuffer({
//   sessNo: 77,
//   workstation_name: 'TERM01',
//   session_name: 'SESS01',
//   connection_name: 'CONNECTION1',
//   client_ip_addr_1: 11,
//   client_ip_addr_2: 22,
//   client_ip_addr_3: 33,
//   client_ip_addr_4: 44,    
//   txid: {
//       internal: new Uint8Array([3,3,3,3,3,3,3,3]),      
//       external: 'tx-fff-123'
//   }
// } as ConnectionInfo)


// value = mbBinViews.ConnectionInfo.fromBuffer(buffer) // returns an object with the fields defined above

// console.log(value)
