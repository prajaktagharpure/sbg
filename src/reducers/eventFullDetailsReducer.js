import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function eventFullDetailsReducer(
  state = initialState.eventFullDetails,
  action
) {
  switch (action.type) {
    case types.LOAD_EVENT_FULL_DETAILS_SUCCESS:
      return [...state, action.eventFullDetails]

    default:
      return state
  }
}
