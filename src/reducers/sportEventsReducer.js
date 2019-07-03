import initialState from './initialState'
import * as types from '../constants/actionTypes'
import {
  getEventById,
  getMarketById,
  getOutcomeById,
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
          (type && type === types.OUTCOME_STATUS) ||
          (type && type === types.MARKET_DATA)
        ) {
          let { marketId, eventId, outcomeId, price, status } = data
          let newState = []
          newState = [...state]
          let currEvent = getEventById(newState, eventId)
          if (!U.isObjEmpty(currEvent) && currEvent.marketData) {
            let marketData = currEvent.marketData
            let changedMarket = getMarketById(marketData, marketId)
            if (!U.isObjEmpty(changedMarket) && type === types.MARKET_DATA) {
              changedMarket = Object.assign({}, changedMarket, status)
            }

            if (type === types.PRICE_CHANGE || type === types.OUTCOME_STATUS) {
              let currMarket = currEvent.marketData.filter(
                market => market.marketId === marketId
              )[0]
              if (currMarket && !U.isObjEmpty(currMarket)) {
                let changedOutcome = getOutcomeById(
                  currMarket.outcomesData,
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
