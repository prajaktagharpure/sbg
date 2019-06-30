import '@babel/polyfill'
import C from '../constants/Constants'

export default {
  getOutcomeUrl: id =>
    id
      ? C.SERVICE_URL + 'sportsbook/outcome/' + id
      : C.SERVICE_URL + 'sportsbook/outcome/',
  getEventUrl: id =>
    id
      ? C.SERVICE_URL + 'sportsbook/event/' + id
      : C.SERVICE_URL + 'sportsbook/event/',
  getMarketUrl: id =>
    id
      ? C.SERVICE_URL + 'sportsbook/market/' + id
      : C.SERVICE_URL + 'sportsbook/market/',
  fetchData: async (serviceUrl, data) => {
    try {
      const response = await fetch(serviceUrl, data || null)
      try {
        return await response.json()
      } catch (parseJSONError) {
        console.error(`parseJSON failed: ${parseJSONError}`)
      }
    } catch (error) {
      console.error(`Fetch data failed: ${error}`)
    }
  },
  postData: async (serviceUrl, settings) => {
    return this.fetchData(serviceUrl, settings)
  },
  WebSocketService: {
    _ws: null,
    websocketUrl: 'ws://192.168.99.100:8889/',
    initWebSocket() {
      this._ws = new Promise((resolve, reject) => {
        const w = new WebSocket(this.websocketUrl)
        w.onopen = () => {
          resolve(w)
        }
        w.onerror = () => {
          reject(w)
        }
      })
    },
    getData(type, data) {
      this._ws.then(server => {
        server.send(JSON.stringify({ type, ...data }))
      })
    }
  }
}
