import S from '../services/services'
import * as types from '../constants/actionTypes'

export function subscribeToOnMessage() {
  return new Promise(resolve => {
    S.WebSocketService._ws.then(server => {
      server.onmessage = e => {
        const { type, data } = JSON.parse(e.data)
        if (type === types.LIVE_EVENTS_DATA) {
          let evtData = {
            type: types.LOAD_LIVE_EVENTS_DATA_SUCCESS,
            sportEvents: data
          }
          resolve(evtData)
        }
        if (type === types.MARKET_DATA) {
          let evtData = {
            type: types.LOAD_PRIMARY_MARKET_DATA_SUCCESS,
            data: {
              market: data
            }
          }
          resolve(evtData)
        }
      }
    })
  })
}
