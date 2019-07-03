import initialState from './initialState'
import * as types from '../constants/actionTypes'
import {
  filterOutNonDisplayable,
  filterEventFullDetails
} from '../actions/helperActions'

export default function sportEventsReducer(
  state = initialState.events,
  action
) {
  switch (action.type) {
    case types.LOAD_LIVE_EVENTS_DATA_SUCCESS: {
      let filteredSportEvents = filterOutNonDisplayable(action.sportEvents) //Not keeping unfilteredData for the purposes of this app
      return [...state, ...filteredSportEvents]
    }
    case types.LOAD_PRIMARY_MARKET_DATA_SUCCESS: {
      const newState = state.slice()

      return newState.map((event, index) => {
        if (index === action.data.index) {
          const newEvent = [{ ...event, marketData: [action.data.market] }]
          return filterEventFullDetails([...newEvent])[0]
        } else {
          return event
        }
      })
    }
    case types.TOGGLE_EVENT_INTEREST_SUCCESS: {
      let evtId = action.evt.eventId,
        newState = []
      newState = [...state]
      return newState.map(evt => {
        if (evt.eventId === evtId) {
          //evt.isInterested = evt.isInterested ? !evt.isInterested : true
          if (evt.isInterested) evt = { ...evt, ...{ isInterested: false } }
          else evt = { ...evt, ...{ isInterested: true } }
        }
        return evt
      })
    }
    default:
      return state
  }
}
