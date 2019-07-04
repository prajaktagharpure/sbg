import { filterOutNonDisplayable } from './helperActions'

describe('helperActions suite', () => {
  describe('filterOutNonDisplayable suite', () => {
    const evts_key = [
      { event: { eventId: 1, status: { displayable: true } } },
      { event: { eventId: 2, status: { displayable: true } } },
      { event: { eventId: 3, status: { displayable: true } } },
      { event: { eventId: 4, status: { displayable: false } } },
      { event: { eventId: 5, status: { displayable: true } } }
    ]
    it('should result in the array length 4 after filtering with key', () => {
      const results = filterOutNonDisplayable(evts_key, 'event')

      expect(results.length).toEqual(4)
    })
    const evts = [
      { eventId: 1, status: { displayable: true } },
      { eventId: 2, status: { displayable: true } },
      { eventId: 3, status: { displayable: true } },
      { eventId: 4, status: { displayable: false } },
      { eventId: 5, status: { displayable: false } }
    ]
    it('should result in the array length 3 after filtering without key', () => {
      const results = filterOutNonDisplayable(evts)

      expect(results.length).toEqual(3)
    })
  })
})
