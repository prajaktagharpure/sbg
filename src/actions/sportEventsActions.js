import S from '../services/services'
import { subscribeToOnMessage } from './webSocketActions'
import * as types from '../constants/actionTypes'

export function loadLiveEventsData() {
  return function(dispatch) {
    //Setting the listener
    subscribeToOnMessage().then(data => {
      dispatch(data)
    })
    S.WebSocketService.getData('getLiveEvents', { primaryMarkets: true })
  }
}

export function loadPrimaryMarketData(marketId, index) {
  return function(dispatch) {
    subscribeToOnMessage().then(evtData => {
      evtData.data.index = index
      promiseAll(evtData.data.market.outcomes, S.getOutcomeUrl()).then(
        outcomes => {
          evtData.data.market.outcomesData = outcomes

          dispatch(evtData)
        }
      )
    })
    S.WebSocketService.getData('getMarket', { id: marketId })
  }
}

function promiseAll(ids, url) {
  const promises = ids.map(id => S.fetchData(url + '' + id))
  return Promise.all(promises).then(data => data)
}

export function loadEventFullDetails(eventId) {
  return function(dispatch) {
    S.fetchData(S.getEventUrl(eventId)).then(data => {
      let eventFullDetails = { ...data.event }

      const markets = eventFullDetails.markets.slice()
      promiseAll(markets, S.getMarketUrl()).then(marketData => {
        eventFullDetails.marketData = marketData.map(currMarket => {
          return promiseAll(currMarket.market.outcomes, S.getOutcomeUrl()).then(
            currMarketOutcomeData => {
              currMarket.market.outcomesData = currMarketOutcomeData
              return currMarket
            }
          )
        })
        Promise.all(eventFullDetails.marketData).then(data => {
          eventFullDetails.marketData = data
          dispatch({
            type: types.LOAD_EVENT_FULL_DETAILS_SUCCESS,
            eventFullDetails
          })
        })
      })
    })
  }
}

export function toggleEventInterest(evt) {
  return function(dispatch) {
    S.WebSocketService.subscribeToData(['e.' + evt.eventId])
    dispatch({
      type: types.TOGGLE_EVENT_INTEREST_SUCCESS,
      evt
    })
  }
}
