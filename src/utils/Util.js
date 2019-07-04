const Util = {
  isObjEmpty: obj => {
    if (obj === undefined || obj === null) return true
    return obj && Object.entries(obj).length === 0 && obj.constructor === Object
  },
  isArrayEmpty: arr => {
    if (arr === undefined || arr === null) return true
    return arr && arr.length === 0
  }
}

export default Util
