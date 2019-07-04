import initialState from './initialState'
import * as types from '../constants/actionTypes'
import { filterEventFullDetails } from '../actions/helperActions'
import U from '../utils/Util'

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
    case 'REDUX_WEBSOCKET::MESSAGE': {
      const { type, data } = JSON.parse(action.payload.message)

      if (
        (type && type === types.PRICE_CHANGE) ||
        (type && type === types.OUTCOME_STATUS)
      ) {
        let { marketId, eventId, outcomeId, price, status } = data
        let newState = []
        newState = [...state]
        let newEvt = newState.filter(evt => evt.eventId === eventId)[0]

        newEvt = newEvt && JSON.parse(JSON.stringify(newEvt))
        let marketData = []
        if (newEvt && !U.isArrayEmpty(newEvt.marketData)) {
          newEvt.marketData.map(market => {
            if (market.market.marketId === marketId) {
              if (market.market.outcomesData) {
                market.market.outcomesData = market.market.outcomesData.map(
                  outcome => {
                    if (outcome.outcome.outcomeId === outcomeId) {
                      outcome.outcome = Object.assign({}, outcome.outcome, {
                        price,
                        status
                      })
                    }
                    return outcome
                  }
                )
              }
            }
            return market
          })
        }

        if (!U.isArrayEmpty(marketData))
          newEvt = Object.assign({}, newEvt, { marketData })

        if (!U.isObjEmpty(newEvt)) {
          newState = newState.map(evt => {
            if (evt.eventId === newEvt.eventId) {
              return Object.assign({}, evt, newEvt)
            }
            return evt
          })
        }

        return newState
      }

      return state
    }

    default:
      return state
  }
}
