export default {
  isObjEmpty: obj =>
    obj && Object.entries(obj).length === 0 && obj.constructor === Object,
  isArrayEmpty: arr => arr && arr != undefined && arr.length === 0
}
