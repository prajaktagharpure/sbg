import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function sportEventsReducer(
  state = initialState.events,
  action
) {
  switch (action.type) {
    case types.LOAD_LIVE_EVENTS_DATA_SUCCESS:
      return [...state, ...action.sportEvents]

    case types.LOAD_PRIMARY_MARKET_DATA_SUCCESS:
      const newState = state.slice()
      return newState.map((event, index) =>
        index === action.data.index
          ? { ...event, primaryMarket: action.data.market }
          : event
      )
    default:
      return state
  }
}
