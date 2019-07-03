import * as types from '../constants/actionTypes'

export function addBetSlip(betSlip) {
  return function(dispatch) {
    dispatch({
      type: types.ADD_BETSLIP_SUCCESS,
      betSlip
    })
  }
}

export function removeBetSlip(index) {
  return function(dispatch) {
    dispatch({
      type: types.REMOVE_BETSLIP_SUCCESS,
      index
    })
  }
}
