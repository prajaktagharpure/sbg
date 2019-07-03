import initialState from './initialState'
import * as types from '../constants/actionTypes'
import {
  filterEventFullDetails,
  getEventById,
  getOutcomeById,
  getMarketById
} from '../actions/helperActions'
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
        (type && type === types.OUTCOME_STATUS) ||
        (type && type === types.MARKET_DATA)
      ) {
        let { marketId, eventId, outcomeId, price, status } = data
        let newState = []
        newState = [...state]
        let currEvent = getEventById(newState, eventId)
        if (!U.isObjEmpty(currEvent) && currEvent.marketData) {
          let marketData = currEvent.marketData
          let changedMarket = getMarketById(marketData, marketId, 'market')
          if (!U.isObjEmpty(changedMarket) && type === types.MARKET_DATA) {
            changedMarket = Object.assign({}, changedMarket, status)
          }

          if (type === types.PRICE_CHANGE || type === types.OUTCOME_STATUS) {
            let currMarket = currEvent.marketData.filter(
              market => market.market.marketId === marketId
            )[0]
            if (currMarket && !U.isObjEmpty(currMarket)) {
              let changedOutcome = getOutcomeById(
                currMarket.market.outcomesData,
                outcomeId
              )
              if (!U.isObjEmpty(changedOutcome)) {
                changedOutcome = Object.assign({}, changedOutcome, {
                  price,
                  status
                })
              }
            }
          }
        }
      }

      return state
    }

    default:
      return state
  }
}
