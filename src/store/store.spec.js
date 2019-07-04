// import * as ActionTypes from '../constants/actionTypes';

import MockDate from 'mockdate'
import configureStore from './configureStore'

import { getFormattedDateTime } from '../utils/dates'

describe('Store', () => {
  let dateModified
  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    MockDate.set(new Date('07/07 18:35:01'))
  })
  afterAll(() => MockDate.reset())

  it('should display the results for LIVE_EVENTS_DATA correctly if store configured correctly', () => {
    const store = configureStore()

    const actions = [
      {
        type: 'REDUX_WEBSOCKET::MESSAGE',
        settings: store.getState(),
        payload: {
          message: JSON.stringify({
            type: 'LIVE_EVENTS_DATA',
            data: [
              { eventId: 1234, name: 'event 1', status: { displayable: true } },
              { eventId: 5678, name: 'event 2', status: { displayable: true } },
              { eventId: 9012, name: 'event 3', status: { displayable: false } }
            ]
          })
        }
      }
    ]
    actions.forEach(action => store.dispatch(action))

    const actual = store.getState()
    const expected = [
      { eventId: 1234, name: 'event 1', status: { displayable: true } },
      { eventId: 5678, name: 'event 2', status: { displayable: true } }
    ]

    expect(actual.sportEvents).toEqual(expected)
  })
})
