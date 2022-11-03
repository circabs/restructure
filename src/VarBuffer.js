import {Base} from './Base.js';
import {Buffer} from './Buffer.js'
import {Number as NumberT} from './Number.js';
import * as utils from './utils.js';

export class VarBufferT extends Buffer {
  constructor(length, adjustment) {
    if (typeof length != 'string') throw new Error(`Invalid length: ${length} - not a string`)
    if (typeof adjustment != 'number') throw new Error(`Invalid adjustment: ${adjustment} - not a number`)
    super();
    this.length = length;
    this.adjustment = adjustment
  }
  
  decode(stream, parent) {
    const length = utils.resolveLength(this.length, stream, parent);
    return stream.readBuffer(length);
  }

  size(val, parent) {
    super.size(val,parent)
    if (!val) {
      return utils.resolveLength(this.length, null, parent);
    }

    let len = val.length;
    if (this.length instanceof NumberT) {
      len += this.length.size();
    }

    return len;
  }

  encode(stream, buf, parent) {
    if (this.length instanceof NumberT) {
      this.length.encode(stream, buf.length);
    }

    return stream.writeBuffer(buf);
  }
}

// export {VarBufferT as VarBuffer};
