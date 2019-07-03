import S from '../services/services'
import * as types from '../constants/actionTypes'
import { send } from '@giantmachines/redux-websocket'

export function loadLiveEventsData() {
  return function(dispatch) {
    dispatch(send({ type: 'getLiveEvents', primaryMarkets: true }))
  }
}

export function loadPrimaryMarketData(marketId, index) {
  return function(dispatch) {
    S.fetchData(S.getMarketUrl() + marketId).then(market => {
      let evtData = {
        type: types.LOAD_PRIMARY_MARKET_DATA_SUCCESS,
        data: {
          market: market.market
        }
      }
      evtData.data.index = index
      promiseAll(evtData.data.market.outcomes, S.getOutcomeUrl()).then(
        outcomes => {
          evtData.data.market.outcomesData = outcomes

          dispatch(evtData)
        }
      )
    })
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
    dispatch({
      type: types.TOGGLE_EVENT_INTEREST_SUCCESS,
      evt
    })
    dispatch(
      send({
        type: evt.isInterested ? 'unsubscribe' : 'subscribe',
        keys: ['e.' + evt.eventId],
        clearSubscription: false
      })
    )
  }
}
