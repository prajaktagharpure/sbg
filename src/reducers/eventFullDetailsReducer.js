import initialState from './initialState'
import * as types from '../constants/actionTypes'
import { filterEventFullDetails } from '../actions/helperActions'

export default function eventFullDetailsReducer(
  state = initialState.eventFullDetails,
  action
) {
  switch (action.type) {
    case types.LOAD_EVENT_FULL_DETAILS_SUCCESS: {
      const eventFullDetails = filterEventFullDetails(
        [action.eventFullDetails],
        true
      )
      return [...state, ...eventFullDetails]
    }

    default:
      return state
  }
}
