import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function betSlipsReducer(state = initialState.betSlips, action) {
  switch (action.type) {
    case types.ADD_BETSLIP_SUCCESS: {
      return [...state, action.betSlip]
    }

    case types.REMOVE_BETSLIP_SUCCESS: {
      return state.filter((item, index) => index !== action.index)
    }

    default:
      return state
  }
}
