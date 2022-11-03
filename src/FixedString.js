import {String} from './String.js';


class FixedStringT extends String {
  
  constructor ( length, encoding = 'ascii' ) {  
    if (!length || length == 0) throw new Error(`Invalid length: ${length}`)  
    super(length, encoding)           
  }
  
  size ( ) {
      return this.length
  }

  encode ( stream, val, parent ) {  
    if (typeof val != 'string') throw new Error(`value: '${val}' must be a string`)
    const v = val.length >= this.length ? val.slice(0,this.length) : val.padEnd(this.length, '\0')
    super.encode(stream, v, parent)
  }

  decode ( stream, parent ) {       
    const s = super.decode(stream, parent)
    return s.replace(/\0/g, '').trimEnd()
  }
}

export {FixedStringT as FixedString};
