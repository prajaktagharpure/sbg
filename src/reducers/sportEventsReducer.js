import initialState from './initialState'
import * as types from '../constants/actionTypes'
import {
  filterOutNonDisplayable,
  filterEventFullDetails
} from '../actions/helperActions'
import U from '../utils/Util'

export default function sportEventsReducer(
  state = initialState.events,
  action
) {
  switch (action.type) {
    case 'REDUX_WEBSOCKET::MESSAGE': {
      const { type, data } = JSON.parse(action.payload.message)
      if (type && type === types.LIVE_EVENTS_DATA) {
        let filteredSportEvents = filterOutNonDisplayable(data) //Not keeping unfilteredData for the purposes of this app
        return [...state, ...filteredSportEvents]
      } else {
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
            marketData = newEvt.marketData.map(market => {
              if (market.marketId === marketId) {
                if (market.outcomesData) {
                  market.outcomesData = market.outcomesData.map(outcome => {
                    if (outcome.outcome.outcomeId === outcomeId) {
                      outcome.outcome = Object.assign({}, outcome.outcome, {
                        price,
                        status
                      })
                    }
                    return outcome
                  })
                }
              }
              return market
            })
          }

          if (!U.isArrayEmpty(marketData))
            newEvt = Object.assign({}, newEvt, { marketData })

          newState = newState.map(evt => {
            if (evt.eventId === newEvt.eventId) {
              return Object.assign({}, evt, newEvt)
            }
            return evt
          })

          return newState
        }
      }
      return state
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
