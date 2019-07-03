export default {
  isObjEmpty: obj =>
    Object.entries(obj).length === 0 && obj.constructor === Object,
  isArrayEmpty: arr => arr && arr.length === 0
}
