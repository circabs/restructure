import {String} from './String.js';


class NumericStringT extends String {
  
  constructor ( length, encoding = 'ascii' ) {  
    if (!length || length == 0) throw new Error(`Invalid length: ${length}`)
    super(length, encoding)       
  }
  
  size ( ) {
      return this.length
  }

  encode ( stream, val, parent ) {  
    const s = typeof val == 'number' ? ''+val : val
    const v = s.length >= this.length ? s.slice(0,this.length) : s.padStart(this.length, '0')
    super.encode(stream, v, parent)
  }

  decode ( stream, parent ) {       
    const s = super.decode(stream, parent)
    const val = parseInt(s,10)
    return val 
  }
}

export {NumericStringT as NumericString};
