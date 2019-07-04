import Util from './Util'

describe('Testing Util suite', () => {
  describe('isArrayEmpty Tests', () => {
    it('should return true as array is empty', () => {
      let arr = []
      expect(Util.isArrayEmpty(arr)).toEqual(true)
    })
    it('should return true as array is undefined', () => {
      let arr = undefined
      expect(Util.isArrayEmpty(arr)).toEqual(true)
    })
    it('should return false as array is not empty', () => {
      let arr = [1]
      expect(Util.isArrayEmpty(arr)).toEqual(false)
    })
    it('should return false as array is not empty', () => {
      let arr = [undefined]
      expect(Util.isArrayEmpty(arr)).toEqual(false)
    })
    it('should return true as array is null', () => {
      let arr = null
      expect(Util.isArrayEmpty(arr)).toEqual(true)
    })
  })

  describe('isObjEmpty Tests', () => {
    it('should return true as obj is empty', () => {
      let obj = {}
      expect(Util.isObjEmpty(obj)).toEqual(true)
    })
    it('should return true as obj is not empty', () => {
      let obj = { key: 1 }
      expect(Util.isObjEmpty(obj)).toEqual(false)
    })
    it('should return true as obj is undefined', () => {
      let obj = undefined
      expect(Util.isObjEmpty(obj)).toEqual(true)
    })
    it('should return true as obj is null', () => {
      let obj = null
      expect(Util.isObjEmpty(obj)).toEqual(true)
    })
  })
})
